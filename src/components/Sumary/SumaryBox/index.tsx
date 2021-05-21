import { BoxContainer } from "./styles";
import { toBRLCurrency } from '../../../utils';

interface SumaryBoxProps {
    image: string,
    title: string,
    value: number,
    highlight?: boolean,
    highlightColor?: 'highlight-green' | 'highlight-red'
}

export function SumaryBox({ highlight, highlightColor, title, image, value}: SumaryBoxProps) {
    return(
        <BoxContainer className={highlight ? highlightColor : ''}>
            <header>
                <p>{title}</p>
                <img src={image} alt={title}></img> 
            </header>
            <strong>{toBRLCurrency(value)}</strong>
        </BoxContainer>
    )
}