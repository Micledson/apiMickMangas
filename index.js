const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "eae heroku" });
});

app.listen(process.env.PORT);
