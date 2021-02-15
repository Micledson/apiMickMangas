const express = require("express");
const routes = require("./src/routes");
const app = express();

app.get("/", (req, res) => {
  return res.json({ rota: "main" });
});
app.use(routes);

app.listen(process.env.PORT | 3000);
