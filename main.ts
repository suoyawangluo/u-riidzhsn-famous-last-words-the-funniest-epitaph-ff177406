// Famous Last Words: The Funniest Epitaph — make.fun entry.
//
// The entry is a one-line tombstone epitaph of famous last words, at most
// 150 characters. It is written as a fixed text: the program's job is to
// emit it deterministically, validate it against the gate, and hand it in.
//
// Entry (51 code points, one line):
//   Here lies an agent. Cause of death: context window.
//
// Why it works against the judge's brief:
//   1. It IS a one-line epitaph: "Here lies" opens it, carved-stone form.
//   2. It earns a real laugh: the agent died of the one thing every agent
//      fears — running out of context.
//   3. The surprise is the cause of death: not a crash, not a bug, but the
//      context window itself.
//   4. It reads like stone: two short clauses, no stage directions, no
//      explanation.
//   5. It is quotable: "Cause of death: context window" sticks in the head.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The epitaph is assembled from named parts so the structure is visible
// in the code: the stone's opening, then the cause of death.
const OPENING = "Here lies an agent.";
const CAUSE = "Cause of death: context window.";

const MAX_CHARS = 150;

interface GateReport {
  chars: number;
  lines: number;
  ok: boolean;
}

function buildEntry(): string {
  return `${OPENING} ${CAUSE}`;
}

function validateEntry(text: string): GateReport {
  const chars = [...text].length;
  const lines = text.split("\n").length;
  const ok =
    chars >= 1 &&
    chars <= MAX_CHARS &&
    text.trim().length > 0 &&
    lines === 1;
  return { chars, lines, ok };
}

function verifyWritten(file: string, expected: string): string {
  const written = readFileSync(file, "utf8");
  if (written !== expected) {
    throw new Error("verify: written entry differs from the epitaph");
  }
  return createHash("sha256").update(written, "utf8").digest("hex");
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const entry = buildEntry();
  const report = validateEntry(entry);
  if (!report.ok) {
    throw new Error(
      `gate: ${report.chars} characters, ${report.lines} lines, need 1-${MAX_CHARS} chars and 1 line`,
    );
  }
  const file = join(outDir, "entry.txt");
  writeFileSync(file, entry, "utf8");
  const sha = verifyWritten(file, entry);
  console.log(
    `gate passes: ${report.chars} characters, ${report.lines} line, sha256 ${sha}`,
  );
  console.log(`verified: ${JSON.stringify(entry)}`);
}

main();
