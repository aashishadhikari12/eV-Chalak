const express = require('express')
const dbConnect = require('./src/db/connection')
dbConnect()
const app = express()
const port = 6000
const userList= [
  'kaylin','ram','gopal'
]
app.get('/me', (req, res) => {
  res.send({
    name:"Aashish",
    balance:100000,
    rewardPoint: 100
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})