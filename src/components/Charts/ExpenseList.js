import formatMoney from "@/utils/formatMoney";
export default function ExpenseList ({ expenses, setEditExpense, deleteExpense }) {
    return (
        <div className="block w-fit p-6 rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Recent Expenses</h5>
            <div className="font-normal text-gray-400">
                <ul>
                    {expenses.map(item => (
                    <li className="flex justify-between gap-4" key={item.id}>
                        <p>{item.category}:</p>
                        <div className="flex gap-4">
                            <p>{formatMoney(item.amount)} on {item.date}</p>
                            {setEditExpense != null &&
                            <button onClick={() => setEditExpense(item)}>Edit</button>
                            }
                            {deleteExpense != null &&
                            <button onClick={() => deleteExpense(item.id)}>Delete</button>
                            }
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}