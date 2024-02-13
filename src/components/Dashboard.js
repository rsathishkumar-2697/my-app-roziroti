import React from 'react';

function Dashboard({ transactions }) {
  const calculateBalance = () => {
    
    let balance = 0;
    transactions.forEach((transaction) => {
      balance += parseFloat(transaction.amount);
    });
    return balance.toFixed(2);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Current Balance: ${calculateBalance()}</h3>
      <h3>Recent Transactions:</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            Date: {transaction.date}, Category: {transaction.category}, Amount: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
