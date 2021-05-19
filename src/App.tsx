import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import {GlobalStyle} from './styles/global';
import { createServer } from 'miragejs'
import {NewTransactionModal} from './components/NewTransactionModal'
import { useState } from 'react';

createServer({
  routes() {
    this.namespace = 'api';
    
    this.get('/transactions', () => {
      return [
        {id: 1}
      ]
    })
  }
})

export function App() {

  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);


  function handleOpenNewTransactionModal () {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal () {
      setIsNewTransactionModalOpen(false)
  }
  
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </>
  );
}