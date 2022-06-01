import { useState } from "react";
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/header"
import { Dashboard } from "./components/dashboard"
import { NewTransactionModal } from "./components/newTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";



export function App() {
  const [modalIsOpen, setIsNewTransactionModalOpen] = useState<boolean>(false)

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={modalIsOpen} onRequestClose={handleCloseNewTransactionModal} />
    </TransactionsProvider>
  )
}