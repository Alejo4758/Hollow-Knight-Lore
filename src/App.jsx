import HeroSection from "./components/HeroSection/HeroSection";
import CharacterSection from "./components/CharacterSection/CharacterSection";
import { getCharacters } from "./services/CharacterService";
import { useState } from "react";
import { useEffect } from "react";

export default function App () {
    const [characters, setCharacters] = useState ([]);

    useEffect (() => {
        const fetchCharacters = async () => {
            const { data, error } = await getCharacters ();
            if (!error) setCharacters (data);
        }
        fetchCharacters ();
    }, []);

    console.log (characters);
    
    return (
        <>
            <HeroSection/>
            <CharacterSection characters={characters}/>
        </>
    )
}