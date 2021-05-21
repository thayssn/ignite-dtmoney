import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import {GlobalStyle} from './styles/global';
import {NewTransactionModal} from './components/NewTransactionModal'
import { useState } from 'react';
import './server';

import { TransactionsProvider } from './hooks/useTransactions'

export function App() {

  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

  function handleOpenNewTransactionModal () {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal () {
      setIsNewTransactionModalOpen(false)
  }
  
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </TransactionsProvider>
  );
}