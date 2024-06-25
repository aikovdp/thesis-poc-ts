import { WorkflowContext } from "./context.js";

export type Action<Input, Output> = (input: Input, context: WorkflowContext) => Promise<Output>
