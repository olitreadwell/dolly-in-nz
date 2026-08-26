  # Issue spec: Dollywood and the six-decade hit streak

  Status: Fixed

  ## Context

  Suggested additions from a reader of the memorial: the timeline could
  include Dollywood, and the site should carry the fun fact that from the
  1960s through the 2010s Dolly Parton landed a top 10 country hit in every
  decade.

  Dollywood already appears in the trivia ("Dollywood feeds a county"), but
  the 1986 purchase-and-rename moment belongs in the timeline next to the
  other career milestones. The hit streak is a distinct fact from the
  existing Guinness record about seven decades of chart appearances: this
  one is about top 10 hits, decade by decade.

  ## Acceptance criteria

  - The timeline includes a 1986 Dollywood entry in chronological position
    (after 1980, before 1987).
  - The trivia includes a six-decade top 10 hit streak fact, sourced to the
    same TODAY / Guinness World Records article used for the other chart
    records.
  - The timeline stays ordered oldest to newest and the existing tests still
    pass, plus regression assertions for both additions.

  ## Fix

  - Added the 1986 Dollywood entry to `timelineEntries` and the hit-streak
    fact to `triviaItems` in `src/data/memorialContent.ts`.
  - Extended the content tests in `src/data/memorialContent.test.ts`.

  ## Verification

  - `npm run check` is green (format, lint, typecheck, unit + coverage,
    build, smoke, e2e, links).
