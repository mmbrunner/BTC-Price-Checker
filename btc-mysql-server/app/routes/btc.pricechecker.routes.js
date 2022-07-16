module.exports = app => {
    const PriceCheck = require("../controllers/btc.pricechecker.controller.js");
    var router = require("express").Router();
  // Post new pricecheck
    router.post("/", PriceCheck.create);
  // Retrieve 10 MOST recent entries
    router.get("/", PriceCheck.getTop10);
    app.use('/api/pricecheck', router);
};