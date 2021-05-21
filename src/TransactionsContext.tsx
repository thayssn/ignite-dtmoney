import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
    id: number,
    type: string,
    title: string,
    amount: number,
    category: string,
    createdAt: string
}

// interface TransactionFormData {
//     type: string,
//     title: string,
//     amount: number,
//     category: string
// }

// type TransactionFormData = Omit<Transaction, "id" | "createdAd">

type TransactionFormData = Pick<Transaction, "title" | "type" | "category" | "amount">

interface TransactionsContextData { 
    transactions: Transaction[],
    createTransaction: (transaction:TransactionFormData) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider ({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
        .catch(err => console.error(err.message));
    }, [])

    async function createTransaction(transactionData: TransactionFormData){
        const response = await api.post('/transactions', {...transactionData, createdAt: new Date()});

        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    }
    
    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}