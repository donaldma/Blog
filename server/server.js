const PORT = 9010
const ENV = process.env.NODE_ENV || "development";
const express = require('express');  
const http = require('http'); 

const app = express();
const server = http.createServer(app);
const cors = require('cors');
const bodyParser  = require("body-parser");

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const knexLogger = require('knex-logger');

const apiRoutes = require("./routes/api");
const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");

const dbHelper = require("./lib/dbHelper")(knex);
const session = require("express-session")({
    secret: 'hi my name is stan',
    resave: false,
    saveUninitialized: true
});

app.use(session);

app.use(cors());

app.use(knexLogger(knex));

app.set('view engine', 'ejs');

app.use('/styles', express.static('../styles/'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/posts/*', (req, res) => {
  res.render('index');
})

app.use('/api', apiRoutes(dbHelper));

app.use('/404', (req, res, next) => {
  res.status(404).render('404');
})

app.use('/500', (req, res, next) => {
  res.status(500).render('500');
})

app.use((req, res, next) => {
  res.redirect('/404');
})

server.listen( process.env.PORT || PORT, () => {
  console.log('Server running on', PORT);
});