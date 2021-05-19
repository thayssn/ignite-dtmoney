import Modal from 'react-modal';
import { ModalContainer, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

Modal.setAppElement('#root');

interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal__overlay"
            className="react-modal"
            >
                <ModalContainer>
                    <button type="button" className="react-modal__close" onClick={onRequestClose}>
                        <img src={closeImg} alt="Fechar modal"></img>
                    </button>
                    <h2>Cadastrar Nova Transação</h2>

                    <input type="text" placeholder="Título"/>
                    <input type="number" placeholder="Valor"/>
                    
                    <TransactionTypeContainer>
                        <RadioBox
                            type="button"
                            onClick={() => setType('deposit')}
                            isSelected={type === 'deposit'}
                            typeColor="deposit"
                        >
                            <img src={incomeImg} alt="Fechar modal"></img> <span>Entrada</span>
                        </RadioBox>
                        <RadioBox
                            type="button"
                            onClick={() => setType('withdraw')}
                            isSelected={type === 'withdraw'}
                            typeColor="withdraw"
                        >
                            <img src={outcomeImg} alt="Fechar modal"></img> <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>

                    <input type="text" placeholder="Categoria"/>
                    <button type="submit">Cadastrar</button>
                </ModalContainer>
                
        </Modal>)
}