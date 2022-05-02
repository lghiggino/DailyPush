import axios from "axios"
import { useEffect, useState } from "react"

type ListProps = {
    initialItems: string[]
}

export default function List({ initialItems }: ListProps) {
    const [list, setList] = useState(initialItems)
    const [newItem, setNewItem] = useState('')

    function addToList(text: string) {
        setTimeout(() => {
            setList(state => [...state, text])
        }, 500)
    }

    function removeFromList(name: string) {
        setTimeout(() => {
            setList(state => state.filter(item => item !== name))
        }, 500)
    }

    return (
        <>
            <input
                placeholder="Novo usuário"
                type="text"
                value={newItem}
                onChange={(ev) => { setNewItem(ev.target.value) }} />

            <button
                onClick={() => { addToList(newItem) }}>
                Adicionar
            </button>

            <ul>
                {list.map(item =>
                    <li
                        key={item}
                    >
                        {item}
                        <button
                            onClick={() => { removeFromList(item) }}
                        >
                            Remover
                        </button>
                    </li>
                )}
            </ul>
        </>
    )
}