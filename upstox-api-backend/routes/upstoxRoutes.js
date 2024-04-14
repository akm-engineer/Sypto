const express = require("express");
const router = express.Router();
const upstoxController = require("../controllers/upstoxController");

router.get("/holdings", upstoxController.getHoldings);
router.post("/order", upstoxController.placeOrder);
router.post("/postback", upstoxController.handlePostback);

module.exports = router;
