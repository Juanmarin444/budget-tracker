import Image from 'next/image';
import Link from 'next/link';
import MainButton from '../../components/UI/Navigation/MainButton';
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

export default function Page () {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-full sm:flex-row sm:w-11/12">
                <section className="flex justify-center flex-col bg-gradient-to-br from-slate-900 via-blue-950 via-25% to-gray-900 sm:w-1/2 text-slate-300 px-12 py-32">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-black">Powerfull</h1>
                        <h2 className="text-2xl font-light">Budget&nbsp;Dashboard</h2>
                    </div>
                    <h2>Designed for you</h2>
                    <MainButton href="/welcome/auth/login" text="Get Started">
                        <ArrowRightIcon className="h-5 w-5"/>
                    </MainButton>
                    <div className="flex flex-row mt-6">
                        <Link href="/welcome/auth/signup" text="Sign up for free" className="flex flex-row text-gray-50 hover:text-gray-400 text-sm font-normal" >
                            <p>Sign up for free</p>&nbsp;<ArrowUpRightIcon className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
                <section className="flex justify-center h-fit md:h-auto bg-gray-300 sm:w-1/2">
                    <Image 
                        src="/images/hero-desktop.png"
                        width={1000}
                        height={760}
                        className="hidden md:block pt-14 pl-14 h-fit"
                        alt="Screenshots of the dashboard project showing desktop version"
                        priority
                    />
                    <Image
                        src="/images/hero-mobile.png"
                        width={560}
                        height={620}
                        className="block md:hidden pt-14 h-fit"
                        alt="Screenshot of the dashboard project showing mobile version"
                        priority
                    />
                </section>
            </div>
        </div>
    );
}