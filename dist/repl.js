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
export async function startREPL(rl) {
    const repl = rl.interface;
    repl.prompt();
    repl.on("line", async (line) => {
        const clean = cleanInput(line);
        if (!clean) {
            repl.prompt();
        }
        else if (clean[0] in rl.commands) {
            try {
                await rl.commands[clean[0]].callback(rl);
            }
            catch (err) {
                throw new Error(err.message);
            }
        }
        else {
            console.log("Unknown command");
        }
        repl.prompt();
    });
}
