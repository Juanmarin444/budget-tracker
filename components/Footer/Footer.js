import Image from "next/image";
import Logo from "./Logo";

export default function Footer () {
    return (
        <div className="flex justify-center items-center text-gray-600 fill-blue-600 text-xs p-8">
            <p className="">Powered by</p>&nbsp;
            <Logo size={28} fillColor="#4b5563" />
        </div>
    );
}