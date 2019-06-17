
var http = require('http');
    var server = http.createServer();

    server.on('connection', function(c) {
      // 'connection' listener
      console.log('client connected');
      c.on('end', function() {
        console.log('client disconnected');
      });
    });

    server.on('request', function(req, res){
      console.log(req.headers);
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.write('Hola ' + req.url + Math.random());
      res.end();
    });

    server.on('error', function (err){
      throw err;
    });

    server.listen(8120);

// Para iniciar, node ServidorDePrueba.js
// Se accede al servidor desde localhost::8120
// Los console logs se ven (obviamente) en la consola

// El req.url agarra lo que está después de localhost:8120/*******

// Para que esto tenga alguna funcionalidad, dentro del listener server.on hay que ponerle un lector de URL
// que tome el texto de la URL y busque el archivo correspondiente
// Y como esto es javascript, acá adentro puedo ejecutar todo el código que quiera.

// Para hacer cambios en el servidor, no se puede hacer mientras está corriendo. Hay que cerrarlo y volverlo a abir

// node --inspect "archivo" crea un debugger, y cuando abrís chrome://devices, creo que te puede correr la página en el celu (no lo mostró)
  