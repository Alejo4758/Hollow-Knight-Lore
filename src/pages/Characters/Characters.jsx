import { useCharacters } from "../../hooks/useCharacters";
import CharacterSection from "../../components/CharacterSection/CharacterSection";
import hunterEyesImg from "../../assets/hunter.webp";

export default function Characters() {
    const { characters, loading, error } = useCharacters();

    if (loading) {
        return (
            <div className="min-h-screen w-full bg-bg-base flex flex-col items-center justify-center font-cinzel relative overflow-hidden px-6">
                <div className="relative z-10 flex flex-col items-center gap-8">
                    <img src={hunterEyesImg} className="w-24 md:w-32 object-contain animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"/>
                    <div className="text-center space-y-4 mt-4">
                        <p className="text-text-primary text-xl md:text-2xl tracking-widest animate-pulse drop-shadow-md">
                            Hojeando notas del diario...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen w-full bg-bg-base flex flex-col items-center justify-center font-cinzel px-6">
                <div className="text-center space-y-6">
                    <p className="text-text-primary font-medium text-xl md:text-2xl tracking-widest">
                        El Vacío ha devorado estas páginas...
                    </p>
                    <p className="text-text-secondary text-sm md:text-base italic max-w-md text-balance mx-auto">
                        Tendrás que buscar a tus presas más tarde
                    </p>
                    <p className="text-text-secondary text-sm uppercase tracking-widest pt-8">
                        {error.message || "Fallo en la conexión onírica"}
                    </p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-bg-base w-full">
            <CharacterSection characters={characters} />
        </div>
    );
}