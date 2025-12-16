package com.expense.tracker.expense.dto;


import java.time.LocalDate;

import com.expense.tracker.expense.model.ExpenseCategory;


public class CreateExpenseRequest {


 private String title;


 private Double amount;

 private ExpenseCategory category; // optional
 private LocalDate date;           // optional; default to today

 public String getTitle() { return title; }
 public void setTitle(String title) { this.title = title; }

 public Double getAmount() { return amount; }
 public void setAmount(Double amount) { this.amount = amount; }

 public ExpenseCategory getCategory() { return category; }
 public void setCategory(ExpenseCategory category) { this.category = category; }

 public LocalDate getDate() { return date; }
 public void setDate(LocalDate date) { this.date = date; }
}
