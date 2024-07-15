export default function CashFlowHistory({ history }) {
  return (
    <div className="block w-fit p-6 rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">History</h5>
        <div className="font-normal text-gray-400">
            <ul>
                {history.map((record, index) => (
                <li key={index}>
                    {record.month}: Income ${record.totalIncome}, Expenses ${record.totalExpenses}, Net ${record.netCashFlow}
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
};