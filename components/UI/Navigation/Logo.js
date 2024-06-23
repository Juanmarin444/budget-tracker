import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { Nunito } from "next/font/google";
import Link from "next/link";

const nunito = Nunito ({subsets: ['latin']});

export default function Logo () {
    return (
        <Link href="/" className="flex flex-row items-center md:w-5/12 lg:w-6/12">
            <CodeBracketSquareIcon className="h-7 w-7 text-sky-400 cursor-pointer"/>
            <h1 className={`hidden sm:block text-2xl font-bold ${nunito.className} cursor-pointer`}>Budget&nbsp;Tracker</h1>
        </Link>
    );
}