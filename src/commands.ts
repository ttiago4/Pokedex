import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapb } from "./command_map.js";
import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },

    help: {
      name: "help",
      description: "Ask for help",
      callback: commandHelp,
    },

    map: {
      name: "map",
      description: "Shows the next 20 Pokemon locations",
      callback: commandMap,
    },

    mapb: {
      name: "mapb",
      description: "Show the previous 20 Pokemon locations",
      callback: commandMapb,
    },
  };
}