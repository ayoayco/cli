#!/usr/bin/env node

import { consola } from "consola";
import { defineCommand } from "citty";

export default defineCommand({
  meta: {
    name: "config",
    description: "Get and set options (e.g., projects base directory, code editor command, etc.)",
  },
  run() {
    consola.box("Config...");
  },
});


