type Action<Input, Output> = (input: Input) => Output | Promise<Output>
