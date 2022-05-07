interface ButtonProps {
    text: string
    onClick: any
}

export default function Button({ text, onClick }: ButtonProps) {
    return <button className="button" onClick={onClick}>{text}</button>
}