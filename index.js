const express = require("express");
const routes = require("./src/routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(routes);

// app.get("/", (req, res) => {
//   return res.json({ rota: "main" });
// });

const ip = process.env.IP || "0.0.0.0";
const port = process.env.PORT || 3000;

app.listen(port, ip);
