import { BoxContainer } from "./styles";

var currencyFormat = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

interface SumaryBoxProps {
    image: string,
    title: string,
    value: number,
    highlight?: boolean
}

export function SumaryBox(props: SumaryBoxProps) {
    return(
        <BoxContainer className={props.highlight ? 'highlight-background' : ''}>
            <header>
                <p>{props.title}</p>
                <img src={props.image} alt={props.title}></img> 
            </header>
            <strong>{props.value.toLocaleString('pt-br', currencyFormat)}</strong>
        </BoxContainer>
    )
}