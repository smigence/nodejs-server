const express = require("express");
const path = require("path");
const morgan = require("morgan");
const routers = require("./routers");
var app = express();

const middleware = [
  express.urlencoded({ extended: false }),
  express.json(),
  express.static(path.join(__dirname, "public")),
  morgan("dev")
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(middleware);
app.use(routers);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
