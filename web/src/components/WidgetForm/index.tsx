import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            src: bugImageUrl,
            alt: "Imagem de um inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            src: ideaImageUrl,
            alt: "Imagem de uma lampada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            src: thoughtImageUrl,
            alt: "Imagem de um balão de pensamento"
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] sm:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbakTypeChange={setFeedbackType} />
            ) : (
                <div className="">
                    <p>{feedbackType}</p>
                </div>
            )}
            <footer className="text-xs text-neutral-400">
                <span>Feito com ♥ pela <a className="underline underline-offset-2">Rocketseat</a></span>
            </footer>
        </div>
    )
}