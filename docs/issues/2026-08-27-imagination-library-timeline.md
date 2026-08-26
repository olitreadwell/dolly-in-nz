  # Issue spec: Imagination Library belongs in the timeline

  Status: Fixed

  ## Context

  The memorial timeline on the homepage ends with entries that are not
  directly about New Zealand: MusiCares 2019, Rockstar 2022 and her death in
  2026. If the timeline is going to carry those global milestones, it must
  also carry the one Dolly Parton called her proudest accomplishment: the
  Imagination Library, which has mailed more than 300 million free books to
  children since 1995.

  ## Acceptance criteria

  - The timeline includes an Imagination Library entry at its correct
    chronological position (1995, after the 1992 Bodyguard cover and before
    the 2013 Auckland shows).
  - The entry is sourced from the same figures used elsewhere on the site
    (300 million books, monthly books for enrolled children).
  - The timeline stays ordered oldest to newest.
  - The existing timeline tests still pass, plus a regression test asserts
    the entry exists.

  ## Fix

  Added a `1995` entry to `timelineEntries` in
  `src/data/memorialContent.ts` and a regression assertion in
  `src/data/memorialContent.test.ts`.

  ## Verification

  - `npm run check` is green (format, lint, typecheck, unit + coverage,
    build, smoke, e2e, links).
