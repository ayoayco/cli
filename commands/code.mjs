#!/usr/bin/env node

import { consola } from "consola";
import { defineCommand } from "citty";

export default defineCommand({
  meta: {
    name: "code",
    description: "Open code editor for a list of existing workspaces",
  },
  run() {
    consola.box("Code...");
  },
});

