import { useContext } from "react";
import { TransactionsTableContainer } from "./styles";
import { toBRLCurrency } from '../../utils'
import { TransactionsContext } from "../../TransactionsContext";

export function TransactionsTable () {

    const transactions = useContext(TransactionsContext);

    return (
        <TransactionsTableContainer>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    { transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={`amount ${transaction.type}`}>{ toBRLCurrency(transaction.amount)}</td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </TransactionsTableContainer>
    )   
}