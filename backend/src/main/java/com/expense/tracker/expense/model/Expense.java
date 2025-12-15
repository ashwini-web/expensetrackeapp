package com.expense.tracker.expense.model;

public class Expense {
	private Long id;
    private String title;
    private double amount;
    private ExpenseCategory category;
    
    
	public Expense(Long id, String title, double amount, ExpenseCategory category) {
		super();
		this.id = id;
		this.title = title;
		this.amount = amount;
		this.category = category;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public ExpenseCategory getCategory() {
		return category;
	}
	public void setCategory(ExpenseCategory category) {
		this.category = category;
	}
    

}
