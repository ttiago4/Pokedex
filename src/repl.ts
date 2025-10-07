import { rawListeners } from "process";
import { createInterface } from "readline";

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

export function startREPL() {
  const repl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  repl.prompt();
  
  repl.on("line", (line) => {
    const clean = cleanInput(line);
    if (!clean) {
      repl.prompt();
    } else {
      console.log(`Your command was: ${clean[0]}`);
    }
    repl.prompt();
  })
}