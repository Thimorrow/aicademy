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

## Lessons learned

- **Die Huerde ist das Alter, nicht das Geld.** Kostenlos geht es sehr wohl. Was nicht
  geht: Claude, Claude Code und Cursor unter 18 laut Nutzungsbedingungen. Genau darauf
  zeigen aber fast alle Anleitungen. Das ist der Kern des Projekts.
- **Kilo Codes Startguthaben ist eine Falle fuer die Zielgruppe.** Die 20 Dollar
  Gratis-Guthaben verlangen bei der Anmeldung eine Kreditkarte. Ein Minderjaehriger traegt
  im Zweifel die Karte der Eltern ein. Die Seite muss ausdruecklich warnen und stattdessen
  den Weg ueber einen eigenen kostenlosen Google-AI-Studio-Schluessel zeigen. Kilo nimmt
  darauf keinen Aufschlag.
- **Nicht-Programmierer verbrauchen Gratis-Kontingente schneller**, weil sie mehr Versuche
  brauchen, wenn sie den Code nicht lesen koennen. Die Seite soll das sagen, statt
  Muehelosigkeit zu versprechen.
- **Gratis-Angebote sind verderblich.** Firebase Studio nimmt seit 22.06.2026 keine neuen
  Accounts mehr an und wird am 22.03.2027 eingestellt. Deshalb monatlicher Durchgang und
  bewusst kleine Liste (10 bis 12 Werkzeuge) statt Vollstaendigkeit.

## Gotchas

- **Altersangaben sind unzuverlaessig und muessen vor Veroeffentlichung einzeln manuell
  nachgeschlagen werden**, weil die Seite genau damit wirbt. Stand 2026-09-05:
  Bolt.new keine Klausel gefunden, Lovable widerspruechlich (nennt 18 und regelt im selben
  Absatz Minderjaehrige), v0 16 und unter 18 mit Elternerlaubnis, Replit 13, Windsurf 13,
  GitHub 13, Google 16 in DE, OpenAI 13, Claude 18 strikt mit Yoti-Verifikation,
  Cursor 18, Kilo Code keine Angabe gefunden, OpenCode keine (nur MIT-Lizenz).
- **Nie empfehlen, eine Altersgrenze zu umgehen.** Ausweisen und Alternative anbieten.
  Fehlende Angabe ehrlich als "nicht angegeben" kennzeichnen, nicht als unbedenklich.
- **Git-Identitaet:** vor jedem Commit pruefen, dass user.email
  292338461+Thimorrow@users.noreply.github.com ist. Andernfalls blockiert der Vercel-Deploy.
