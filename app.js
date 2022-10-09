const express = require('express')
const app = express()
const port = 8013

//TODO: require('hbs)
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Sergio Manrique',
    titulo: 'Módulo Node JS',
  })
})

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}`)
})
