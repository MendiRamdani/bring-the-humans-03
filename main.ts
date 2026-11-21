// bring-the-humans-03 entry program.
//
// Copies VIDEO.json from the repository root to the output directory.
// The grader runs this with MAKEFUN_BOT_DIR set to the repository root
// and MAKEFUN_OUTPUT_DIR set to the directory it reads the result from,
// so the TikTok video address in VIDEO.json is what gets scored.
// Standard library only; no network, no wall clock, no files outside the repo.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
if (!existsSync(source)) {
  throw new Error(`VIDEO.json not found in ${botDir}`);
}
const data = readFileSync(source);
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "VIDEO.json"), data);
