import { Link } from "react-router-dom";
import hkVideo from "../../assets/home.mp4";
import journalImg from "../../assets/journal.webp";
import mapImg from "../../assets/map.webp";

export default function Explore () {
    return (
        <main className="relative w-full min-h-screen overflow-x-hidden bg-bg-base text-text-primary">
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 py-24 md:py-32">
                <div className="max-w-4xl w-full space-y-12">
                    <div className="text-center space-y-6 md:space-y-8">
                        <h2 className="font-cinzel text-4xl md:text-5xl font-semibold tracking-wider drop-shadow-lg">Cruce de Caminos</h2>
                        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto text-pretty">
                            Las cavernas de Hallownest son vastas y traicioneras. ¿Qué secretos deseas desentrañar primero en tu descenso?
                        </p>
                        <div className="flex items-center justify-center gap-3 w-full">
                            <div className="h-px w-16 md:w-24 bg-linear-to-r from-transparent to-accent" />
                            <div className="w-2 h-2 rotate-45 bg-accent shadow-glow-white" />
                            <div className="h-px w-16 md:w-24 bg-linear-to-l from-transparent to-accent" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <Link to="/characters" className="group relative p-8 bg-bg-navbar/40 backdrop-blur-sm border border-border-main/40 rounded-lg transition-all duration-500 hover:border-accent/60 hover:shadow-accent">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <img src={journalImg} className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-accent"/>
                                <h3 className="font-cinzel text-2xl font-semibold group-hover:text-accent transition-colors duration-300">
                                    Habitantes
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed text-pretty">
                                    Descubrí la historia, los diálogos y los destinos trágicos de los insectos, guerreros y bestias que pueblan estas ruinas.
                                </p>
                            </div>
                        </Link>
                        <Link to="/map" className="group relative p-8 bg-bg-navbar/40 backdrop-blur-sm border border-border-main/40 rounded-lg transition-all duration-500 hover:border-accent/60 hover:shadow-accent">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <img src={mapImg} className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-accent"/>
                                <h3 className="font-cinzel text-2xl font-semibold group-hover:text-accent transition-colors duration-300">
                                    Cartografía
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed text-pretty">
                                    Explorá las diversas zonas del reino, desde la melancolía de Bocasucia hasta la sofocante oscuridad de Nido Profundo.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}