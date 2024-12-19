import { expect } from 'vitest'
import { test } from 'vitest'
import { vi } from 'vitest'
import config from './commands/config'
import consola from 'consola'

test('config', () => {
  const spy = vi.spyOn(consola, 'box')
  config.run()
  expect(spy).toHaveBeenCalled()
})
