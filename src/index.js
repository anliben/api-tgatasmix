const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const client = require('./database');
const morgan = require("morgan");
const path = require("path");

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads"))
);


require('./controller/AuthController')(app);
require('./controller/EstadosController')(app);
require('./controller/AnuncianteController')(app);
require('./controller/PlanosController')(app);


app.get('/', (req, res) => {
  res.sendStatus(200).json({message: "ok"});
});

app.listen(3000, () => {
  client.connect(err => {})
  console.log('banco conectado')
});
