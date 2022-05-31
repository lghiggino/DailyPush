import { gql, useMutation } from "@apollo/client"
import { FormEvent, useState } from "react"
import { GET_USERS } from "../App"
import { client } from "../lib/apollo"

const CREATE_USER = gql`
    mutation ($firstName: String!, $lastName: String!, $email: String!) {
        createUser(data: 
            {
                firstName: $firstName, 
                lastName: $lastName,
                email: $email,
                active: true
            }
            ) {
            _id,
            fullName,
            email
        }
    }
`

export function NewUserForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [createUser, { data, error, loading }] = useMutation(CREATE_USER)

    async function handleCreateUser(event: FormEvent) {
        event.preventDefault()
        if (!firstName) {
            return
        }

        if (!lastName) {
            return
        }

        if (!email) {
            return
        }

        try {
            await createUser({
                variables: {
                    firstName,
                    lastName,
                    email,
                    active: true
                },
                update: (cache, { data: { createUser } }) => {
                    const { users } = client.readQuery({ query: GET_USERS })
                    cache.writeQuery({
                        query: GET_USERS,
                        data: {
                            getAllUsers: {
                                ...users,
                                createUser
                            }
                        }
                    })
                }
            })
        } catch (error) {
            console.error(error)
        } finally{
            setFirstName("")
            setLastName("")
            setEmail("")
        }

    }

    return (
        <form onSubmit={handleCreateUser}>
            <label>First Name:</label>
            <input
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />

            <label>Last Name:</label>
            <input
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />

            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button type="submit">Criar Novo Usuário</button>
        </form>
    )
}

