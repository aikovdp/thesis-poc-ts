import * as hotp from "./hotp.js";

export const TIME_STEP_SECONDS = 30

export async function generate(key: string) {
  const counter = Math.floor(Date.now() / 1000 / TIME_STEP_SECONDS);
  return hotp.generate(key, counter);
}
