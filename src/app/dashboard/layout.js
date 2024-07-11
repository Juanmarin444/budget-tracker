import SideBar from "@/src/components/UI/SideBar";
import { Nunito } from "next/font/google";
import { budgetData } from "@/utils/placeholderdata";

const nunito = Nunito({ subsets:["latin"] });

export default function Layout ({children}) {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const day = days[date.getDay()];
    const dates = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideBar />
        </div>
        <div className={`${nunito.className} grow p-6 md:overflow-y-auto md:p-12`}>
          <div className="flex justify-between">
            <h3 className="text-xl">Welcome, {budgetData.user.name}</h3>
            <h3 className="text-xl">{day}, {month} {dates}, {year}</h3>
          </div>
          {children}
        </div>
      </div>
    );
}