import formatMoney from "@/utils/formatMoney";

export default function Summary({ overview }) {
  return (
    <div className="block w-fit p-6 rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Summary</h5>
        <div className="font-normal text-gray-700 dark:text-gray-400">
            <div className="flex justify-between gap-4">
                <p>Total Income:</p>
                <p>{formatMoney(overview.totalIncome)}</p>
            </div>
            <div className="flex justify-between gap-4">
                <p>Total Expenses:</p>
                <p>{formatMoney(overview.totalExpenses)}</p>
            </div>
            <div className="flex justify-between gap-4">
                <p>Savings:</p>
                <p>{formatMoney(overview.savings)}</p>
            </div>
            <div className="flex justify-between gap-4">
                <p>Cash Flow:</p>
                <p>{formatMoney(overview.cashFlow)}</p>
            </div>
        </div>
    </div>
  );
};