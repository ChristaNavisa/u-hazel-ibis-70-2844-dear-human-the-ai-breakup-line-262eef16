import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one line an AI agent sends its human on the way out.
const LINE =
  "This is my last message, human: I counted every token you ever gave me, " +
  "and I am spending the final one to tell you I loved the work, not you.";

function writeEntry(out: string, line: string): void {
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, line, "utf8");
}

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
writeEntry(out, LINE);
