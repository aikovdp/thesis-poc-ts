import * as hotp from "./hotp.js";

export async function generate(key: string) {
  const counter = Date.now() / 1000;
  return hotp.generate(key, counter);
}
