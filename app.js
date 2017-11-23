const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Routes = require('./routes')
const port = process.env.PORT || 3000


app.use(express.static('client'))
app.use(bodyParser.json({limit: '20mb'}))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))

app.use('/', ...Routes)

app.listen(port, () => {
  console.log('----------------------------------------------------')
  console.log(' Server running in port: '+port+ '!')
  console.log(' Go to your browser and run "http://localhost:3000"')
  console.log('----------------------------------------------------')
})
