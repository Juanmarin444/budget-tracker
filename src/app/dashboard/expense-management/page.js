"use client"
import ExpenseList from '@/src/components/Charts/ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import EditExpenseForm from './EditExpenseForm';
import { budgetData } from '@/utils/placeholderdata';
import { useState } from 'react';

export default function Page() {
    const [data, setData] = useState(budgetData);

    const [editExpense, setEditExpense] = useState(null);

    const addExpense = (newExpense) => {
      const updatedExpenses = [...data.expenses, newExpense];
      setData({ ...data, expenses: updatedExpenses });
    };
  
    const updateExpenses = (updatedExpense) => {
      const updatedExpensesList = data.expenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      );
      setData({ ...data, expenses: updatedExpensesList });
      setEditExpense(null);
    };
  
    const deleteExpense = (id) => {
      const updatedExpensesList = data.expenses.filter((expense) => expense.id !== id);
      setData({ ...data, expenses: updatedExpensesList });
    };

    return (
        <div>
            <h1 className="text-3xl font-bold pb-10">Expense Management</h1>
            <div className="flex flex-row flex-wrap w-full justify-around gap-8">
                <ExpenseList expenses={data.expenses} setEditExpense={setEditExpense} deleteExpense={deleteExpense} />
                {editExpense ? (
                <EditExpenseForm expense={editExpense} updateExpenses={updateExpenses} />
                ) : (
                <AddExpenseForm addExpense={addExpense} />
                )}
            </div>
        </div>
    );
}