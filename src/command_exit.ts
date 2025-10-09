import { REPLServer } from "repl";

export function commandExit() {
    console.log(`Closing the Pokedex... Goodbye!`);
    
    process.exit(0);

}