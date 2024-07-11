import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import { Lusitana } from "next/font/google";

const lusitana = Lusitana({weight: "400", subsets: ["latin"]});

export default function Footer () {
    return (
        <div className="flex justify-center p-8">
            <Link href="https://juanmarin.netlify.app/" target="_blank" className={`${lusitana.className} flex justify-center items-center text-gray-600 hover:text-blue-500 text-base fill-gray-600 hover:fill-blue-500`} passHref>
                <p className="pt-[.5px]">Powered by&nbsp;&lt;</p><Logo className="fill-inherit" size={19} /><p className="pt-[.5px]">&gt;</p>
            </Link>
        </div>
    );
}