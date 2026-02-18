import LogoIcon from "@shared/ui/logo-icon/logo-icon";

const Hero = () => {
    return (
        <div className="relative min-h-50 sm:min-h-50 md:min-h-125 lg:min-h-125 xl:min-h-125 2xl:min-h-125">
            {/* Затемнение фона */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Логотип */}
            <LogoIcon
                className="mx-auto text-amber-400/60 
                    w-32 h-32 pt-4 pb-2
                    sm:w-48 sm:h-48 sm:pt-6 sm:pb-3
                    md:w-64 md:h-64 md:pt-8 md:pb-4
                    lg:w-80 lg:h-80 lg:pt-10 lg:pb-5
                    xl:w-96 xl:h-96 xl:pt-12 xl:pb-6
                    2xl:w-1002xl:h-100 2xl:pt-14 2xl:pb-7"
            />

            {/* Заголовок */}
            <h1
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                scroll-m-20 text-white font-extrabold tracking-tight text-balance text-center
                text-3xl w-11/12 max-w-4xl
                sm:text-4xl sm:w-10/12
                md:text-5xl md:w-9/12
                lg:text-6xl lg:w-8/12
                xl:text-7xl xl:w-7/12
                2xl:text-8xl 2xl:w-6/12"
            >
                The Rick and Morty
            </h1>
        </div>
    );
};

export default Hero;
