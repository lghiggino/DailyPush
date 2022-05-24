import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Container } from "./styles";



export function TransactionsTable() {
    const transactionList = useContext(TransactionsContext)

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
                    {transactionList.length && transactionList.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {transaction.type === 'withdraw' ? '-' : ''} {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </Container>
    )
}