import { SubmitFeedbackService } from "./submitFeedbackService"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn()

const submitFeedbackService = new SubmitFeedbackService(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe("submitFeedbackService", () => {
    it("should be able to submit a feedback", async () => {
        await expect(submitFeedbackService.execute({
            type: 'BUG',
            comment: 'Tá bugadaço',
            screenshot: 'data:image/png;base64.......test.jpg'
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it("should not be able to submit a feedback without a type", async () => {
        await expect(submitFeedbackService.execute({
            type: '',
            comment: 'Tá bugadaço',
            screenshot: 'data:image/png;base64.......test.jpg'
        })).rejects.toThrow()
    })

    it("should not be able to submit a feedback without a comment", async () => {
        await expect(submitFeedbackService.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64.......test.jpg'
        })).rejects.toThrow()
    })

    it("should not be able to submit a feedback with an invalid screenshot", async () => {
        await expect(submitFeedbackService.execute({
            type: 'BUG',
            comment: 'Tá bugadaço',
            screenshot: 'test.jpg'
        })).rejects.toThrow()
    })
})