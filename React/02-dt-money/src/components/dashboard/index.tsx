import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Summary } from "../summary"
import { TransactionsTable } from "../transactionsTable"
import { Container } from "./styles"

interface DashboardProps {
    props?: any
    children?: any
    style?: any
}

export type TransactionType = {
    id: number
    title: string
    amount: number
    type: string
    category: string
    createdAt: string
    userId: number
}

export function Dashboard({ props, children, style }: DashboardProps) {

    const [transactionList, setTransactionList] = useState<TransactionType[]>([])

    async function getTransactionData() {
        const transactionList = await api.get('/transactions')
        setTransactionList(transactionList.data)
        console.log(transactionList.data)
    }

    useEffect(() => {
        getTransactionData()
    }, [])
    
    return (
        <Container>
            <Summary transactionList={transactionList}  />
            <TransactionsTable transactionList={transactionList} />
        </Container>
    )
}