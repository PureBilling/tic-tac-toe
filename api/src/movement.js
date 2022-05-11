module.exports = (router) => {
  router.get("/movement", (req, res) => {
    console.log("GET request on /movement");
    res.sendStatus(200);
  });
  router.post("/movement", (req, res) => {
    console.log("POST request on /movement");
    res.sendStatus(200);
  });

  return router;
};
