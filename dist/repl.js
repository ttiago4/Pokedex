import { getCommands } from "./commands.js";
export function cleanInput(input) {
    let res = [];
    let phrase = input.trim();
    for (let word of phrase.split(" ")) {
        if (word != "") {
            res.push(word.toLowerCase());
        }
    }
    return res;
}
export function startREPL(rl) {
    const repl = rl.interface;
    repl.prompt();
    repl.on("line", (line) => {
        const clean = cleanInput(line);
        if (!clean) {
            repl.prompt();
        }
        else if (clean[0] in getCommands()) {
            getCommands()[clean[0]].callback(rl);
        }
        else {
            console.log("Unknown command");
        }
        repl.prompt();
    });
}
