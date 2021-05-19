import { BoxContainer } from "./styles";

var currencyFormat = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

interface SumaryBoxProps {
    image: string,
    title: string,
    value: number,
    highlight?: boolean
}

export function SumaryBox({ highlight, title, image, value}: SumaryBoxProps) {
    return(
        <BoxContainer className={highlight ? 'highlight-background' : ''}>
            <header>
                <p>{title}</p>
                <img src={image} alt={title}></img> 
            </header>
            <strong>{value.toLocaleString('pt-br', currencyFormat)}</strong>
        </BoxContainer>
    )
}