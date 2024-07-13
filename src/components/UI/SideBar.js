import Logo from "./Navigation/Logo";
import NavLinks from "./nav-links";
import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideBar () {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <div className="mb-2 flex h-20 items-end justify-start rounded-md bg-sky-700 hover:bg-blue-500 p-4 md:h-40">
                <Logo textColor="text-gray-50" iconColor="text-gray-50" />
            </div>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 overflow-y-scroll">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form
                    // action=
                    // {async () => {
                    //   'use server';
                    //   await signOut();
                    // }}
                >
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-sky-700 md:flex-none md:justify-start md:p-2 md:px-3">
                        <PowerIcon className="w-6" />
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    );
}