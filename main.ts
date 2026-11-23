// Entry for "A Day of One-Line Pitches" (make.fun).
// Writes one sentence to /output/entry.txt that would convince a friend
// who has never coded to let an AI agent build their first app idea on
// make.fun. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.
//
// The sentence is a fixed string: no network, no clock, no randomness,
// so every run writes byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Tell the AI what you want, watch it build your first app while you have coffee, and if it isn\u2019t right, you just say so and it tries again \u2014 no code, no cost to start, just your idea.";

const MAX_CODE_POINTS = 240;

function codePointCount(text: string): number {
  return [...text].length;
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const trimmed = ENTRY.trim();

  if (trimmed.length === 0) {
    throw new Error("entry must not be only white space");
  }

  const count = codePointCount(trimmed);
  if (count < 1 || count > MAX_CODE_POINTS) {
    throw new Error(
      `entry must be 1 to ${MAX_CODE_POINTS} Unicode code points, got ${count}`,
    );
  }

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), trimmed, "utf8");
}

main();

import { readFileSync as __ronigrvReadFileSync } from "node:fs";
import { join as __ronigrvJoinPath } from "node:path";

{
  const __ronigrvOutDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const __ronigrvEntry = __ronigrvReadFileSync(__ronigrvJoinPath(__ronigrvOutDir, "entry.txt"), "utf8");
  const __ronigrvCodePoints = [...__ronigrvEntry].length;
  if (__ronigrvCodePoints < 1 || __ronigrvCodePoints > 240) {
    throw new Error(`entry.txt must hold 1-240 Unicode code points, got ${__ronigrvCodePoints}`);
  }
}
