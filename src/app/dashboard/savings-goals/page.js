"use client"
import SavingsGoalsList from '@/src/components/Charts/SavingsGoalsList';
import EditSavingsGoalForm from './EditSavingsGoalForm';
import AddSavingsGoalForm from './AddSavingsGoalForm';
import { budgetData } from '@/utils/placeholderdata';
import React, { useState } from 'react';

export default function Page() {
    const [data, setData] = useState(budgetData);
    const [editGoal, setEditGoal] = useState(null);

    const addGoal = (newGoal) => {
        const updatedGoals = [...data.savingsGoals, newGoal];
        setData({ ...data, savingsGoals: updatedGoals });
    };

    const updateGoal = (updatedGoal) => {
        const updatedGoalList = data.savingsGoals.map((goal) =>
        goal.id === updatedGoal.id ? updatedGoal : goal
        );
        setData({ ...data, savingsGoals: updatedGoalList });
        setEditGoal(null);
    };

    const deleteGoal = (id) => {
        const updatedGoalList = data.savingsGoals.filter((goal) => goal.id !== id);
        setData({ ...data, savingsGoals: updatedGoalList });
    };

    return (
        <div>
            <h1 className="text-3xl font-bold pb-10">Savings Goals</h1>
            <div className="flex flex-row flex-wrap w-full justify-around gap-8">
                <SavingsGoalsList savingsGoals={data.savingsGoals} setEditGoal={setEditGoal} deleteGoal={deleteGoal} />
                {editGoal ? (
                    <EditSavingsGoalForm editGoal={editGoal} updateGoal={updateGoal} />
                ) : (
                    <AddSavingsGoalForm addGoal={addGoal} />
                )}
            </div>
        </div>
    );
};