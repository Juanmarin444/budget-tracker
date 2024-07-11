import Bills from "../../components/Charts/Bills";
import Debts from "../../components/Charts/Debts";
import ExpenseList from "../../components/Charts/ExpenseList";
import IncomeList from "../../components/Charts/IncomeList";
import SavingsGoals from "../../components/Charts/SavingsGoals";
import Summary from "../../components/Charts/Summary";
import { budgetData } from "@/utils/placeholderdata";

export default function Page() {
  const data = budgetData;
  return (
    <div className="">
        <h1 className="text-3xl font-bold pb-10">Home</h1>
        <div className="flex flex-row w-full justify-center flex-wrap gap-8">
            <Summary overview={data.overview} />
            <IncomeList income={data.income}/>
            <ExpenseList expenses={data.expenses} />
            <SavingsGoals savingsGoals={data.savingsGoals} />
            <Debts debts={data.debts} />
            <Bills bills={data.bills} />
        </div>
    </div>
  );
}