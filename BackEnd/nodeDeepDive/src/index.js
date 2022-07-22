const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('bateu em /')
    res.send('apple').status(200)
})

const PORT = process.env.PORT || 3333
console.log(`Server running on Port: ${PORT}`)
app.listen(PORT)