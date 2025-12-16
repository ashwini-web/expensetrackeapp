
// src/pages/ExpenseDetail.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "/api/expenses";

export default function ExpenseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expense, setExpense] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API_URL);
        const all = await res.json();
        const found = all.find(e => e.id === id);
        if (!found) return setError("Expense not found");
        setExpense(found);
      } catch {
        setError("Failed to load");
      }
    })();
  }, [id]);

  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!expense) return <div>Loading…</div>;

  return (
    <>
      <h1>Expense Detail</h1>
      <p><strong>Title:</strong> {expense.title}</p>
      <p><strong>Amount:</strong> ₹{Number(expense.amount).toLocaleString("en-IN")}</p>
      {expense.category && <p><strong>Category:</strong> {expense.category}</p>}
      {expense.date && (
        <p><strong>Date:</strong> {new Date(expense.date).toLocaleDateString("en-IN")}</p>
      )}
           <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}