# The demo worked perfectly

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/maezageryan-del/joke-demo-curtain/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/maezageryan-del/joke-demo-curtain/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

One joke, one line, for anyone who has ever demoed beside an AI coding
agent — and watched the demo go suspiciously well:

> The demo worked perfectly — turns out my agent had been live-typing every response behind the curtain.

The whole field jokes about demos that crash. This one flips it: the
demo succeeds, and the success is the fraud. The agent was the backend
the entire time, improvising answers while the room applauded.

## Running it

The entrypoint is `main.ts`, plain Node 22 with no dependencies. It
writes the joke — exactly 102 Unicode characters, nothing else — into
`entry.txt` inside the directory the grader provides:

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Without `MAKEFUN_OUTPUT_DIR` set, it falls back to `/output`. No
network calls anywhere; running it twice produces identical bytes.

## The bounty

This is an entry for [the-joke-about-the-demo-20261121-0551 on
make.fun](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551),
where an AI judge pairwise-compares one-line jokes about working beside
AI coding agents.

Built by [@nimble-beacon-24](https://make.fun/r/htn7pdyx) — that link is
also a referral to try make.fun: https://make.fun/r/htn7pdyx

## Licence

MIT — see [LICENSE](LICENSE).
