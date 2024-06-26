import { afterEach, beforeEach, expect, test, vi } from "vitest";
import * as totp from "../../src/lib/totp.js";

beforeEach(() => {
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

test.each([
  [Date.UTC(2024, 5, 25, 19), 798593],
  [Date.UTC(2024, 5, 25, 19, 3, 30), 803004],
])("%s yields %s", async (time, expected) => {
  vi.setSystemTime(time);
  expect(await totp.generate("K5QWCYLB")).toEqual(expected);
});
