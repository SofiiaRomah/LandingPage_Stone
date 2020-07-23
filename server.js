const express = require("express");
// const http = require("http");
// const https = require("https");
const app = express();
const path = require("path");
const fs = require("fs");

// var options = {
//   key: fs.readFileSync("key.pem"),
//   cert: fs.readFileSync("cert.pem"),
// };

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/index.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.js"));
});

app.listen(3000, () => console.log("Gator app listening on port 3000!"));

// Create an HTTP service.
// http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
// https.createServer(options, app).listen(443);
