const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.get("/contact", (req, res) => {
  res.send("contact me at: email@email.com");
});

app.get("/about", (req, res) => {
  res.send(
    "this is an about text that tells you a bit about what this website is about"
  );
});

app.listen(3000, () => console.log("server started on port 3000"));
