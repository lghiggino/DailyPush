const express = require('express')

const app = express()

app.get('/', (req,res) => {
    console.log('bateu em /')
    res.send('banana').status(200)
})

const PORT = process.env.PORT || 3333

app.listen(PORT)