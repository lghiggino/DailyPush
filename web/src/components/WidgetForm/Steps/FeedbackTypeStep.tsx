import { feedbackTypes } from ".."
import { FeedbackType } from ".."

interface FeedbackTypeStepProps {
    onFeedbakTypeChange: ( type: FeedbackType ) => void;
}

export function FeedbackTypeStep({ onFeedbakTypeChange }: any) {

    return (
        <div className="flex py-8 gap-2 w-full">
            {Object.entries(feedbackTypes).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                        onClick={() => { onFeedbakTypeChange(key as FeedbackType) }}
                        type="button"
                    >
                        <img src={value.image.src} alt={value.image.alt}></img>
                        <span>{value.title}</span>
                    </button>
                )
            })}
        </div>
    )
}