import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Summary } from "../summary"
import { TransactionsTable, TransactionType } from "../transactionsTable"
import { Container } from "./styles"



export function Dashboard() {
    const [transactionList, setTransactionList] = useState<TransactionType[]>([])

    async function getTransactionData() {
        const transactionList = await api.get('/transactions')
        setTransactionList(transactionList.data.transactions)
        console.log(transactionList.data.transactions)
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