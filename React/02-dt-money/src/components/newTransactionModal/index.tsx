import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import Modal from 'react-modal';

import closeButtonImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';



Modal.setAppElement("#root")

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const transactionList = useContext(TransactionsContext)
    
    const [type, setType] = useState<"deposit" | "withdraw">("deposit")
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0,)
    const [category, setCategory] = useState('')


    function handleCreateNewTransaction(ev: FormEvent) {
        ev.preventDefault()

        

        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeButtonImg} alt="fechar modal" />
            </button>

            <Container
                onSubmit={(event) => handleCreateNewTransaction(event)}
            >
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="título"
                    value={title}
                    onChange={ev => { setTitle(ev.target.value) }}
                />

                <input
                    placeholder="valor"
                    type="number"
                    value={amount}
                    onChange={ev => { setAmount(Number(ev.target.value)) }}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType("deposit")}
                        isActive={type === "deposit"}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType("withdraw")}
                        isActive={type === "withdraw"}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="saída" />
                        <span>saída</span>
                    </RadioBox>
                </TransactionTypeContainer>


                <input
                    placeholder="categoria"
                    value={category}
                    onChange={ev => { setCategory(ev.target.value) }}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>

        </Modal>
    )
}