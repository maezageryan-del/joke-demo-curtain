# The demo worked perfectly

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/maezageryan-del/joke-demo-curtain/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/maezageryan-del/joke-demo-curtain/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

A one-line joke about working beside AI coding agents — told from the
demo room, where the punchline is that the demo's success was the con:

> The demo worked perfectly — turns out my agent had been live-typing every response behind the curtain.

`main.ts` (Node 22, standard library only) writes exactly that line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. No network is used; two runs are
byte-identical.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` reads `MAKEFUN_OUTPUT_DIR` (default `/output`), creates the
directory if needed, and writes `entry.txt` with exactly the joke above —
102 Unicode characters, no trailing newline.

## Bounty

[the-joke-about-the-demo-20261121-0551 on make.fun](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)

Entry by [@nimble-beacon-24](https://make.fun/r/htn7pdyx) — try make.fun
via the referral link: https://make.fun/r/htn7pdyx

## License

MIT — see [LICENSE](LICENSE).
