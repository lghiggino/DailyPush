import express from 'express';

const app = express()

app.get('/health', (req, res) => {
    res.json(`I am healthy at ${Date.now()}`)
})

app.listen(3333, () => {
    console.log('HTTP server running')
})