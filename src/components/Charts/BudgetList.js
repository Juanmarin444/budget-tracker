import formatMoney from "@/utils/formatMoney";
export default function BudgetList({ budgets, setEditBudget, deleteBudget }) {
  return (
    <div className="block w-fit p-6 rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
        
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Budgets</h5>
        <div className="font-normal text-gray-400">
            <ul>
                {budgets.map((item) => (
                <li className="flex justify-between gap-4" key={item.id}>
                    <p>{item.category}:</p>
                    <div className="flex gap-4">
                        <p>Planned {formatMoney(item.planned)}, Actual {formatMoney(item.actual)}</p>
                        {setEditBudget != null &&
                        <button onClick={() => setEditBudget(item)}>Edit</button>
                        }
                        {deleteBudget != null &&
                        <button onClick={() => deleteBudget(item.id)}>Delete</button>
                        }
                    </div>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
};