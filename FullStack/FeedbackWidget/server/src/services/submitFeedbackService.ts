import { MailAdapter } from "../adapters/mail.adapter";
import { FeedbacksRepository } from "../repositories/feedbacksRepository";

interface SubmitFeedbackServiceRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) { }

    async execute(request: SubmitFeedbackServiceRequest) {
        const { type, comment, screenshot } = request;

        if(!type){
            throw new Error('Type is required')
        }

        if(!comment){
            throw new Error('Comment is required')
        }

        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Invalid Screenshot format')
        }

        const feedback = await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        });

        await this.mailAdapter.sendMail({
            subject: 'Novo Feedback',
            body: [
                '<div style="font-family: sans-serif; font-size: 16px; color: #111">',
                '<p style="font-size: 18px;"> --Novo Feedback-- </p>',
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenshot ? `<img style="max-width: 80%; height: auto;" src="${screenshot}" alt="imagem de uma feedback do tipo: ${type}"` : "",
                '</div>'
            ].join('\n')
        })

        return feedback
    }
}

