#!/usr/bin/env node
import { defineCommand, runMain } from "citty";

const main = defineCommand({
  meta: {
    name: "ayo",
    description: "Ayo CLI: Various utility commands",
  },
  subCommands: {
    code: () => import("./commands/code.mjs").then((r) => r.default),
    config: () => import("./commands/config.mjs").then((r) => r.default),
  },
});

runMain(main);

export const exportedForTest = {
  main,
};
