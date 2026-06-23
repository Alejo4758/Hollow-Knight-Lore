export default function CharacterCard ({ characterData }) {
    return (
        <div className="w-full max-w-sm p-5 flex flex-col justify-between relative overflow-hidden font-cinzel bg-bg-elevated/70 border border-border-main/40 rounded-2xl cursor-pointer shadow-card transition-all duration-500 group hover:border-text-primary/30 hover:shadow-accent hover:-translate-y-1">
            {/* Partículas de esencia */}
            <div className="absolute top-1/4 left-4 w-1 h-1 bg-white rounded-full opacity-0 pointer-events-none transition-all duration-1000 delay-100 animate-pulse group-hover:opacity-60 group-hover:-translate-y-8"/>
            <div className="absolute bottom-1/3 right-6 w-1.5 h-1.5 bg-accent rounded-full opacity-0 pointer-events-none transition-all duration-1000 delay-300 animate-pulse group-hover:opacity-40 group-hover:-translate-y-12"/>
            {/* Datos */}
            <div>
                {/* Tipo de personaje */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                    {characterData?.type?.map (t => (
                        <span className="px-3 py-1 text-xs uppercase tracking-widest text-text-secondary bg-bg-base/80 border border-border-main rounded-full">
                            {t}
                        </span>
                    ))}
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-text-primary/40 transition-all duration-300 group-hover:bg-white group-hover:shadow-glow-white"/>
                </div>
                {/* Imagen */}
                <div className="w-full h-48 flex justify-center items-center relative mb-5">
                    <div className="absolute w-32 h-32 bg-(--gradient-aura) rounded-full blur-xl opacity-60 transition-all duration-700 group-hover:opacity-100 group-hover:scale-125"/>
                    <img 
                        className="max-h-full object-contain relative z-10 transition-all duration-500 ease-out drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] group-hover:scale-105" 
                        src={characterData?.image} 
                        alt={characterData?.name}
                    />
                </div>
                {/* Identidad */}
                <div className="text-center">
                    <h3 className="text-xl text-text-primary tracking-wide transition-colors duration-300 group-hover:text-white">
                        {characterData?.name}
                    </h3>
                    <h4 className="mt-0.5 mb-3 text-xs font-medium uppercase tracking-wide text-accent/80 transition-colors duration-500 group-hover:text-accent">
                        - {characterData?.title} -
                    </h4>
                </div>
            </div>
            {/* Descripción */}
            <p className="mt-2 pt-3 text-center text-balance text-sm font-light leading-relaxed text-text-secondary border-t border-border-main/30 line-clamp-3 transition-colors duration-500 group-hover:text-text-primary">
                {characterData?.description}
            </p>
        </div>
    )
}