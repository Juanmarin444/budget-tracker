import Link from "next/link";
import DropDownMenu from "@/components/UI/DropDownMenu";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans ({subsets: ['latin']});

export default function NavButton ({text, href, myStyles, dropDown, dropDownItems = [], dropDownStyles, children}) {
    return (
        <div className="relative group">
            {href === undefined ? (
            <p className={`cursor-pointer flex text-stone-800 items-center ${nunitoSans.className} text-1xl font-bold px-1 hover:text-stone-400 ${myStyles}`}>
                {text}&nbsp;{children}
            </p> ):( 
            <Link href={`${href}`} className={`cursor-pointer flex text-stone-800 items-center ${nunitoSans.className} text-1xl font-bold px-1 hover:text-stone-400 ${myStyles}`}>
                {text}&nbsp;{children}
            </Link>
            )}
            
            {dropDown && (
                <DropDownMenu items={dropDownItems} dropDownStyles={dropDownStyles}/>
            )}
        </div>
    );
}