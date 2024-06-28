import Bills from "./Bills";
import Debt from "./Debt";
import Expenses from "./Expenses";

export default function Page () {
    return (
        <div>
            <h1 className="text-3xl font-bold pb-10">Bills and Debt</h1>
            <div className="flex flex-row flex-wrap w-full justify-around gap-8">
                <Bills />
                <Debt />
                <Expenses />
            </div>
        </div>
    );
}