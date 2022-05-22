import { useState } from "react";

import { GlobalStyle } from "./styles/global"
import { Header } from "./components/header"
import { Dashboard } from "./components/dashboard"
import { NewTransactionModal } from "./components/newTransactionModal";





export function App() {
  const [modalIsOpen, setIsNewTransactionModalOpen] = useState<boolean>(false)

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={modalIsOpen} onRequestClose={handleCloseNewTransactionModal} />
    </>
  )
}

//https://app.rocketseat.com.br/node/chapter-ii-1/group/modal-and-forms/lesson/criando-botoes-de-tipo