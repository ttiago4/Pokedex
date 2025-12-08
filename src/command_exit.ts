import type { State } from "./state.ts";

export async function commandExit(rl: State) {
    console.log(`Closing the Pokedex... Goodbye!`);
    rl.interface.close();
    process.exit(0);
}