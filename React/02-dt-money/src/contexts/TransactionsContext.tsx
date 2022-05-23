import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export type TransactionType = {
    id: number
    title: string
    amount: number
    type: string
    category: string
    createdAt: string
    userId: number
}

type TransactionCreationProps = Omit<TransactionType, 'id' | 'createdAt'>

interface TransactionsProviderProps{
    children: ReactNode
}

export const TransactionsContext = createContext<TransactionType[]>([]);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactionList, setTransactionList] = useState<TransactionType[]>([])

    async function getTransactionData() {
        const transactionList = await api.get('/transactions')
        setTransactionList(transactionList.data.transactions)
        console.log(transactionList.data.transactions)
    }

    useEffect(() => {
        getTransactionData()
    }, [])

    function createTransaction(transaction: TransactionCreationProps){

        api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={transactionList}>
            {children}
        </TransactionsContext.Provider>
    )
}