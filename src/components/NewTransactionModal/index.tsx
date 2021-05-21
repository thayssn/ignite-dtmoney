import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import { TransactionsContext } from '../../TransactionsContext';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { ModalContainer, TransactionTypeContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: () => void;
}
interface TransactionData {
    title: string,
    amount: number,
    category: string,
}

export function NewTransactionModal ({ isOpen, onRequestClose}: NewTransactionModalProps) {
    const [transactionType, setTransactionType] = useState<'deposit' | 'withdraw'>('deposit');
    const [ transactionData , setTransactionData ] = useState<TransactionData>({} as TransactionData)

    const { transactions , createTransaction } = useContext(TransactionsContext);

    const handleCreateNewTransaction = async (e: FormEvent) => {
        e.preventDefault();

        const data = { ...transactionData, type: transactionType};

        await createTransaction(data);

        setTransactionData({
            title: '',
            category: '',
            amount: 0
        })

        setTransactionType('deposit');

        onRequestClose();
    }


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal__overlay"
            className="react-modal"
            >
                <ModalContainer onSubmit={handleCreateNewTransaction}>
                    <button type="button" className="react-modal__close" onClick={onRequestClose}>
                        <img src={closeImg} alt="Fechar modal"></img>
                    </button>
                    <h2>Cadastrar Nova Transação</h2>

                    <input type="text" placeholder="Título" value={transactionData.title} onChange = { (e) => setTransactionData({...transactionData, title: e.target.value }) }/>
                    <input type="number" placeholder="0" value={transactionData.amount} onChange = { (e) => setTransactionData({...transactionData, amount: Number(e.target.value) }) }/>
                    
                    <TransactionTypeContainer>
                        <RadioBox
                            type="button"
                            onClick={() => setTransactionType('deposit')}
                            isSelected={transactionType === 'deposit'}
                            typeColor={transactionType}
                        >
                            <img src={incomeImg} alt="Fechar modal"></img> <span>Entrada</span>
                        </RadioBox>
                        <RadioBox
                            type="button"
                            onClick={() => setTransactionType('withdraw')}
                            isSelected={transactionType === 'withdraw'}
                            typeColor={transactionType}
                        >
                            <img src={outcomeImg} alt="Fechar modal"></img> <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>

                    <input type="text" placeholder="Categoria" value={transactionData.category} onChange = { (e) => setTransactionData({...transactionData, category: e.target.value }) }/>
                    <button type="submit">Cadastrar</button>
                </ModalContainer>
                
        </Modal>)
}