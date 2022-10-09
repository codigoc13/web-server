const http = require('http')

http
  .createServer((req, res) => {
    res.write(JSON.stringify(persona))
    res.end()
  })
  .listen(8013)

console.log('Escuchando el puerto', 8013)
