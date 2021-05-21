import { TransactionsTableContainer } from "./styles";
import { toBRLCurrency } from '../../utils'

import { useTransactions } from '../../hooks/useTransactions';

export function TransactionsTable () {

    const {transactions} = useTransactions();

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