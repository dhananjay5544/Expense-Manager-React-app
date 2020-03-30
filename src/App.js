import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="main">
        <div className="container">
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
        <div className="brand"><img src={logo} className="App-logo"/><p className="name">Made with React</p></div>
      </div>  
    </GlobalProvider>
  );
}

export default App;
