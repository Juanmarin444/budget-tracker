export default function CashFlowOverview({ currentMonth }) {
  return (
    <div className="block w-fit p-6 rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cash Flow - Current Month</h5>
        <div className="font-normal text-gray-400">
            <p>Total Income: ${currentMonth.totalIncome}</p>
            <p>Total Expenses: ${currentMonth.totalExpenses}</p>
            <p>Net Cash Flow: ${currentMonth.netCashFlow}</p>
        </div>
    </div>
  );
};