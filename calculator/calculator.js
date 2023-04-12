const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
  resp.sendFile(__dirname + "/index.html");
});
app.post("/", (req, resp) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 + num2;
  resp.send(`Your result is ${result}`);
});
app.get("/bmiCalculator", (req, resp) => {
  resp.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", (req, resp) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const result = weight / (height * height);
  resp.send(`Your BMI is ${result}`);
});
app.listen(3000, () => {
  console.log("server started on port 3000");
});
