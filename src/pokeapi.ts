import { error } from "console";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    let url = pageURL ? 
    pageURL :
    `${PokeAPI.baseURL}/location-area?limit=20`
    
    const res = await fetch(url);
    if (!res.ok) throw new Error("error fetching");
    return res.json();
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}/`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("error fetching");
    return res.json();
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  id: number;
  name: string;
  game_index: number;
  pokemon_encounters: any[];
};