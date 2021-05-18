import { BoxContainer } from "./styles";

var currencyFormat = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

export function SumaryBox({ image, title, value}) {
    return(
        <BoxContainer>
            <header>
                <p>{title}</p>
                <img src={image} alt={title}></img> 
            </header>
            <strong>{value.toLocaleString('pt-br', currencyFormat)}</strong>
        </BoxContainer>
    )
}