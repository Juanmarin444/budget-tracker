import { budgetData } from "@/utils/placeholderdata";
export default function Page(){
    return (
        <div>
            <h1>{budgetData.user.email}</h1>
            <p>Settings</p>
        </div>
    );
}