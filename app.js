const http = require('http')

/**
 * En el parámetro request se encuentran las solicitudes al servidor
 * La response es lo que el servidor le va a responder al cliente
 * */

http
  .createServer((req, res) => {
    res.write('Hola Mundo')
    res.end()
  })
  .listen(8013)

console.log('Escuchando el puerto', 8013)
