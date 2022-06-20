const { getMovement } = require("./../services/computer");

module.exports = (router) => {
  router.post("/movement", (req, res) => {
    console.log("POST request on /movement");
    console.log(req.body);

    const nextMove = getMovement(req.body);

    res.status(200).json(nextMove);
  });

  return router;
};
