# Knowledge

Patterns, rules, and lessons learned while building aicademy. Read by every future
session. Short. Actionable.

## Conventions

- **Sprache der Website: nur Englisch.** Interne Dokumente (ytstack-Artefakte) auf Deutsch.
- **Kein Fachjargon auf der Seite.** Nicht "free tier rate limit", sondern "damit kannst
  du im Monat ungefaehr 50 Mal etwas fragen". Das Wort "Stack" kommt nicht vor, ebenso
  wenig Repo, Terminal, API-Key oder Deployment ohne Erklaerung in einfachen Worten.
- **Eine einzige Datenquelle.** Alle Werkzeugangaben kommen aus einer Datei. Ein Werkzeug
  zu aendern oder zu entfernen darf nirgendwo sonst eine Textanpassung erfordern.
- **Jeder Eintrag traegt Quelle und Datum der letzten Pruefung.** Ohne das nicht ausliefern.
- **Kein Alter im Produkt.** Keine Altersfrage, keine Altersangaben, kein Filter. Entschieden
  2026-09-05. Claude und Cursor bleiben draussen, weil sie Geld kosten.
- **Technik: Next.js**, statisch auf Vercel, kein Backend, keine API-Routen in M001.

## Lessons learned

- **Die Huerde ist Geld plus Vorwissen, nicht das Alter.** Der Gruender hat den
  Altersfilter vor dem ersten Slice verworfen. Die Seite fuehrt mit kostenlosen Werkzeugen
  zu einem ersten gebauten Ding.
- **Kilo Codes Startguthaben ist eine Falle fuer die Zielgruppe.** Die 20 Dollar
  Gratis-Guthaben verlangen bei der Anmeldung eine Kreditkarte. Die Seite muss
  ausdruecklich warnen und stattdessen den Weg ueber einen eigenen kostenlosen
  Google-AI-Studio-Schluessel zeigen. Kilo nimmt darauf keinen Aufschlag.
- **Nicht-Programmierer verbrauchen Gratis-Kontingente schneller**, weil sie mehr Versuche
  brauchen, wenn sie den Code nicht lesen koennen. Die Seite soll das sagen, statt
  Muehelosigkeit zu versprechen.
- **Gratis-Angebote sind verderblich.** Firebase Studio nimmt seit 22.06.2026 keine neuen
  Accounts mehr an und wird am 22.03.2027 eingestellt. Deshalb monatlicher Durchgang und
  bewusst kleine Liste (10 bis 12 Werkzeuge) statt Vollstaendigkeit.

## Gotchas

- **Git-Identitaet:** vor jedem Commit pruefen, dass user.email
  292338461+Thimorrow@users.noreply.github.com ist. Andernfalls blockiert der Vercel-Deploy.
