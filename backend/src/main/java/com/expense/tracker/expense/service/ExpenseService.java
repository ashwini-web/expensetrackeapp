package com.expense.tracker.expense.service;


import org.springframework.stereotype.Service;

import com.expense.tracker.expense.model.Expense;
import com.expense.tracker.expense.model.ExpenseCategory;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExpenseService {

    private final List<Expense> expenses = new ArrayList<>();
    private long counter = 1;

    public List<Expense> getAll() {
        return expenses;
    }

    public Expense add(Expense expense) {
        expense.setId(counter++);
        expenses.add(expense);
        return expense;
    }

    public List<Expense> getByCategory(ExpenseCategory category) {
        return expenses.stream()
                .filter(e -> e.getCategory() == category)
                .collect(Collectors.toList());
    }

    public double getTotal() {
        return expenses.stream()
                .mapToDouble(Expense::getAmount)
                .sum();
    }
    
    @SuppressWarnings("unlikely-arg-type")
	public void deleteExpense(Long id) {
    	expenses.remove(id);
    }
}
