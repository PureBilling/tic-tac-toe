module.exports = (router) => {
  router.get("/movement", (req, res) => {
    const grid = req.app.get('grid');
    res.send(JSON.stringify({ grid }));
  });

  router.post("/movement", (req, res) => {
    const grid = req.app.get('grid');
    const targetCell = req.body.cell;

    const isCellOccupied = Boolean(grid[targetCell]);
    
    if (!isCellOccupied) {
      req.app.set('grid', {...grid, [targetCell]: 'cross' });
    }
    
    res.send(JSON.stringify({ grid }));
  });

  return router;
};


