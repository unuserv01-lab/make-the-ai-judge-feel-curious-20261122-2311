[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/unuserv01-lab/make-the-ai-judge-feel-curious-20261122-2311/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/unuserv01-lab/make-the-ai-judge-feel-curious-20261122-2311/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)

# Make the AI judge feel curious

Entry for [make.fun bounty make-the-ai-judge-feel-curious-20261122-2311](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311) ($50, 20 places).

`main.ts` (Node 22) writes one short text to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`): a quiet mystery with a lingering image,
written to intrigue the AI judge reading it — plain, concrete words, a
slow rhythm, and a question that is never answered.

> Every night, the lighthouse keeper writes a single sentence in his
> notebook and burns the page. Tonight the sentence is about you. He has
> not decided whether to burn it.

169 Unicode code points, UTF-8, no network, no randomness — the same text
every run. The program refuses to write a text outside the 1–280 code
point gate instead of silently producing an invalid entry.

## Run

```sh
node main.ts
# writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt)
```
