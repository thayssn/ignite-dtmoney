import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionsTableContainer } from "./styles";
import { toBRLCurrency } from '../../utils'

interface Transaction {
    id: number,
    type: string,
    title: string,
    amount: number,
    category: string,
    createdAt: string
}

export function TransactionsTable () {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
        .catch(err => console.error(err.message));
    }, [])

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