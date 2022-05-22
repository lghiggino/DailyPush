import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeButtonImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

Modal.setAppElement("#root")

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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

            <Container>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="título" />

                <input
                    placeholder="valor"
                    type="number"
                />

                <TransactionTypeContainer>
                    <button
                        type="button"
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>entrada</span>
                    </button>

                    <button
                        type="button"
                    >
                        <img src={outcomeImg} alt="saída" />
                        <span>saída</span>
                    </button>
                </TransactionTypeContainer>


                <input
                    placeholder="categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>

        </Modal>
    )
}