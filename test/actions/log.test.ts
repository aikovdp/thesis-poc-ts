import { expect, test, vi } from 'vitest'
import { logAction } from '../../src/actions/log.js'
import winston from 'winston'
import { createContext } from '../../src/context.js'

test('logs info message', async () => {
  const transport = new winston.transports.Console()
  const transportSpy = vi.spyOn(transport, 'log')

  await logAction({
    level: "info",
    message: "This is a test",
    logger: winston.createLogger({transports: transport})
  }, createContext())

  expect(transportSpy).toHaveBeenCalled()
})
