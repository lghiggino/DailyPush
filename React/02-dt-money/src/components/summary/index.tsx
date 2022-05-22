import { useEffect, useState } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionType } from '../transactionsTable';

import { Container } from "./styles"

interface SummaryProps {
    transactionList: TransactionType[]
}

export function Summary({ transactionList }: SummaryProps) {
    const [sumDeposit, setSumDeposit] = useState<number>(0)
    const [sumWithdraw, setSumWithdraw] = useState<number>(0)
    const [isBalanceNegative, setIsBalanceNegative] = useState<boolean>(false)

    function calcDeposits() {
        if (!transactionList.length){
            return
        }
        const sumDeposits = transactionList.filter((transaction): any => { return transaction.type === 'deposit' })
        const reducedDeposits = sumDeposits.reduce<number>((prev, curr): number => prev + curr.amount, 0)
        setSumDeposit(reducedDeposits)
    }

    function calcWithdraws() {
        if (!transactionList.length){
            return
        }
        const sumWithdraws = transactionList.filter((transaction): any => { return transaction.type === 'withdraw' })
        const reducedWithraws = sumWithdraws.reduce<number>((prev, curr): number => prev + curr.amount, 0)
        setSumWithdraw(reducedWithraws)
    }

    useEffect(() => {
        calcDeposits()
        calcWithdraws()
    }, [transactionList])

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong><>R$ {sumDeposit}</></strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>R$- {sumWithdraw}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ {sumDeposit - sumWithdraw}</strong>
            </div>
        </Container>
    )
}