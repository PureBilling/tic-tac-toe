module.exports = (router) => {
  router.get("/movement", (req, res) => {
    const grid = req.app.get('grid');
    res.status(200).send(JSON.stringify(grid));
  });

  router.post("/movement", (req, res) => {
    const targetCell = req.body.cell;
    const grid = req.app.get('grid');

    const possibleWinner = getPossibleWinner(grid);
    if (possibleWinner) {
      res.statusMessage = `${possibleWinner} is the winner!`;
      return res.sendStatus(400);
    }

    const isGameTied = Object.values(grid).every(val => val !== false);
    if (isGameTied) {
      res.statusMessage = 'The game has ended, it\'s a tie!';
      return res.sendStatus(400);
    }

    const isCellOccupied = Boolean(grid[targetCell]);
    if (isCellOccupied) {
      res.statusMessage = 'Target cell is occupied';
      return res.sendStatus(400);
    }

    const actualGrid = { ...grid, [targetCell]: 'cross' };

    const machinePlayingCell = makeAIMovement(actualGrid);
    const finalGrid = { ...actualGrid, [machinePlayingCell]: 'circle' }

    req.app.set('grid', finalGrid);
    res.sendStatus(200);
  });

  return router;
};

const makeAIMovement = (grid) => {
  const { A, B, C, D, F, G, H, I } = grid;
  const topLine = { A, B, C };
  const bottomLine = { G, H, I };
  const leftColumn = { A, D, G };
  const rightColumn = { C, F, I };

  return getPlayInSequence(topLine)
    || getPlayInSequence(bottomLine)
    || getPlayInSequence(leftColumn)
    || getPlayInSequence(rightColumn)
    || getRandomPlay(grid)
}

const getPlayInSequence = (sequence) => {
  const sequenceValues = Object.values(sequence);
  const sequenceArray = Object.entries(sequence);

  const hasEmptyCell = sequenceValues.some(val => val === false);
  if (!hasEmptyCell) {
    return null;
  }

  const crossCount = sequenceValues.filter(val => val === 'cross')
  if (crossCount.length === 2) {
    const playingCell = sequenceArray.find(array => array[1] === false);
    return playingCell[0];
  }

  return null;
};

const getRandomPlay = (grid) => {
  const sequenceArray = Object.entries(grid);
  const playingCell = sequenceArray.find(array => array[1] === false);
  return playingCell[0];
};

const getPossibleWinner = (grid) => {
  const { A, B, C, D, E, F, G, H, I } = grid;
  const topLine = { A, B, C };
  const centerLine = { D, F, G };
  const bottomLine = { G, H, I };
  const leftColumn = { A, D, G };
  const rightColumn = { C, F, I };
  const diagonal1 = { A, E, I };
  const diagonal2 = { C, E, G };

  return getWinnerInSequence(topLine) ||
    getWinnerInSequence(centerLine) ||
    getWinnerInSequence(bottomLine) ||
    getWinnerInSequence(leftColumn) ||
    getWinnerInSequence(rightColumn) ||
    getWinnerInSequence(diagonal1) ||
    getWinnerInSequence(diagonal2)
};

const getWinnerInSequence = (sequence) => {
  const sequenceValues = Object.values(sequence);

  const isPlayerWinner = sequenceValues.every(val => val === 'cross') && 'Player';
  const isAIWinner = sequenceValues.every(val => val === 'circle') && 'Machine';

  return isPlayerWinner || isAIWinner || null;
};