import { gql, useMutation, useQuery } from '@apollo/client'
import { FormEvent, useEffect } from 'react'
import './App.css'
import { NewUserForm } from './components/NewUserForm'

export const GET_USERS = gql`
  query {
  getAllUsers{
    fullName,
    _id,
    email
  }
}
`

const DELETE_USER = gql`
  mutation($id: String!) {
  deleteUser(id: $id) {
    id,
    name
  }
}
`

type User = {
  fullName: string
  _id: string
  email: string
}

function App() {
  const { loading, error, data } = useQuery<{ getAllUsers: User[] | [] }>(GET_USERS)
  // console.log("data >>", data?.getAllUsers)
  // console.log("error", error)
  const [deleteUser, { data: deleteData, error: deleteError, loading: deleteLoading }] = useMutation(DELETE_USER)

  async function handleUserDeletion(id: string) {
    console.log("deletedId", id)
    await deleteUser({
      variables: {
        id
      }
    })
  }

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <div>
        <NewUserForm />
      </div>
      <div className='usersDisplay'>
        <ul>
        {data?.getAllUsers.map((user): any => (
            <li className='liColumn' key={user._id}>
              <p style={{display: 'inline-block'}}>{user.fullname} - {user.email}</p>
              <button onClick={() => handleUserDeletion(user.id)}>
                Apagar
              </button>
            </li>
        ))}
      </ul>
      </div>
      
      {/* <UserFilter /> */}
    </div>
  )
}

export default App
