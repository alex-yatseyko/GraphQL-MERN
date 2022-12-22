const express = require('express')
const cors = require('cors')
const colors = require('colors')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/db')
require('dotenv').config()
const port = process.env.PORT || 4000

const app = express()

// Connect DB
connectDB()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))

app.listen(port, console.log(`Server running on port ${port}`))