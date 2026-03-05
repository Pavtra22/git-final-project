const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/calculate", (req, res) => {

  const { principal, rate, time } = req.body;

  const simpleInterest = (principal * rate * time) / 100;

  res.json({ simpleInterest });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});