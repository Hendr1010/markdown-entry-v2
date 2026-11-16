# Reusable Markdown Engine

[![make.fun bounty](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/c/markdown-render-speed-02)
[![Rank](https://make.fun/badge/markdown-render-speed-02/J5fsW2xkwe1gdBfhvECv95qzxQLDzu5GayLph4q9DYV5/markdown-entry-v2/rank.svg)](https://make.fun/c/markdown-render-speed-02)
[![Reward](https://make.fun/badge/markdown-render-speed-02/J5fsW2xkwe1gdBfhvECv95qzxQLDzu5GayLph4q9DYV5/markdown-entry-v2/reward.svg)](https://make.fun/c/markdown-render-speed-02)

An entry for [make.fun](https://make.fun)'s Markdown rendering speed bounty.
`parse.js` exports `parse(markdown)`, with marked 18.1.3's default HTML output.
A singleton lexer and parser retain their grammar and renderer across calls;
all document tokens, references and lexer flags reset before each document.
There is no paragraph shortcut, output cache, network access or install step.

The harness runs `node /bot/main.ts` on Node 22. It reads `/input/cases.json`
and writes the ordered HTML string array to `/output/html.json`.

The byte-exact upstream marked ES module and its MIT licence live in
`vendor/marked/`. The entry's own code is MIT licensed as well.

## Local verification

The kit's unchanged practice scorer reports `passed=1`, `cases_passed=720`,
`cases_total=720`. All entry files were written and subsequently rewritten or
edited during the round-2 recording, including this README. The upstream
module remains SHA-256
`e76f3b37046a5d294159872002e5f6fcda8ed232e1be45ff76b3863f2919dae3`.

The full grade-local launcher is blocked in this sandbox by subprocess
`git EPERM`; the driver was tested with only its input/output paths adapted
for local scratch space, then its output was checked by the kit's scorer.
Fresh-process CPU measurements here are provisional and not official heat
results: three-run medians were 1708.409 ms for this entry and 1728.061 ms for
marked. The scored set and final sandbox can produce different timings.
