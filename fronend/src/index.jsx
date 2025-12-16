import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddExpense from "./pages/AddExpense.jsx";
import Reports from "./pages/Reports.jsx";
import ExpenseDetail from "./pages/ExpenseDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Shared layout */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />                 {/* "/" */}
          <Route path="add" element={<AddExpense />} />           {/* "/add" */}
          <Route path="reports" element={<Reports />} />          {/* "/reports" */}
          <Route path="expenses/:id" element={<ExpenseDetail />} /> {/* dynamic route */}
          <Route path="*" element={<NotFound />} />               {/* 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
   </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
