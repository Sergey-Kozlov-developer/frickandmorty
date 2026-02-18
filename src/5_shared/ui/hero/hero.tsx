import HeroIcon from "@shared/ui/hero-icon/hero-icon";
import { H1 } from "@shared/ui/shadcn/typography/typography";

const Hero = () => {
    return (
        <div className="relative ">
            {/* Затемнение фона */}
            <div className="absolute inset-0 bg-accent-foreground/15 to-transparent" />

            <HeroIcon className="w-32 h-32 pt-4 mx-auto text-slate-700/10 sm:w-48 sm:h-48 sm:pt-6 md:w-64 md:h-64 md:pt-8 lg:w-80 lg:h-80 lg:pt-10 xl:w-96 xl:h-96 xl:pt-12 2xl:w-100 2xl:h-100 2xl:pt-14 " />

            <H1 className="absolute w-11/12 max-w-4xl font-extrabold tracking-tight text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 scroll-m-20 text-slate-600 text-balance ">
                The Rick and Morty
            </H1>
        </div>
    );
};

export default Hero;
