import React from 'react';
import CashFlowOverview from '@/src/components/Charts/CashFlowOverview';
import CashFlowHistory from '@/src/components/Charts/CashFlowHistory';
import CashFlowGraph from '@/src/components/Charts/CashFlowGraph';
import { budgetData } from '@/utils/placeholderdata';

export default function Page(){
    const data = budgetData;
    return(
        <div>
            <CashFlowOverview currentMonth={data.cashFlow.currentMonth} />
            <CashFlowHistory history={data.cashFlow.history} />
            <CashFlowGraph history={data.cashFlow.history} />
        </div>
    );
}