const PORT = 3001;
const ENV = process.env.ENV || "development";
const express = require('express');  
const app = express();
const http = require('http'); 
const server = http.createServer(app);
const db  = require('./db');
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const bodyParser  = require("body-parser");
const router = express.Router();
const dbHelper = require("./lib/dbHelper")(knex);
const apiRoutes = require("./routes/api");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRoutes(dbHelper));

// const server = http.createServer(function(request, response) {
//   response.writeHead(200, {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json'
//   });
//   response.end('hi');
// }).listen(8080);


// app.listen(PORT);
// console.log(`Server running on ${PORT}`);
app.use((req, res, next) => {
  res.render('../views/index');
})

server.listen( 3000, () => {
  console.log('Server running');
});