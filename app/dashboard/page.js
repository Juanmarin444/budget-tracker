import Bills from "./bills-and-debt/Bills";
import Debt from "./bills-and-debt/Debt";
import Expenses from "./bills-and-debt/Expenses";
import BudgetVsActual from "./budget-analysis-and-goals/BudgetVSActual";
import SpendingGoalsMet from "./budget-analysis-and-goals/SpendingGoalsMet";
import WheresTheMoney from "./budget-analysis-and-goals/WheresTheMoney";
import Income from "./income-and-savings/Income";
import Savings from "./income-and-savings/Savings";
import SavingsGoalMet from "./income-and-savings/SavingsGoalMet";
import CashFlow from "./overview-and-flow/CashFlow";
import LeftToSpend from "./overview-and-flow/LeftToSpend";
import Overview from "./overview-and-flow/Overview";

export default function Page({ children }) {
  return (
    <div className="">
        <h1 className="text-3xl font-bold pb-10">Home</h1>
        <div className="flex flex-row w-full justify-around flex-wrap gap-8">
            <Overview />
            <CashFlow />
            <LeftToSpend />

            <Bills />
            <Debt />
            <Expenses />

            <BudgetVsActual />
            <SpendingGoalsMet />
            <WheresTheMoney />

            <Income />
            <Savings />
            <SavingsGoalMet />
        </div>
    </div>
  );
}
