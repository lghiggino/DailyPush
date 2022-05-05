import { Router } from "express";
import nodemailer from 'nodemailer';
import { env } from 'process';
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma.feedbacks.repository";
import { SubmitFeedbackService } from "./services/submitFeedback.service";


export const routes = Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "c9fef47cfbc721",
        pass: env.MAILTRAP_PASS
    }
});

routes.get('/health', (req, res) => {
    res.json(`I am healthy at ${Date.now()}`)
})

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbackRepository = new PrismaFeedbacksRepository()
    const submitFeedbackService = new SubmitFeedbackService(prismaFeedbackRepository)

    const feedback = await submitFeedbackService.execute({
        type, 
        comment, 
        screenshot
    })

    // await transport.sendMail({
    //     from: 'Equipe Feedget <oi@feedget.com>',
    //     to: 'Diego Fernandes <lghiggino@gmail.com',
    //     subject: 'Novo Feedback',
    //     html: [
    //         '<div style="font-family: sans-serif; font-size: 16px; color: #111">',
    //         '<p style="font-size: 18px;"> --Novo Feedback-- </p>',
    //         `<p>Tipo do feedback: ${type}</p>`,
    //         `<p>Comentário: ${comment}</p>`,
    //         '</div>'
    //     ].join('\n')
    // });

    return res.status(201).json({ data: feedback })
})