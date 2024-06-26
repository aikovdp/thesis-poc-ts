import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { verifyTotp } from "../../src/actions/verify-totp.js";
import { createContext } from "../../src/context.js";

beforeEach(() => {
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

test.each([
  [Date.UTC(2024, 5, 25, 19), "798593"],
  [Date.UTC(2024, 5, 25, 19, 3, 30), "803004"],
])("At %i, %s is correct", async (time, code) => {
  vi.setSystemTime(time);

  const result = await verifyTotp({ code, key: "K5QWCYLB" }, createContext());

  expect(result).toBe(true);
});

test.each([
  [Date.UTC(2024, 5, 25, 19), "7908593"],
  [Date.UTC(2024, 5, 25, 19, 3, 30), "80003004"],
])("At %i, %s is incorrect", async (time, code) => {
  vi.setSystemTime(time);

  const result = await verifyTotp({ code, key: "K5QWCYLB" }, createContext());

  expect(result).toBe(false);
});
