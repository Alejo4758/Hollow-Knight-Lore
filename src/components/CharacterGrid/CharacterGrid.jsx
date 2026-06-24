import CharacterCard from "../CharacterCard/CharacterCard";

export default function CharacterGrid ({ characters }) {
    if (!characters || characters.length === 0) {
        return (
            <div className="flex justify-center items-center py-20 w-full font-cinzel animate-pulse">
                <p className="text-text-secondary/60 font-light text-lg tracking-wide text-center text-balance max-w-md px-6">
                    El Vacío parece haber reclamado estas almas...
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full justify-items-center">
            {characters.map ((character) => (
                <a key={character.id} to={`/character/${character.id}`} className="w-full flex justify-center outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl">
                    <CharacterCard characterData={character}/>
                </a>
            ))}
        </div>
    );
}