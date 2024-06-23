import Image from 'next/image';

export default function HeroImage () {
    
    return (
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
    );
}