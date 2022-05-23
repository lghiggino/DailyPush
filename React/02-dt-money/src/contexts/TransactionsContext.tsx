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

interface TransactionContextProperties {
    transactionList: TransactionType[]
    createTransaction: (transaction: TransactionType) => void;
}

export const TransactionsContext = createContext<TransactionContextProperties>(
    {} as TransactionContextProperties
);

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
        <TransactionsContext.Provider value={{transactionList, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}