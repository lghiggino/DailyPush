import { Container } from "./styles";
import { TransactionType } from '../dashboard'


interface TransactionsTableProps {
    transactionList: TransactionType[]
}

export function TransactionsTable({ transactionList }: TransactionsTableProps) {

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
                            <td className={transaction.type}>{transaction.type === 'withdraw' ? '-' : ''}R${transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </Container>
    )
}