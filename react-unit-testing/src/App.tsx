import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [list, setList] = useState(['Diego', 'Rodz', 'Mayk'])
  const [newItem, setNewItem] = useState('')
  const [apiData, setApiData] = useState({})

  function addToList(text: string) {
    setList(state => [...state, text])
  }

  // useEffect(() => {
  //   axios.get('https://randomuser.me/api/')
  //     .then(response => {
  //       setApiData(response.data.results[0].name.first)
  //     }).catch(error => {
  //       throw new error
  //     })
  // }, [])

  return (
    <>
      {/* {console.log(apiData)} */}
      <input placeholder="Novo usuário" type="text" value={newItem} onChange={(ev) => { setNewItem(ev.target.value) }} />
      <button onClick={() => { addToList(newItem) }}>Adicionar</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default App
