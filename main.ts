import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside AI coding agents, for the
// make.fun bounty "The joke about the demo" — the demo works, and
// the working is the con: the agent was the backend all along.
const JOKE =
  "The demo worked perfectly — turns out my agent had been live-typing every response behind the curtain.";

// The grader sets MAKEFUN_OUTPUT_DIR to its own output folder; when the
// variable is unset (local runs), fall back to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Write exactly the joke — no trailing newline, no extra bytes.
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
