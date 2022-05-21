import { GlobalStyle } from "./styles/global"
import { Header } from "./components/header"
import { Dashboard } from "./components/dashboard"

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  )
}

//https://app.rocketseat.com.br/node/chapter-ii-1/group/estrutura-da-aplicacao-1/lesson/fontes-do-google-font