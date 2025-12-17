
// src/pages/Dashboard.jsx
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

const API_URL = "/api/expenses";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        const data = await res.json();
        setExpenses(data);
      } catch {
        setError("Failed to load expenses");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  
const total = useMemo(() => {
  const list = Array.isArray(expenses) ? expenses : [];
  return list.reduce((sum, e) => sum + Number(e?.amount ?? 0), 0);
});

  async function deleteExpense(id) {
    const prev = expenses;
    setExpenses(prev => prev.filter(e => e.id !== id));
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed");
    } catch {
      setExpenses(prev); // revert
      alert("Delete failed, restored.");
    }
  }

  if (loading) return <div>Loading…</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <>
      <h1>Dashboard</h1>
      <div><strong>Total:</strong> ₹{total.toLocaleString("en-IN")}</div>
      <ul style={{ marginTop: 12 }}>
        {expenses.map(e => (
          <li key={e.id} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Link to={`/expenses/${e.id}`}>
              {e.title} — {Number(e.amount).toLocaleString("en-IN")}
            </Link>
            <button onClick={() => deleteExpense(e.id)}>Delete</button>
          </li>
        ))}
           </ul>
    </>
  );
}
