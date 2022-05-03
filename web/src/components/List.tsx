import axios from "axios"
import { useEffect, useState } from "react"
import Button from "./Button"

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

            <Button
                onClick={() => { addToList(newItem) }}
                text={"Adicionar"}
            />


            <ul>
                {list.map(item =>
                    <li key={item} className={"flex flex-row"} >
                        <p className="mr-10" style={{minWidth: '120px'}}>{item}</p>
                        <Button
                            onClick={() => { removeFromList(item) }}
                            text={"Remover"}
                        />
                    </li>
                )}
            </ul>
        </>
    )
}