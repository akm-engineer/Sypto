// models/upstox.js
const axios = require("axios");
const WebSocket = require("ws");

const API_KEY = "API_KEY";
const API_SECRET = "API_SECRET";
const BASE_URL = "https://api.upstox.com/";

const upstox = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": API_KEY,
    "x-api-secret": API_SECRET,
  },
});

const ws = new WebSocket("wss://socket.upstox.com/?api_key=" + API_KEY);

ws.on("open", function open() {
  console.log("WebSocket connected");
});

ws.on("message", function incoming(data) {
  console.log("Received message:", data);
  // Process received data
});

ws.on("error", function error(err) {
  console.error("WebSocket error:", err);
});

module.exports = {
  getHoldings: async () => {
    try {
      const response = await upstox.get("/holdings");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  placeOrder: async (order) => {
    try {
      const response = await upstox.post("/orders", order);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  subscribeToInstrument: (instrumentToken) => {
    ws.send(
      JSON.stringify({ action: "subscribe", instrument_token: instrumentToken })
    );
  },
};
