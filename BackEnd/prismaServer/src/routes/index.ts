import { Router } from "express";
import { prisma } from '../prisma'

export const routes = Router()

routes.get('/', (req, res) => {
    res.send(`<div> 
    <h1>Hello</h1>   
    </div>`)
})

//https://youtu.be/YBp7UWyhe28?t=2939

routes.get('/health', (req, res) => {
    res.json(`I am healthy at ${Date.now()}`)
})

routes.get('/courses', async (req, res) => {
    try {
        const courses = await prisma.courses.findMany()
        res.json(courses)
    } catch (error) {
        console.error(error)
    }
})

routes.get('/courses/:id', async (req, res) => {
    try {
        const { id } = req.params
        console.log("COURSE ID:>>", id)
        const oneCourse = await prisma.courses.findMany({
            where: { id }
        })
    } catch (error) {
        console.error(error)
    }
})

