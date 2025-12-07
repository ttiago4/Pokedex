import { startREPL } from "./repl";
import { initState } from "./state";

function main() {
  const rl = initState();

  startREPL(rl);

}

main();