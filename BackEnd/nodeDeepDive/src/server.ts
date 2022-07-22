import express from 'express';
import { Request, Response } from 'express';

const app = express()

app.get('/courses/:id', (req, res) => {
    const { id } = req.params
    console.log(`bateu em /courses/${id}`)
    res.send('teste').status(200)
})

const PORT = process.env.PORT || 3333
console.log(`Server running on Port: ${PORT}`)
app.listen(PORT)