import logoImage from '../../assets/logo.svg';
import { HeaderContainer, Content } from './styles'

export function Header(){
    return (
        <HeaderContainer>
            <Content>
                <h1>
                    <img src={logoImage} alt="DTMoney"></img>
                </h1>
                <button>Nova transação</button>
            </Content>
        </HeaderContainer>
    )
}