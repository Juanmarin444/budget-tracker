import Link from "next/link";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans ({subsets: ['latin']});

export default function MainButton ({href, text, className, children}) {
    const textWithNbsp = text.split(' ').join('\u00A0');

    return(
        <Link href={`${href}`}>
            <button className={`${nunitoSans.className} w-full flex justify-center items-center mt-16 p-4 text-lg font-semibold bg-sky-700 hover:bg-blue-500 text-gray-50 ${className}`}>
                {textWithNbsp}&nbsp;{children}
            </button>
        </Link>
    );
}