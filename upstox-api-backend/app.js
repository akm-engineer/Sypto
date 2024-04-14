const express = require("express");
const app = express();
const upstoxRoutes = require("./routes/upstoxRoutes");

app.use(express.json());
app.use("/api/upstox", upstoxRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
