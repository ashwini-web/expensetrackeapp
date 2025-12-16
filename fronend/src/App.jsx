import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [total, setTotal] = useState(0);

  const loadData = () => {
    fetch("http://localhost:8080/api/expenses")
      .then(res => res.json())
      .then(data => setExpenses(data));

    fetch("http://localhost:8080/api/expenses/total")
      .then(res => res.json())
      .then(data => setTotal(data));
  };

  useEffect(() => {
    loadData();
  }, []);
  const addExpense = () => {
    fetch("http://localhost:8080/api/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, amount, category })
    }).then(() => {
      setTitle(""); setAmount(""); setCategory("");
      loadData();
    });
  };

  const deleteExpense = (id) => {
    fetch(`http://localhost:8080/api/expenses/${id}`, {
      method: "DELETE"
    }).then(loadData);
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>Expense Tracker</h2>
      <h3>Total:{total}</h3>

      <input placeholder="Title" value={title}
        onChange={e => setTitle(e.target.value)} />

      <input type="number" placeholder="Amount" value={amount}
        onChange={e => setAmount(e.target.value)} />

      <input placeholder="Category" value={category}
        onChange={e => setCategory(e.target.value)} />

      <button onClick={addExpense}>Add</button>

      <ul>
        {expenses.map(e => (
          <li key={e.id}>
            {e.title} - {e.amount} ({e.category})
            <button onClick={() => deleteExpense(e.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
  

export default App
