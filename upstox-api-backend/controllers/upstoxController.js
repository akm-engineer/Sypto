// controllers/upstoxController.js
const Upstox = require("../models/upstox");

module.exports = {
  getHoldings: async (req, res) => {
    try {
      const holdings = await Upstox.getHoldings();
      res.json(holdings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  placeOrder: async (req, res) => {
    try {
      const order = req.body;
      const response = await Upstox.placeOrder(order);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  handlePostback: (req, res) => {
    console.log("Received postback:", req.body);
    // Process postback data
    res.sendStatus(200);
  },
};
