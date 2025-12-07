import { getCommands } from "./commands.js";
import type { State } from "./state.js"

export function cleanInput(input: string): string[] {
  let res: string[] = []
  let phrase = input.trim()
    for (let word of phrase.split(" ")) {
        if (word != "") {
            res.push(word.toLowerCase());
        }
    }
  return res;
}

export function startREPL(rl: State) {
  const repl = rl.interface;
  repl.prompt();

  repl.on("line", (line: string) => {
    const clean = cleanInput(line);
    if (!clean) {
      repl.prompt();
    } else if (clean[0] in getCommands()) {
        getCommands()[clean[0]].callback(rl);
    } else {
      console.log("Unknown command");
    }
    repl.prompt();
  })
}