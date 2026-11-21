// Make the AI judge feel brave — Node 22, standard library only.
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it, and leave it steadier, unhurried, ready
// to move. The text is fixed, so two runs write the same bytes;
// the gate takes 1 to 280 Unicode code points.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = 'Somewhere a kettle ticks as it cools. The light on the wall has not moved all afternoon. You are still here, and the chair holds. The door was never locked. When you stand, it opens.';

// The gate counts Unicode code points: 1 to 280, at least one not white.
const length = [...TEXT].length;
if (length < 1 || length > 280) throw new Error(`text is ${length} characters, gate needs 1-280`);
if (!TEXT.trim()) throw new Error('text must not be only white space');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
console.log(`brave text: ${length} characters written to ${join(outDir, 'entry.txt')}`);
