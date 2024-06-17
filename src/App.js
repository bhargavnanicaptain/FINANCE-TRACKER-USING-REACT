import React, { useState } from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <>
      <Container maxWidth="sm">
        <CssBaseline />
        <Box sx={{ my: 4 }}>

          <Header />
          <Balance transactions={transactions} />
          <AddTransaction addTransaction={addTransaction} />
          <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        </Box>
      </Container>
    </>
  );
};

export default App;
