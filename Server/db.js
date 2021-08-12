const mongoose = require('mongoose')

var mongoURL = 'mongodb+srv://immkp:manas235@cluster0.o8s6f.mongodb.net/Mpizza'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
  console.log('mongo db connecton sucessful')
})

db.on('error', () => {
 console.log('mongodb conn faileed')
})

module.exports = mongoose;

