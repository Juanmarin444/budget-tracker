import { CalendarDaysIcon, CurrencyDollarIcon, PlusCircleIcon, StarIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

export default function AddSavingsGoalForm({ addGoal }){
    const [goal, setGoal] = useState('');
    const [amount, setAmount] = useState('');
    const [targetDate, setTargetDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newGoal = {
            id: Date.now(),
            goal,
            amount: parseFloat(amount),
            progress: 0,
            targetDate,
        };
        addGoal(newGoal);
        setGoal('');
        setAmount('');
        setTargetDate('');
    };
    return(
        <div className="block w-fit p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add Goal</h5>
            <div className="font-normal text-gray-700 dark:text-gray-400">
                <form onSubmit={handleSubmit}>
                    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                        <div className="w-full">
                            {/* Goal Input */}
                            <div>
                                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="text">Goal</label>
                                <div className="relative">
                                    <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-blue-500 focus:border-2 focus-visible:outline-none" type="text" value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="Goal Name" required />
                                    <StarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-blue-500" />
                                </div>
                            </div>
                            {/* Target Amount Input */}
                            <div>
                                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="number">Target Amount</label>
                                <div className="relative">
                                    <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-blue-500 focus:border-2 focus-visible:outline-none" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Target Amount" required />
                                    <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-blue-500" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="password">Date</label>
                                <div className="relative">
                                    <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-blue-500 focus:border-2 focus-visible:outline-none" type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} required />
                                    <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-blue-500" />
                                </div>
                            </div>
                            <button type="submit" className={` w-full flex justify-center items-center mt-16 p-4 text-lg font-semibold bg-sky-700 hover:bg-blue-500 text-gray-50`}>
                                Add&nbsp;<PlusCircleIcon className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="flex h-8 items-end space-x-1">
                            {/* Add form errors here */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}