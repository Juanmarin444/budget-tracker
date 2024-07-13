export default function SavingsGoalProgress({ goal }) {
  const progress = (goal.progress / goal.amount) * 100;
  return (
        <div>
            <p>{progress.toFixed(2)}%</p>
            <div className="w-[100%] bg-gray-300 rounded-full overflow-x-hidden">
                <div style={{ width: `${progress}%` }} className="bg-blue-500 h-3"></div>
            </div>
        </div>
    );
};