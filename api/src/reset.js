module.exports = (router) => {
  router.post("/reset", (req, res) => {
    console.log('reset');
    res.send(JSON.stringify({ test: 'test' }));
  });

  return router;
};
