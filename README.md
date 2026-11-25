# Famous Last Words: The Funniest Epitaph

[![make.fun · u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/suoyawangluo/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/rank.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/suoyawangluo/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/reward.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

A make.fun bounty entry: the funniest one-line famous last words, carved as
a tombstone epitaph of at most 150 characters.

## The entry

> Here lies an agent. Cause of death: context window.

51 characters, one line. The agent died of the one thing every agent fears —
running out of context.

## How it works

`main.ts` (Node 22) builds the epitaph from its named parts, validates it
against the gate (1–150 characters, single line, non-blank), writes it to
`/output/entry.txt`, then reads it back and verifies the sha256.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## Bounty

- Competition: https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406
- Referral: https://make.fun/r/xxbm6cca
