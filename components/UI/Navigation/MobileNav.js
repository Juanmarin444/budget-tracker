import NavButton from "./NavButton";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function MobileNav () {
    
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
        <div className="hidden peer-checked/nav-toggle:flex flex-col justify-around h-40 bg-gray-50 z-10 absolute w-full min-w-72 md:hidden">
            <NavButton text="Features" className="pl-8" dropDown={true} dropDownItems={features} dropDownStyles="hover:!text-stone-800 !font-bold !justify-start !py-3 !cursor-default">
                <ChevronDownIcon className="h-3 w-3" />
            </NavButton>
            <NavButton text="How&nbsp;it&nbsp;works" className="pl-8" dropDown={true} dropDownItems={howItWorks} dropDownStyles="hover:!text-stone-800 !font-bold !justify-start !py-3 !cursor-default">
                <ChevronDownIcon className="h-3 w-3" />
            </NavButton>
            <NavButton href="/welcome/info/about-us" text="About&nbsp;Us" className="pl-8" />
            <NavButton href="/welcome/info/contact-us" text="Contact&nbsp;Us" className="pl-8" />
        </div>
    );
}