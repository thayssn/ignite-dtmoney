import { SumaryContainer } from "./styles";
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { SumaryBox } from "./SumaryBox";

import { useTransactions } from '../../hooks/useTransactions';

export function Sumary() {
    const { transactions } = useTransactions();

    const sumary = transactions.reduce((acc, transaction ) => {

        if(transaction.amount >= 0 ){
            acc.deposits += transaction.amount
        }else{
            acc.withdraws += transaction.amount
        }

        acc.total += transaction.amount

        return acc;

    } , {deposits: 0, withdraws: 0, total: 0})

    return(
        <SumaryContainer>
            <SumaryBox image={income} title="Entradas" value={sumary.deposits}></SumaryBox>
            <SumaryBox image={outcome} title="Saídas" value={sumary.withdraws}></SumaryBox>
            <SumaryBox image={total} title="Total" value={sumary.total} highlight highlightColor={sumary.total > 0 ? 'highlight-green' : 'highlight-red'} ></SumaryBox>
        </SumaryContainer>
    )
}