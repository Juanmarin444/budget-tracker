import SavingsGoalProgress from './SavingsGoalProgress';
import formatMoney from "@/utils/formatMoney";
export default function SavingsGoalsList ({ savingsGoals, setEditGoal, deleteGoal }) {
    return (
        <div className="block w-fit p-6 rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Savings Goals</h5>
            <div className="font-normal text-gray-400">
                <ul>
                    {savingsGoals.map(item => (
                    
                    <li className="flex justify-between gap-4 items-center" key={item.id}>
                        <p>{item.goal}:</p>
                        <div className="flex gap-4 items-center">
                            <p>{formatMoney(item.progress)}&nbsp;/&nbsp;{formatMoney(item.amount)}</p>
                            <SavingsGoalProgress goal={item} />
                            {setEditGoal != null &&
                            <button onClick={() => setEditGoal(item)}>Edit</button>
                            }
                            {deleteGoal != null &&
                            <button onClick={() => deleteGoal(item.id)}>Delete</button>
                            }
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}