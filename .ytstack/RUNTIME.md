# Runtime

Services, APIs, env vars, and ports used by aicademy.

## Services

- **Vercel** (kostenloser Tarif): Hosting der statischen Seite. Deploy-Ziel.
- **GitHub** (Account Thimorrow): Quellcode-Ablage, loest den Vercel-Deploy aus.

Kein Backend, keine Datenbank, kein Login, keine laufenden Kosten. Bewusste Entscheidung.

## Environment variables

Keine. Die Seite ist rein statisch und ruft zur Laufzeit keine Dienste auf.
Sollte das je noetig werden, ist das eine Aenderung an einer Kernannahme und gehoert
in DECISIONS.md.

## Ports

Nur lokal beim Entwickeln, abhaengig vom noch nicht gewaehlten Framework
(Astro oder Next.js), ueblicherweise 3000 oder 4321.

## Deploy target

Vercel, kostenloser Tarif, automatischer Deploy aus dem GitHub-Repo.
Git-Identitaet muss Thimorrow sein, sonst wird der Deploy blockiert.
