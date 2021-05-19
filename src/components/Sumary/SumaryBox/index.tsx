import { BoxContainer } from "./styles";
import { toBRLCurrency } from '../../../utils';

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
            <strong>{toBRLCurrency(value)}</strong>
        </BoxContainer>
    )
}