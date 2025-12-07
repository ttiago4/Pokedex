import type { CLICommand } from "./state.js";
import type { State } from "./state.js";

export async function commandMap(state: State) {
    try {
        if (!state.nextLocationsURL) {
            console.log("You are already at the last page!")
        };

        const url = state.nextLocationsURL ?? undefined;

        const data = await state.pokeApi.fetchLocations(url);

        if (!data || !data.results) {
            console.log("No location data received.");
            return;
        }

        for (const loc of data.results) {
            console.log(loc.name);
        }

        state.nextLocationsURL = data.next;
        state.prevLocationsURL = data.previous;

    } catch (err: any) {
        console.log("Error fetching locations:", err.message);
    };
}


export async function commandMapb(state: State) {
    try {
        if (!state.prevLocationsURL) {
            console.log("You are already at the first page!")
        }
        
        const url = state.prevLocationsURL ?? undefined;

        const data = await state.pokeApi.fetchLocations(url);

        if (!data || !data.results) {
            console.log("No location data received.");
            return;
        }

        for (const loc of data.results) {
            console.log(loc.name);
        }

        state.nextLocationsURL = data.next;
        state.prevLocationsURL = data.previous;

    } catch (err: any) {
        console.log("Error fetching locations:", err.message);
    };
}