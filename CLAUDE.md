# Project conventions

## Consistent spacing across sections

Every landing section shares the same heading spacing. Use the tokens in `src/styles/landing-base.css`, never ad-hoc values:

- `--lp-gap-lead` (clamp 20px to 32px): between eyebrow, title and description (`.lp-eyebrow`, `.lp-lead`).
- `--lp-gap-content` (clamp 32px to 48px): between the heading and the content that follows (tabs, timeline, lists, cards, console).

Before adding a margin to `.lp-lead` or to the first block after a heading, look for duplicate overrides in `landing-sections.css` and `landing-brickflow.css` (a later `margin: 0` cancels the spacing). Exception: two-column headings (Solutions, Sectors) keep `margin: 0` on the lead.

## Copy without dashes

Visible copy (Spanish) must not use em dashes (—) or en dashes (–). Replace asides with parentheses: "reales (no dónde luce en una demo) y trazar…". Write ranges with "a": "2003 a 2020", "24 a 48 h". In select options, use "Devise Trust (description)". Regular hyphens inside words (B2B2C) and code do not count.
