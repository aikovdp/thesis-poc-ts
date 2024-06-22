import { WorkflowContext } from "./context";

export type Action<Input, Output> = (input: Input, context: WorkflowContext) => Promise<Output>
