
// src/AppLayout.jsx
import { NavLink, Outlet } from "react-router-dom";

export default function AppLayout() {
  const linkStyle = ({ isActive }) => ({
    padding: "8px 12px",
    textDecoration: "none",
    borderRadius: 6,
    color: isActive ? "#fff" : "#333",
    background: isActive ? "#0d6efd" : "transparent",
  });

  return (   
    <div style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <header style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <NavLink to="/" style={linkStyle} end>Dashboard</NavLink>
        <NavLink to="/add" style={linkStyle}>Add Expense</NavLink>
        <NavLink to="/reports" style={linkStyle}>Reports</NavLink>
      </header>
      <Outlet />
    </div>   
  );
};
