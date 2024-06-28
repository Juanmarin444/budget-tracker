import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { Nunito } from "next/font/google";
import Link from "next/link";

const nunito = Nunito ({subsets: ['latin']});

export default function Logo ({textColor="text-stone-800", iconColor="text-sky-700 hover:text-blue-500"}) {
    return (
        <Link href="/welcome" className={`flex flex-row items-center ${iconColor}`}>
            <CodeBracketSquareIcon className="h-7 w-7 cursor-pointer"/>
            <h1 className={`hidden sm:block text-2xl font-bold ${nunito.className} ${textColor} cursor-pointer`}>Budget&nbsp;Tracker</h1>
        </Link>
    );
}