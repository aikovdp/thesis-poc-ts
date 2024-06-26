import { Action } from "../action.js";
import * as totp from "../lib/totp.js"

export const verifyTotp: Action<VerifyTotpInput, boolean> = async (input) => {
  return parseInt(input.code) === await totp.generate(input.key);
}

interface VerifyTotpInput {
  key: string,
  code: string
}
