import { expect, test } from "vitest";
import * as hotp from "./../../src/lib/hotp.js";

const secret = "K5QWCYLB";

test.each([
  [1, 298206],
  [2, 654328],
  [3, 448715],
  [10, 656872],
  [15435, 300968],
])("Counter %i returns value %i", async (counter, expected) => {
  expect(await hotp.generate(secret, counter)).toBe(expected);
});
