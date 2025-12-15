package com.expense.tracker.expense.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.expense.tracker.expense.model.Expense;
import com.expense.tracker.expense.model.ExpenseCategory;
import com.expense.tracker.expense.service.ExpenseService;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "http://localhost:3000")
public class ExpenseController {
	private final ExpenseService service;

    public ExpenseController(ExpenseService service) {
        this.service = service;
    }
    
    @GetMapping
    public List<Expense> getAllExpenses(@RequestParam(required = false) ExpenseCategory category) {

        if (category != null) {
            return service.getByCategory(category);
        }
        return service.getAll();
    }
    
    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        return service.add(expense);
    }
    
    @GetMapping("/total")
    public double getTotal() {
        return service.getTotal();
    }
    
    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable("id") Long id) {
    	service.deleteExpense(id);
    }

}
