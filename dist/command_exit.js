export function commandExit(rl) {
    console.log(`Closing the Pokedex... Goodbye!`);
    rl.interface.close();
    process.exit(0);
}
