import MainButton from '../UI/Navigation/MainButton';
import Link from 'next/link';
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

export default function HeroContent () {
    
    return (
        <section className="flex justify-center flex-col bg-gradient-to-br from-slate-900 via-blue-950 via-25% to-gray-900 sm:w-1/2 text-slate-300 px-12 py-32">
            <div>
                <h1 className="text-5xl md:text-6xl font-black">Powerfull</h1>
                <h2 className="text-2xl font-light">Budget&nbsp;Dashboard</h2>
            </div>
            <h2>Designed for you</h2>
            <MainButton href="/auth/login" text="Get Started">
                <ArrowRightIcon className="h-5 w-5"/>
            </MainButton>
            <div className="flex flex-row mt-6">
                <Link href="/auth/signup" text="Sign up for free" className="flex flex-row text-gray-50 hover:text-gray-400 text-sm font-normal" >
                    <p>Sign up for free</p>&nbsp;<ArrowUpRightIcon className="h-5 w-5" />
                </Link>
            </div>
        </section>
    );
}