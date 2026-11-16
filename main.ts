import { readFileSync, writeFileSync } from 'node:fs';
import { parse } from './parse.js';

// The harness supplies one batch; synchronous I/O avoids promise scheduling.
const cases = JSON.parse(readFileSync('/input/cases.json', 'utf8'));
const html = new Array(cases.length);
for (let i = 0; i < cases.length; i++) html[i] = parse(cases[i].markdown);
writeFileSync('/output/html.json', JSON.stringify(html));
