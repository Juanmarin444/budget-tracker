import MainButton from "@/src/components/UI/Navigation/MainButton";
import { PowerIcon, KeyIcon, AtSymbolIcon, ArrowUpRightIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {

    return (
        <div className="flex flex-col w-full sm:flex-row sm:w-11/12">
            <section className="flex justify-center flex-col bg-gradient-to-br from-slate-900 via-blue-950 via-25% to-gray-900 sm:w-1/2 text-slate-300 px-12 py-40">
                <div>
                    <h1 className="text-5xl md:text-6xl font-black">Manage</h1>
                    <h2 className="text-2xl font-light">your&nbsp;monthly budget</h2>
                </div>
                <h2>effortlessly with easy tools.</h2>
                <Link href="/welcome/auth/login" text="Sign up for free" className="flex flex-row text-gray-50 text-sm font-normal pt-4 hover:text-gray-400" >
                    <p>Log in to your account.</p>&nbsp;<ArrowUpRightIcon className="h-5 w-5" />
                </Link>
            </section>
            <section className=" flex justify-center bg-gray-50 py-20 sm:w-1/2">
                <form className="space-y-3">
                    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                        <h1 className={`mb-3 text-2xl`}>Sign up for more savings.</h1>

                        <div className="w-full">
                            {/* Username Input */}
                            <div>
                                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="text">Username</label>
                                <div className="relative">
                                    <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-blue-500 focus:border-2 focus-visible:outline-none" id="username" type="text" name="username" placeholder="Enter your username" required />
                                    <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-blue-500" />
                                </div>
                            </div>
                            {/* Email Input */}
                            <div>
                                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="email">Email</label>
                                <div className="relative">
                                    <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-blue-500 focus:border-2 focus-visible:outline-none" id="email" type="email" name="email" placeholder="Enter your email address" required />
                                    <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-blue-500" />
                                </div>
                            </div>
                            {/* Password Input */}
                            <div className="mt-4">
                                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="password">Password</label>
                                <div className="relative">
                                    <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-blue-500 focus:border-2 focus-visible:outline-none" id="password" type="password" name="password" placeholder="Enter password" required minLength={8} />
                                    <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-blue-500" />
                                </div>
                            </div>
                        </div>

                        <MainButton href="/dashboard" text="Launch">
                            <PowerIcon className="h-5 w-5" />
                        </MainButton>

                        <div className="flex h-8 items-end space-x-1">
                            {/* Add form errors here */}
                        </div>
                    </div>
                </form>
            </section>
        </div>     
    );
}