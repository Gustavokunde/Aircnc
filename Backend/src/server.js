const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const path = require("path");
const routes = require("./routes");

const app = express();
mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-e2qvh.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
//req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
app.use(cors());
app.use(express.json()); // para utilizar formato json
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);
app.listen(3333);
