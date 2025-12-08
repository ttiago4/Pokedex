export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        let url = pageURL ?
            pageURL :
            `${PokeAPI.baseURL}/location-area?limit=20`;
        const res = await fetch(url);
        if (!res.ok)
            throw new Error("error fetching");
        return res.json();
    }
    async fetchLocation(locationName) {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}/`;
        const res = await fetch(url);
        if (!res.ok)
            throw new Error("error fetching");
        return res.json();
    }
}
