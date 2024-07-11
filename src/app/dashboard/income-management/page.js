"use client"
import IncomeList from '../../../components/Charts/IncomeList';
import AddIncomeForm from './AddIncomeForm';
import EditIncomeForm from './EditIncomeForm';
import { budgetData } from '@/utils/placeholderdata';
import { useState } from 'react';

export default function Page() {
    const [data, setData] = useState(budgetData);

    const [editIncome, setEditIncome] = useState(null);

    const addIncome = (newIncome) => {
      const updatedIncome = [...data.income, newIncome];
      setData({ ...data, income: updatedIncome });
    };
  
    const updateIncome = (updatedIncome) => {
      const updatedIncomeList = data.income.map((income) =>
        income.id === updatedIncome.id ? updatedIncome : income
      );
      setData({ ...data, income: updatedIncomeList });
      setEditIncome(null);
    };
  
    const deleteIncome = (id) => {
      const updatedIncomeList = data.income.filter((income) => income.id !== id);
      setData({ ...data, income: updatedIncomeList });
    };
    return (
        <div>
            <h1 className="text-3xl font-bold pb-10">Income Management</h1>
            <div className="flex flex-row flex-wrap w-full justify-around gap-8">
                <IncomeList income={data.income} setEditIncome={setEditIncome} deleteIncome={deleteIncome} />
                {editIncome ? (
                <EditIncomeForm income={editIncome} updateIncome={updateIncome} />
                ) : (
                <AddIncomeForm addIncome={addIncome} />
                )}
            </div>
        </div>
    );
}