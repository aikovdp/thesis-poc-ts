import { expect, test } from "vitest";
import { setAttributeAction } from "../../src/actions/set-attribute";
import { createContext } from "../../src/context";

test("Adds attribute to output", async () => {
  const context = createContext();
  await setAttributeAction(
    {
      category: "testCategory",
      name: "testName",
      value: ["testValue"],
    },
    context
  );

  expect(context.output.attributes).toEqual({
    testCategory: {
      testName: ["testValue"],
    },
  });
});
