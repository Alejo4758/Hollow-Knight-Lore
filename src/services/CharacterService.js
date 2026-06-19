const BASE_URL = "https://6a0227650d92f63dd2535f3f.mockapi.io";

export async function getCharacters (page = 1, limit = 10, search = "") {
    try {
        const url = new URL (`${BASE_URL}/character`);
        url.searchParams.append ("page", page);
        url.searchParams.append ("limit", limit);

        if (search) {
            url.searchParams.append ("name", search);
        
        }

        const response = await fetch (url);
        if (response.status === 404) return { data: [], error: null }
        if (!response.ok) return { data: null, error: `Server Error: ${response.status}` }
        const data = await response.json ();

        return { data, error: null }
    }
    catch (error) {
        return { data: null, error: "Connection Error" }
    }
}