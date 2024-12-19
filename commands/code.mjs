#!/usr/bin/env node

import { consola } from 'consola'
import { defineCommand } from 'citty'

export default defineCommand({
  meta: {
    name: 'code',
    description: 'Show a list of workspaces & open a code editor',
  },
  run() {
    consola.box('Code...')
  },
})
