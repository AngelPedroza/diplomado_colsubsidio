const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send({"nombre": "coca-cola", "valor": 20000})
})

// app.post('/producto', (req, res) => {
//     console.log
// })

app.listen(3000)