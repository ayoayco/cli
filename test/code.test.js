import { expect } from 'vitest'
import { test } from 'vitest'
import code from './commands/code.mjs'
import { vi } from 'vitest'
import consola from 'consola'

test('code', () => {
  const spy = vi.spyOn(consola, 'box')
  code.run()
  expect(spy).toHaveBeenCalled()
})
