export default function HeroSection () {
    return (
        <section className="relative bg-[url(assets/Knight.webp)] bg-cover bg-top min-h-dvh w-full flex flex-col justify-center items-center text-center px-6 py-20">
            <div className="absolute inset-0 bg-linear-to-b from-bg-base/30 via-bg-base/75 to-bg-base"/>
            <div className="relative z-10 max-w-2xl flex flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-4">
                    <h2 className="font-cinzel text-4xl font-semibold text-text-primary tracking-wider leading-tight">
                        El reino olvidado de Hallownest
                    </h2>
                    <div className="flex items-center gap-3 w-full justify-center">
                        <div className="h-px w-24 bg-linear-to-r from-transparent to-accent"/>
                        <div className="w-2 h-2 rotate-45 bg-accent shadow-glow-white"/>
                        <div className="h-px w-24 bg-linear-to-l from-transparent to-accent"/>
                    </div>
                    <p className="text-text-secondary text-base leading-relaxed">
                        Una enciclopedia dedicada al lore, personajes y misterios del mundo subterráneo creado por Team Cherry. Explorá cada rincón de un reino que se niega a morir
                    </p>
                </div>
                <a href="#" className="font-cinzel text-sm tracking-wide uppercase px-8 py-3 border rounded-full border-accent text-accent hover:bg-accent hover:text-bg-base transition-all duration-300 no-underline font-semibold">
                    Descubre a los personajes
                </a>
            </div>
        </section>
    )
}