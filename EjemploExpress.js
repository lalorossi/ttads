var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// Express.js es como servlets de java. Define rutas de URL y las funciones que se ejcutan con cada ruta
// Es un filtro automático de un switch en req.url en el ejemplo básico de servidor
// Express se instala con npm: npm install express

// No vamos a trabajar con templates

// En la ruta de escucha se pueden poner expresiones regulares


// ----------RUTAS---------- //
// app.METHOD(PATH, HANDLER)

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete(/.*-user/, function (req, res) { // regexp
  res.send('Got a DELETE request at /user');
});

app.all('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
app.get('/users/:userId/books/:bookId', function(req, res) { // Route parameters
  res.send(req.params);
});

// res.send() solo manda texto

// Los campos :userId y :bookId son "variables" que se definen segun la ruta a la que se llame
// Ej.: /users/1/books/5 tiene userId=1, bookId=5
// Esos parámetros se leen con req.params.userId o req.params.bookId

// Esto ya arranca un nuevo servidor y define la escucha igual que el ejemplo básico de HTTP
// Se ejecuta con node EjemploExpress.js

// Lo que no vamos a ver con express es el response.render() que le manda un archivo para renderizar al navegador

// El midleware son mini handlers que procesan la request o la response y la van pasando una vez procesada
// Cada midleware puede cortar la cadena y devolver por sí mismo la respuesta al cliente

// ----------MIDLEWARE---------- //


app.use(function (req, res, next) { // Sin punto de montaje (mount point)
  console.log('Time:', Date.now());
  next();
});
// Montado en '/user/:id'
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});
// Montado en GET '/user/:id'
app.get('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// Si al app use no le paso una ruta, se ejecuta para cualquier request que llegue al server

// El router te permite crear mini apps, que tienen "caminos" de midleware encapsuladas para usar en la app


// ----------ROUTER---------- //

var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

app.use('/birds', router);

// La última línea es la que le dice a la aplicación que la URL /birds va a seguir el ruteo especificado por la variable router