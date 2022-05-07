import { FormEvent, useState } from "react";
import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from ".."
import { ArrowLeft, Camera } from "phosphor-react";
import { ScreenshotButton } from "../ScreenshotButton";

import { api } from '../../../lib/api'
import { Loading } from "../../Loading";


interface FeedbackContentStepProps {
    feedbackType: FeedbackType
    onFeedbackRestartRequest: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequest, onFeedbackSent }: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')
    const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false)

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()
        try {
            setIsSendingFeedback(true)
            await api.post('/feedbacks', { type: feedbackType, comment, screenshot })
            onFeedbackSent()
        } catch (error) {
            console.error(error)
        } finally {
            setIsSendingFeedback(false)
        }
    }

    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={() => { onFeedbackRestartRequest() }}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img
                        src={feedbackTypeInfo.image.src}
                        alt={feedbackTypeInfo.image.alt}
                        className="w-6 h-6"
                    />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>

            <form className="mt-3 w-full">
                <textarea
                    className="min-w=[304px] w-full min-h=[112px] text-xs placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin resize-none"
                    placeholder="Conte com detalhes o que está acontecendo"
                    onChange={(ev) => { setComment(ev.target.value) }}
                />
            </form>

            <footer className="flex gap-2 my-2">
                <ScreenshotButton onScreenShotTaken={setScreenshot} screenshot={screenshot} />
                <button
                    type="submit"
                    disabled={comment.length === 0 || isSendingFeedback}
                    className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    onClick={handleSubmitFeedback}
                >
                    {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
                </button>
            </footer>
        </>

    )
}