import CashFlow from "./CashFlow";
import LeftToSpend from "./LeftToSpend";
import Overview from "./Overview";

export default function Page () {
    return (
        <div>
            <h1 className="text-3xl font-bold pb-10">Overview and Flow</h1>
            <div className="flex flex-row flex-wrap w-full justify-around gap-8">
                <Overview />
                <CashFlow />
                <LeftToSpend />
            </div>
        </div>
    );
}