
  
const app = require('express')();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const client = require('./database');
const PORT = process.env.PORT || 8080;


app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controller/AuthController')(app);
require('./controller/EstadosController')(app);
require('./controller/AnuncianteController')(app);
require('./controller/PlanosController')(app);


app.get('/', (req, res) => {
  res.sendStatus(200);
});

server.listen(PORT, () => {
  client.connect(err => {})
  console.log('banco conectado')
});
