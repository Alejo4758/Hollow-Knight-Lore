import CharacterGrid from "../CharacterGrid/CharacterGrid";

export default function CharacterSection ({ characters }) {
    return (
        <section className="bg-bg-base pt-36 pb-24 px-6 md:pt-40 relative w-full min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="text-center max-w-3xl mb-16 flex flex-col items-center gap-6">
                    <h2 className="font-cinzel text-text-primary text-3xl md:text-5xl font-semibold tracking-wider">
                        Registros del Cazador
                    </h2>
                    <div className="flex items-center justify-center gap-3 w-full">
                        <div className="h-px w-16 md:w-24 bg-linear-to-r from-transparent to-accent" />
                        <div className="w-2 h-2 rotate-45 bg-accent shadow-glow-white" />
                        <div className="h-px w-16 md:w-24 bg-linear-to-l from-transparent to-accent" />
                    </div>
                    <p className="text-text-secondary text-balance text-lg leading-relaxed font-light italic">
                        Incluso en la ruina más profunda, la vida se aferra, se retuerce y mata para subsistir.
                        He dedicado mi existencia a catalogar a cada bestia que se arrastra por este reino marchito.
                        <span className="block font-medium">Lee mis notas con atención, pequeño bicho...</span>
                    </p>
                </div>
                <div className="w-full">
                    <CharacterGrid characters={characters}/>
                </div>
            </div>
        </section>
    )
}