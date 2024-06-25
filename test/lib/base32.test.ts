import { expect, test } from "vitest";
import * as base32 from "../../src/lib/base32.js";

const decoder = new TextDecoder();

test.each([
  ["MY======", "f"],
  ["MZXQ====", "fo"],
  ["MZXW6===", "foo"],
  ["MZXW6YQ=", "foob"],
  ["MZXW6YTB", "fooba"],
  ["MZXW6YTBOI======", "foobar"],
  ["K5QWCYLB", "Waaaa"]
])("%s decodes to %s", (encoded, expected) => {

  expect(decoder.decode(base32.decode(encoded))).toStrictEqual(expected)
})

test.each([
  ["MZXQ====", "12345"]
])("%s should not decode to %s", (encoded, expectedString) => {
  const expected = new TextEncoder().encode(expectedString).buffer
  expect(base32.decode(encoded)).not.toStrictEqual(expected)
})
