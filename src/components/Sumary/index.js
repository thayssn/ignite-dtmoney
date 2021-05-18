import { SumaryContainer } from "./styles";
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

export function Sumary() {
    return(
        <SumaryContainer>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas"></img> 
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Entradas"></img> 
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Entradas"></img> 
                </header>
                <strong>R$1000,00</strong>
            </div>
        </SumaryContainer>
    )
}