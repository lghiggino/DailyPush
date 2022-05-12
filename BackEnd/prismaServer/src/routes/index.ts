import { Router } from "express";

export const routes = Router()

routes.get('/', (req, res) => {
    res.send(`<div> 
    <a href="https://feedback-widget-gules.vercel.app/"> 
    <h1>NLW Return</h1>   
    </a>
    </div>`)
})

//https://youtu.be/YBp7UWyhe28?t=2939

routes.get('/health', (req, res) => {
    res.json(`I am healthy at ${Date.now()}`)
})

// routes.post('/feedbacks', async (req, res) => {
//     const { type, comment, screenshot } = req.body

//     const prismaFeedbackRepository = new PrismaFeedbacksRepository()
//     const nodemailerMailAdapter = new NodemailerMailAdapter()
//     const submitFeedbackService = new SubmitFeedbackService(
//         prismaFeedbackRepository,
//         nodemailerMailAdapter
//     )

//     const createdAt = dayjs().format('yyyy-mm-dd')

//     const feedback = await submitFeedbackService.execute({
//         type,
//         comment,
//         screenshot,
//         createdAt
//     })

//     return res.status(201).json({ data: feedback })
// })

// routes.post('/team', async (req, res) => {
//     const { name } = req.body

//     const teamMemberRepository = new PrismaTeamMemberRepository()
//     const teamMemberService = new TeamMemberService(teamMemberRepository)

//     const createdAt = dayjs().format('yyyy-mm-dd')

//     const teamMember = await teamMemberService.execute({
//         name,
//         createdAt
//     })

//     return res.status(201).json({ data: teamMember })
// })

// routes.get('/team', async (req, res) => {
//     const teamMemberRepository = new PrismaTeamMemberRepository()
//     const teamMemberService = new TeamMemberService(teamMemberRepository)


//     const allTeamMembers = await teamMemberService.getAll()

//     return res.status(201).json({ data: allTeamMembers })
// })