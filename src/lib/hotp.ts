import * as base32 from "./base32.js";

export async function generate(key: string, counter: number) {
  const buffer = new ArrayBuffer(8);
  new DataView(buffer).setBigUint64(0, BigInt(counter));
  const hash = await hmacSha(base32.decode(key), buffer);

  return truncate(hash) % 10 ** 6;
}

async function hmacSha(
  keyBytes: ArrayBuffer,
  dataBytes: ArrayBuffer
): Promise<ArrayBuffer> {
  const key = await crypto.subtle.importKey(
    "raw",
    keyBytes,
    {
      name: "HMAC",
      hash: "SHA-1",
    },
    false,
    ["sign"]
  );

  return crypto.subtle.sign("HMAC", key, dataBytes);
}

function truncate(hash: ArrayBuffer): number {
  const view = new DataView(hash);
  const offset = view.getUint8(view.byteLength - 1) & 0xf;
  return view.getInt32(offset) & 0x7fffffff;
}
