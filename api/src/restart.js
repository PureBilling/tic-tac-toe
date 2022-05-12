module.exports = (router) => {
  router.post('/restart', (req, res) => {
    const initialGrid = req.app.get('initialGrid');
    req.app.set('grid', initialGrid);
    res.sendStatus(200);
  });

  return router;
};