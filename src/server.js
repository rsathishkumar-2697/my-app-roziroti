const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

let transactions = [];

app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

app.post('/api/transactions', (req, res) => {
  const newTransaction = req.body;
  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
});

app.get('/api/transactions/:id', (req, res) => {
  const id = req.params.id;
  const transaction = transactions.find((t) => t.id === id);
  if (!transaction) {
    return res.status(404).json({ message: 'Transaction not found' });
  }
  res.json(transaction);
});

app.put('/api/transactions/:id', (req, res) => {
  const id = req.params.id;
  const updatedTransaction = req.body;
  const index = transactions.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Transaction not found' });
  }
  transactions[index] = updatedTransaction;
  res.json(updatedTransaction);
});

app.delete('/api/transactions/:id', (req, res) => {
  const id = req.params.id;
  transactions = transactions.filter((t) => t.id !== id);
  res.json({ message: 'Transaction deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
