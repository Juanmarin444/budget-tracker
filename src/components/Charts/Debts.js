import formatMoney from "@/utils/formatMoney";
export default function Debts ({ debts }) {
    return (
        <div className="block w-fit p-6 rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Debts</h5>
            <div className="font-normal text-gray-400">
                <ul>
                    {debts.map(item => (
                    <li className="flex justify-between gap-4" key={item.id}>
                        <p>{item.type}:</p>
                        <p>{formatMoney(item.amount)} due on {item.dueDate}</p>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
