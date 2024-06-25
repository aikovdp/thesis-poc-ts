const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

export function decode(base32: string) {
  base32 = base32.replace(/=+$/, "");

  let currentValue = 0;
  let bits = 0;
  let index = 0;
  const array = new Uint8Array((base32.length * 5) / 8);
  base32
    .split("")
    .map((char) => alphabet.indexOf(char))
    .forEach((value) => {
      if (value === -1) throw new Error("Invalid character in base32 string");
      currentValue = (currentValue << 5) | value;
      bits += 5;
      if (bits >= 8) {
        array[index++] = currentValue >>> (bits - 8);
        bits -= 8;
      }
    });
  return array.buffer;
}
