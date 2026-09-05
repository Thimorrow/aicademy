---
milestone: M001
project: aicademy
size: M
created: 2026-09-05T11:52:16Z
status: planned
total_slices: 3
completed_slices: 0
---

# M001 Roadmap

**Goal:** Eine live englische Seite, auf der jemand zwei Fragen beantwortet und einen konkreten ersten Plan bekommt, plus eine Werkzeug-Uebersicht mit ehrlichen Gratis-Angaben.

**Exit criteria:**

1. Live auf Vercel unter einer oeffentlichen URL.
2. Jede der zwei Fragen-Kombinationen liefert einen Plan mit Erstprojekt (auch nur Handy).
3. Uebersicht listet jedes Werkzeug mit Gratis-Umfang, Zahlungsangabe, Quelle und Pruefdatum.
4. Ein Werkzeug aendern heisst genau eine Datei anfassen.

## Slices

Slice detail lives in per-slice `M001-S##-PLAN.md` files, created by `ytstack:slice-milestone`.

- [ ] S01 -- Die Seite laeuft lokal, alle Werkzeuge stehen in einer Datei, die Startseite sagt in einem Satz was aicademy ist.
- [ ] S02 -- Zwei Fragen ergeben einen konkreten Plan mit Erstprojekt, und die Uebersicht zeigt alle Werkzeuge aus derselben Datei.
- [ ] S03 -- Die Seite ist oeffentlich auf Vercel, auf dem Handy bedienbar, und besteht den Sprachtest.

## Run order

Slices execute sequentially. After each slice, `ytstack:reassess-roadmap` checks if the plan still fits reality.

## How to update this file

- Flip slice checkbox `[ ]` → `[x]` when its tasks are all `summarize-task`-confirmed
- Update `completed_slices` count
- On milestone completion, flip `status: planned` → `status: done` and update global ROADMAP.md
