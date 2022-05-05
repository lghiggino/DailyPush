import { useState } from "react";
import { Camera } from "phosphor-react";
import html2canvas from "html2canvas";
import { Loading } from "../Loading";

interface ScreenShotButtonProps {
    onScreenShotTaken: (screenshot: string) => void;
}

export function ScreenshotButton({ onScreenShotTaken }: ScreenShotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)


    async function handleTakeScreenshot() {
        try {
            setIsTakingScreenshot(true)
            const canvas = await html2canvas(document.querySelector('html')!);
            const base64image = canvas.toDataURL('image/png');
            onScreenShotTaken(base64image)
        } catch (error) {
            console.error(error)
        } finally {
            setIsTakingScreenshot(false)
        }

    }

    return (
        <button
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
            onClick={handleTakeScreenshot}
        >
            {isTakingScreenshot ?
                <Loading />
                :
                <Camera className="w-6 h-6 text-zinc-100" />
            }

        </button>
    )
}