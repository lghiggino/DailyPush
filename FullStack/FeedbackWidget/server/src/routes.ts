import { Router } from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer.mail.adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prismaFeedbacksRepository";
import { SubmitFeedbackService } from "./services/submitFeedbackService";

export const routes = Router()

routes.get('/health', (req, res) => {
    res.json(`I am healthy at ${Date.now()}`)
})

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbackRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeedbackService = new SubmitFeedbackService(
        prismaFeedbackRepository,
        nodemailerMailAdapter
    )

    const feedback = await submitFeedbackService.execute({
        type,
        comment,
        screenshot
    })

    return res.status(201).json({ data: feedback })
})