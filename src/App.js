import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import TransactionForm from './components/TransactionForm';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <button onClick={handleLogout}>Logout</button>
          <TransactionForm addTransaction={addTransaction} />
          <Dashboard transactions={transactions} />
        </div>
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
