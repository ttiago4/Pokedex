import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";
describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "hola     mun do",
        expected: ["hola", "mun", "do"],
    },
    {
        input: "    como  esta mi hermano  del alma      ",
        expected: ["como", "esta", "mi", "hermano", "del", "alma"],
    }
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
