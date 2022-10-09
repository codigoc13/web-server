const express = require('express')
const app = express()
const port = 8013

// Servir contenido extático
app.use(express.static('public'))

/**
 * Como fue asignado el '/' al middleware estático,
 * la siguiente funcion nunca se va a ejecutar
 */
// app.get('/', (req, res) => {
//   res.send('Home Page')
// })

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo en su respectiva ruta')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}`)
})
