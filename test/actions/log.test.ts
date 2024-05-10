import { expect, test, vi } from 'vitest'
import { logAction } from '../../src/actions/log'
import winston from 'winston'

test('logs info message', async () => {
  const transport = new winston.transports.Console()
  const transportSpy = vi.spyOn(transport, 'log')

  await logAction({
    level: "info",
    message: "This is a test",
    logger: winston.createLogger({transports: transport})
  })

  expect(transportSpy).toHaveBeenCalled()
})
