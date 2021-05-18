import { SumaryContainer } from "./styles";
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { SumaryBox } from "./SumaryBox";

export function Sumary() {
    return(
        <SumaryContainer>
            <SumaryBox image={income} title="Entradas" value={1000.434343}></SumaryBox>
            <SumaryBox image={outcome} title="Saídas" value={500}></SumaryBox>
            <SumaryBox image={total} title="Total" value={1500.43} highlight></SumaryBox>
        </SumaryContainer>
    )
}