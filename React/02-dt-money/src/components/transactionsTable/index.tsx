
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export type TransactionType = {
    id: number
    title: string
    amount: number
    type: string
    category: string
    createdAt: string
    userId: number
}

export function TransactionsTable() {
    const [transactionList, setTransactionList] = useState<TransactionType[]>([])

    async function getTransactionData() {
        const transactionList = await api.get('/transactions')
        setTransactionList(transactionList.data)
        console.log(transactionList.data)
    }

    useEffect(() => {
        getTransactionData()
    }, [])

    if (transactionList.length === 0) {
        return (
            <Container>
                <p>Aguardando carregamento das transações</p>
            </Container>
        )
    }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionList.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </Container>
    )
}