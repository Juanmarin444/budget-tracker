import BudgetVsActual from "./BudgetVSActual";
import SpendingGoalsMet from "./SpendingGoalsMet";
import WheresTheMoney from "./WheresTheMoney";

export default function Page () {
    return (
        <div>
            <h1 className="text-3xl font-bold pb-10">Budget analysis and Goals</h1>
            <div className="flex flex-row flex-wrap w-full justify-around gap-8">
                <BudgetVsActual />
                <SpendingGoalsMet />
                <WheresTheMoney />
            </div>
        </div>
    );
}