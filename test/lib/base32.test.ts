import { expect, test } from "vitest";
import * as base32 from "../../src/lib/base32";

test.each([
  ["MY======", "f"],
  ["MZXQ====", "fo"],
  ["MZXW6===", "foo"],
  ["MZXW6YQ=", "foob"],
  ["MZXW6YTB", "fooba"],
  ["MZXW6YTBOI======", "foobar"],
])("%s decodes to %s", (encoded, expectedString) => {
  const expected = new TextEncoder().encode(expectedString).buffer

  expect(base32.decode(encoded)).toEqual(expected)
})
