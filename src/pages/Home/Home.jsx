import { Link } from "react-router-dom";
import hkVideo from "../../assets/home.mp4";

export default function Home () {
    return (
        <main className="relative w-full h-dvh overflow-hidden bg-bg-base text-text-primary">

            <video className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-70" autoPlay loop muted playsInline preload="auto">
                <source src={hkVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-bg-base/60 z-10 pointer-events-none"/>

            <section className="relative z-20 flex flex-col justify-center h-full w-full px-6 md:px-24 max-w-md md:max-w-2xl space-y-6 md:space-y-8">
                <div className="flex flex-col items-start">
                    <h1 className="font-cinzel text-3xl md:text-4xl font-semibold text-text-primary tracking-wider leading-tight">
                        El reino olvidado de Hallownest
                    </h1>
                </div>

                <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-xl">
                    Una enciclopedia dedicada al lore, personajes y misterios del mundo subterráneo creado por Team Cherry. Explora cada rincón de un reino que se niega a morir.
                </p>

                <div className="flex items-center gap-3 w-full">
                    <div className="h-px w-16 md:w-24 bg-linear-to-r from-transparent to-accent" />
                    <div className="w-2 h-2 rotate-45 bg-accent shadow-glow-white" />
                    <div className="h-px w-16 md:w-24 bg-linear-to-l from-transparent to-accent" />
                </div>

                <Link to="/explore" className="group relative inline-flex items-center justify-center px-8 py-3 mt-4 font-cinzel text-sm md:text-base tracking-[0.2em] text-text-primary uppercase transition-all duration-500 border border-accent/30 bg-bg-elevated/20 backdrop-blur-sm hover:bg-accent/10 hover:border-accent/80 hover:shadow-accent hover:-translate-y-1 overflow-hidden">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white drop-shadow-md">
                        Comienza a explorar...
                    </span>
                </Link>
            </section>
        </main>
    );
}