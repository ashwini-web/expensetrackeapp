
// src/pages/AddExpense.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "/api/expenses";

export default function AddExpense() {
  const [form, setForm] = useState({ title: "", amount: "", category: "", date: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      id: 1,
      title: form.title.trim(),
      amount: Number(form.amount),
      category: form.category.trim()
    };
    if (!payload.title || isNaN(payload.amount)) {
      return setError("Provide a valid title and amount.");
    }
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to add");
      await res.json();
      // After success, go back to dashboard
      navigate("/");
    } catch {
      setError("Could not add expense. Try again.");
    }
  }

  return (
    <>
      <h1>Add Expense</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8, maxWidth: 420 }}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
        />
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={e => setForm(f => ({ ...f, amount: e.target.value }))}
        />
        <input
          placeholder="Category"
          value={form.category}
          onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
        />        
        <button type="submit">Add</button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
       </>
  );
}