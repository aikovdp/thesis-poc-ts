import { Action } from "../action.js";

export const setAttributeAction: Action<SetAttributeInput, void> = async (input, context) => {
  const { attributes } = context.output
  context.output.attributes = {
    ...attributes, 
    [input.category]: {
      ...(attributes?.[input.category]),
      [input.name]: input.value
    }
  }
}

interface SetAttributeInput {
  category: string,
  name: string,
  value: string[]
}
