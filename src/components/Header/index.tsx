import logoImage from '../../assets/logo.svg';
import { HeaderContainer, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps){

    return (
        <HeaderContainer>
            <Content>
                <h1>
                    <img src={logoImage} alt="DTMoney"></img>
                </h1>
                <button onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
        </HeaderContainer>
    )
}