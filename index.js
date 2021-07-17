const express = require('express')
const app = express()
const port = 3000


// function(req, res) {
//     return res.send('Hello World');
// }
app.get('/tin-tuc', (req, res) => {
  res.send('Hello World! ALm')
})
//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})