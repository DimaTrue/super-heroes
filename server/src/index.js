const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello Word");
});

const port = process.env.PORT || 4001;
app.listen(port, function () {
  console.log("Server Running");
});