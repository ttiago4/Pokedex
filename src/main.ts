import { startREPL } from "./repl.js";
import { initState } from "./state.js";

function main() {
  const rl = initState();

  startREPL(rl);

}

main();