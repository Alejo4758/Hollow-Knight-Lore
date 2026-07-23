import { useState, useEffect } from "react"
import { getCharacters } from "../services/CharacterService";

export function useCharacters (page = 1, limit = 10, search = "") {
    const [characters, setCharacters] = useState ([]);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState (null);

    useEffect (() => {
        const fetchCharacters = async () => {
            setLoading (true);
            const { data, error } = await getCharacters (page, limit, search);
            if (error) {
                setError (error);
                setCharacters ([]);
            }
            else {
                setError (null);
                setCharacters (data);
            }
            setLoading (false);
        }
        fetchCharacters ();
    }, [page, limit, search]);

    return { characters, loading, error }
}