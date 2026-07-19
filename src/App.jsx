import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getCharacters } from "./services/CharacterService";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Navbar from "./components/Navbar/Navbar";
import CharacterSection from "./components/CharacterSection/CharacterSection";

export default function App () {
    const [characters, setCharacters] = useState ([]);

    useEffect (() => {
        const fetchCharacters = async () => {
            const { data, error } = await getCharacters ();
            if (!error) setCharacters (data);
        }
        fetchCharacters ();
    }, []);

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/explore" element={<Explore/>}/>
                <Route path="/characters" element={<CharacterSection characters={characters}/>}/>
            </Routes>
        </BrowserRouter>
    )
}