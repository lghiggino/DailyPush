import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export type TransactionType = {
    id: number
    title: string
    amount: number
    type: 'deposit' | 'withdraw'
    category: string
    createdAt: string
    userId: number
}

type TransactionCreationProps = {
    title: string
    amount: number
    type: 'deposit' | 'withdraw'
    category: string
    userId: number
}

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionContextProperties {
    transactionList: TransactionType[]
    createTransaction: (transaction: TransactionType) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextProperties>(
    {} as TransactionContextProperties
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactionList, setTransactionList] = useState<TransactionType[]>([])

    async function getTransactionData() {
        const transactionList = await api.get('/transactions')
        setTransactionList(transactionList.data.transactions)
        console.log(transactionList.data.transactions)
    }

    useEffect(() => {
        getTransactionData()
    }, [])

    async function createTransaction(transactionInput: TransactionCreationProps) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        const { transaction } = response.data

        setTransactionList([
            ...transactionList, transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{ transactionList, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}