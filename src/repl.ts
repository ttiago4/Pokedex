import { getCommands } from "./commands";
import type { State } from "./state"

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

export async function startREPL(rl: State) {
  const repl = rl.interface;
    repl.prompt();

  repl.on("line", async (line: string) => {
    const clean = cleanInput(line);

    if (!clean) {
      repl.prompt();

    } else if (clean[0] in rl.commands) {
      try{
        await rl.commands[clean[0]].callback(rl);
        } catch (err: any) {
          throw new Error(err.message)
      }

    } else {
      console.log("Unknown command");
    }
    repl.prompt();
  });
}