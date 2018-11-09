const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8010

if (process.env.PORT !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const userRoutes = require('./src/routes/users.js')
app.use('/users', userRoutes)

const knapsakRoutes = require('./src/routes/knapsaks.js')
app.use('/knapsaks', knapsakRoutes)

const itemRoutes = require('./src/routes/items.js')
app.use('/items', itemRoutes)

const knapsakItemsRoutes = require('./src/routes/knapsakItems.js')
app.use('/knapsakItems', knapsakItemsRoutes)


app.all('*', (req, res, next) => res.sendStatus(404))

app.use((err, req, res, next) => {
  res.status(err.status).json(err)
})

// for static images
// app.use(express.static(path.resolve('./public')));
// app.use('/images',express.static(path.resolve('./public')));

if (process.env.PORT !== 'test') {
  app.listen(port, () => {
    console.log(`Running on port ${port}!`)
  })
}

module.exports = app
