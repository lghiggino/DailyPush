import { gql, useMutation } from "@apollo/client"
import { FormEvent, useState } from "react"
import { GET_USER } from "../App"
import { client } from "../lib/apollo"

const CREATE_USER = gql`
    mutation ($name: String!) {
        createUser(name: $name) {
            id,
            name
        }
    }
`

export function NewUserForm() {
    const [name, setName] = useState('')
    const [createUser, {data, error, loading}] = useMutation(CREATE_USER)

    async function handleCreateUser(event: FormEvent) {
        event.preventDefault()
        if (!name){
            return
        }

        await createUser({
            variables: {
                name
            },
            update: (cache, {data: {createUser}}) => {
                const {users} = client.readQuery({query: GET_USER})
                cache.writeQuery({
                    query: GET_USER,
                    data: {
                        users: {
                            ...users,
                            createUser
                        }
                    }
                })
            }
        })
    }

    return (
        <form onSubmit={handleCreateUser}>
            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value) }
            />
            <button type="submit">Criar Novo Usuário</button>
        </form>
    )
}

function UseState(arg0: string): [any, any] {
    throw new Error("Function not implemented.")
}
