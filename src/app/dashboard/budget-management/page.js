"use client"
import React, { useState } from 'react';
import BudgetList from '@/src/components/Charts/BudgetList';
import AddBudgetForm from './AddBudgetForm';
import EditBudgetForm from './EditBudgetForm';
import { budgetData } from '@/utils/placeholderdata';

export default function Page () {
    const [data, setData] = useState(budgetData);

    const [editBudget, setEditBudget] = useState(null);

    const addBudget = (newBudget) => {
      const updatedBudgets = [...data.budgets, newBudget];
      setData({ ...data, budgets: updatedBudgets });
    };
  
    const updateBudget = (updatedBudget) => {
      const updatedBudgetList = data.budgets.map((budget) =>
        budget.id === updatedBudget.id ? updatedBudget : budget
      );
      setData({ ...data, budgets: updatedBudgetList });
      setEditBudget(null);
    };
  
    const deleteBudget = (id) => {
      const updatedBudgetList = data.budgets.filter((budget) => budget.id !== id);
      setData({ ...data, budgets: updatedBudgetList });
    };
    return (
        <div>
            <h1 className="text-3xl font-bold pb-10">Budget Management</h1>
            <div className="flex flex-row flex-wrap w-full justify-around gap-8">
                <BudgetList budgets={data.budgets} setEditBudget={setEditBudget} deleteBudget={deleteBudget} />
                {editBudget ? (
                <EditBudgetForm budget={editBudget} updateBudget={updateBudget} />
                ) : (
                <AddBudgetForm addBudget={addBudget} />
                )}
            </div>
        </div>
    );
}