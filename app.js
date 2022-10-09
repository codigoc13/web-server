const http = require('http')

/**
 * En el parámetro request se encuentran las solicitudes al servidor
 * La response es lo que el servidor le va a responder al cliente
 * */

http
  .createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' })
    // console.log(req)
    // res.write('Hola Mundo')

    res.writeHead(200, { 'Content-Type': 'application/json' })
    persona = {
      nombre: 'Sergio',
      profesion: 'Programador',
    }
    res.write(JSON.stringify(persona))
    res.end()
  })
  .listen(8013)

console.log('Escuchando el puerto', 8013)
