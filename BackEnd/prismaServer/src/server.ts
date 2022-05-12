import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { routes } from './routes/index';

dotenv.config()

const app = express()

app.use(express.json({limit: '50mb'}))
app.use(cors())
//{ origin: 'http://localhost:3000' }
app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(`HTTP server running in port ${process.env.PORT}`)
})
