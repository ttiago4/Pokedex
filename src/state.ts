import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands";
import { PokeAPI } from "./pokeapi";

export type State = {
    interface: Interface,
    commands: Record<string, CLICommand>,
    pokeApi: PokeAPI,
    nextLocationsURL: string | null,
    prevLocationsURL: string | null,
};


export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};


export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    
  return {
    interface: rl,
    commands: getCommands(),
    pokeApi: new PokeAPI(),
    nextLocationsURL: null,
    prevLocationsURL: null
  };
};