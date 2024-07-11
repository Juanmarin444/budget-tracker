import Link from "next/link";
import DropDownMenu from "@/src/components/UI/DropDownMenu";
import { Afacad } from "next/font/google";

const afacad = Afacad({ subsets: ['latin'] });

export default function NavButton ({text, href, myStyles, dropDown, dropDownItems = [], dropDownStyles, children}) {
    return (
        <div className="relative group">
            {href === undefined ? (
            <p className={`cursor-pointer flex text-stone-800 items-center ${afacad.className} text-1xl font-bold px-1 hover:text-stone-400 ${myStyles}`}>
                {text}&nbsp;{children}
            </p> ):( 
            <Link href={`${href}`} className={`cursor-pointer flex text-stone-800 items-center ${afacad.className} text-1xl font-bold px-1 hover:text-stone-400 ${myStyles}`}>
                {text}&nbsp;{children}
            </Link>
            )}
            
            {dropDown && (
                <DropDownMenu items={dropDownItems} dropDownStyles={dropDownStyles}/>
            )}
        </div>
    );
}