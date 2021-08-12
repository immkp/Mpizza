const express = require('express')
const db = require('./db')
const cors = require('cors')
const Pizza = require('./models/pizzaModel')

const app = express()
app.use(express.json())
const path = require('path')

const pizzasRoute = require('./routes/pizzaRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use(cors())
app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)

if(process.env.NODE_ENV === 'production'){
 app.use('/',express.static('client/build'))
 app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname, '/client/build/index.html'))
 })
}

// app.get('/', (req, res) => {
  // res.send('server working')
// })

const port = process.env.PORT || 5000

app.listen(port, () => `server running on port ${port}`)
