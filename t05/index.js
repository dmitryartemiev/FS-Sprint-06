import express from "express";
const app = express();

const normalRouter = require('./normal-router')
const quantumRouter = require('./quantum-router')

const PORT = 1234;

const time = normal.calculateTime();
const quantumTime = quantum.calculateTime();

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});

app.set("view engine", "ejs");
app.set("views", "./t05/views");

app.get("/normal", (req, res, next) => {
    res.render("normal",
      {
        year: time.years(),
        month: time.months(),
        day: time.days()
      });
  });

app.get("/normal", (req, res, next) => {
  res.render("normal",
    {
      test: "rofl",
    });
});

app.get("/quantum", (req, res, next) => {
    res.render("quantum",
      {
        test: "rofl",
      });
  });
