import styled from "styled-components"
import { GlobalStyle } from "./styles/global"

const Title = styled.h1`
  font-size: 64px;
  font-family: Arial, Helvetica, sans-serif;
  color: #8257e6;
`

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>
        Hello World
      </h1>
      
    </div>
  )
}

//https://app.rocketseat.com.br/node/chapter-ii-1/group/estrutura-da-aplicacao-1/lesson/fontes-do-google-fonts