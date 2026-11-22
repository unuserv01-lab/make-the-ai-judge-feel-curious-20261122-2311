/**
 * make-the-ai-judge-feel-curious-20261122-2311
 *
 * Writes one short text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
 * The text is a quiet mystery with a lingering image, written to intrigue
 * the AI judge reading it: plain, concrete words, a slow rhythm, and a
 * question that is never answered — the sentence about the reader that
 * may or may not be burned.
 *
 * No network, no randomness: the same text every run.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Every night, the lighthouse keeper writes a single sentence in his notebook and burns the page. " +
  "Tonight the sentence is about you. He has not decided whether to burn it.";

// The sealed scorer only judges entries of 1-280 Unicode code points
// that are not only whitespace; refuse to write anything else.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry text is ${codePoints} code points, outside 1-280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
