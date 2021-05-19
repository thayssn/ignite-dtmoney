import Modal from 'react-modal'

Modal.setAppElement('#root');

interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal (props: NewTransactionModalProps) {

    return (<Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}>
            <h2>Cadastrar Nova Transação</h2>
    </Modal>)
}