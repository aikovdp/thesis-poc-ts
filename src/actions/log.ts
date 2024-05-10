import winston from "winston"

export const logAction: Action<LogActionInput, void> = async (input) => {
  const logger = input.logger ?? winston.createLogger({
    transports: new winston.transports.Console()
  })

  logger.log(input.level, input.message)
}

interface LogActionInput {
  logger?: winston.Logger | null,
  level: LogLevel,
  message: string
}

type LogLevel = "silly" | "debug" | "verbose" | "http" | "info" | "warn" | "error"
