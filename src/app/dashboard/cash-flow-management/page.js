import React from 'react';
import CashFlowOverview from '@/src/components/Charts/CashFlowOverview';
import CashFlowHistory from '@/src/components/Charts/CashFlowHistory';
import CashFlowGraph from '@/src/components/Charts/CashFlowGraph';
import { budgetData } from '@/utils/placeholderdata';

export default function Page(){
    const data = budgetData;
    return(
        <div>
            <h1 className="text-3xl font-bold pb-10">Cash Flow</h1>
            <div className="flex flex-row flex-wrap w-full justify-around gap-8">
                <CashFlowOverview currentMonth={data.cashFlow.currentMonth} />
                <CashFlowHistory history={data.cashFlow.history} />
                <CashFlowGraph history={data.cashFlow.history} />
            </div>
        </div>
    );
}