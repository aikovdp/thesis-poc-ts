export interface WorkflowContext {
  output: WorkflowOutput;
}

export interface WorkflowOutput {
  attributes?: Attributes;
  [property: string]: any;
}

export function createContext(): WorkflowContext {
  return { output: {} };
}
