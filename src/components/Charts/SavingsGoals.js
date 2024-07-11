import formatMoney from "@/utils/formatMoney";
export default function SavingsGoals ({ savingsGoals }) {
    return (
        <div className="block w-fit p-6 rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Savings Goals</h5>
            <div className="font-normal text-gray-400">
                <ul>
                    {savingsGoals.map(item => (
                    
                    <li className="flex justify-between gap-4" key={item.id}>
                        <p>{item.goal}:</p>
                        <p>{formatMoney(item.progress)}&nbsp;/&nbsp;{formatMoney(item.amount)}</p>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
