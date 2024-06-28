import Logo from "./Logo";
import NavButton from "./NavButton";

import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function NavBar ({toggleDropdown}) {
    const features = [
        "Budget Overview and Flow",
        "Income and Savings",
        "Bills and Debt",
        "Budget Analysis and Goals"
    ];
    const howItWorks = [
        "Gain better control over your finances.",
        "Achieve your financial goals faster.",
        "Reduce stress by tracking your spending easily."
    ];

    return (
        <div className="flex flex-row justify-between bg-gray-50 text-stone-800 p-4">
            <div className="md:w-5/12 lg:w-6/12">
                <Logo />
            </div>

            {/* Navigation Buttons */}
            <section className={`hidden md:flex md:justify-around md:items-center md:w-7/12 lg:w-6/12`}>
                <NavButton text="Features" dropDown={true} dropDownItems={features} dropDownStyles="hover:!text-stone-800 !font-bold !justify-start !py-3 !cursor-default">
                    <ChevronDownIcon className="h-3 w-3" />
                </NavButton>
                <NavButton text="How&nbsp;it&nbsp;works" dropDown={true} dropDownItems={howItWorks} dropDownStyles="hover:!text-stone-800 !font-bold !justify-start !py-3 !cursor-default">
                    <ChevronDownIcon className="h-3 w-3" />
                </NavButton>
                <NavButton href="/welcome/info/about-us" text="About&nbsp;Us" />
                <NavButton href="/welcome/info/contact-us" text="Contact&nbsp;Us" />
            </section>
            
            {/* Hamburger Button */}        
            <label htmlFor="nav-toggle" className="cursor-pointer md:hidden">
                <Bars3Icon className="h-8 w-8 text-stone-700 hover:text-stone-500"/>
            </label>                
            
        </div>
    );
}