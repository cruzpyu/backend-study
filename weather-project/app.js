const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const cityName = req.body.cityName;
  const apiKey = "21357fbe8e14687ac356778c85a2ee36";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${apiKey}`;

  https.get(url, (response) => {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);

      const temperature = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconUrl = `"https://openweathermap.org/img/wn/${icon}@2x.png"`;

      res.write(
        `<h1>The temperature in ${cityName} is ${temperature}º degrees</h1>`
      );
      res.write(`<img src=${iconUrl}/>`);
      res.write(`<p>The Weather is currently ${description}</p>`);
      res.send();
    });
  });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
