import Income from "./Income";
import Savings from "./Savings";
import SavingsGoalMet from "./SavingsGoalMet";

export default function Page () {
    return (
        <div>
            <h1 className="text-3xl font-bold pb-10">Income and Savings</h1>
            <div className="flex flex-row flex-wrap w-full justify-around gap-8">
                <Income />
                <Savings />
                <SavingsGoalMet />
            </div>
        </div>
    );
}