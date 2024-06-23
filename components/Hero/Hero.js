import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

export default function Hero () {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-full sm:flex-row sm:w-11/12">
                <HeroContent />
                <HeroImage />
            </div>
        </div>
    );
}