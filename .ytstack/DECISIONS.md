# Decisions

Append-only architectural and product decisions for aicademy. Never rewrite past entries.
If a decision is reversed, add a new entry that supersedes.

Format for each entry:

## YYYY-MM-DD: <Short title>

**Context:** <what forced the decision>
**Options considered:** <A, B, C>
**Chose:** <selected option>
**Reason:** <why>
**Supersedes:** <link to earlier entry if this reverses a prior decision>

---

## 2026-09-05: Portfolio-Projekt, kein Startup

**Context:** Der Einstieg war unklar zwischen Kurs, Tool-Sammlung und Academy, dazu die
offene Frage "paid oder not paid".
**Options considered:** Startup mit Umsatzabsicht; Portfolio-Projekt ohne Umsatzabsicht.
**Chose:** Portfolio-Projekt.
**Reason:** Grunder woertlich: "tbh ich will einfach ein portfolio produkt, es geht nicht
um geld machen, es geht darum, menschen einen free stack zu geben plus einige tipps und
skills". Damit entfallen alle Monetarisierungsfragen, der Massstab ist Nutzen und
Vorzeigbarkeit.

## 2026-09-05: Approach A und B zusammen, C spaeter

**Context:** Drei Umsetzungswege standen zur Wahl.
**Options considered:** A statische Uebersicht (S); B Drei-Fragen-Finder (M);
C Null-Euro-Bautagebuch mit fuenf oeffentlich gebauten Projekten (L).
**Chose:** A und B zusammen, C ausdruecklich ausserhalb des Umfangs.
**Reason:** A ist die Datengrundlage, B die Logikschicht darueber, eine Datenquelle und
zwei Zugaenge. C braucht Wochen Durchhaltevermoegen und liefert bis dahin nichts
Vorzeigbares.

## 2026-09-05: Zielgruppe ist jeder ohne Budget und ohne Programmierkenntnisse

**Context:** Erste Fassung war auf 14 bis 18 im deutschsprachigen Raum zugeschnitten.
**Options considered:** eng auf Jugendliche; breit auf alle ohne Budget.
**Chose:** breit, und zusaetzlich ausdruecklich Nicht-Programmierer als Kern.
**Reason:** Entscheidung des Grunders. **Wichtige Folge:** Das Altersthema wandert von
der Positionierung in das Produkt hinein und wird ein Filter. Der Altersfilter darf
deshalb nicht entfallen, er ist das einzige Merkmal, das die Seite von bestehenden
Gratis-Listen unterscheidet.

## 2026-09-05: Nur Englisch

**Context:** Deutsch, Englisch oder beides.
**Options considered:** nur Deutsch; nur Englisch; zweisprachig.
**Chose:** nur Englisch.
**Reason:** Die Luecke besteht weltweit. Zweisprachigkeit wuerde den Pflegeaufwand pro
Update verdoppeln, und Pflege ist der als kritisch bestaetigte Punkt.

## 2026-09-05: Nicht technisch, im Ton und in der Sache

**Context:** Grunder woertlich: "es soll nicht so komisch sein, sondern einfach nicht
techy sein", auf Rueckfrage praezisiert auf "auch die Leute selbst".
**Options considered:** nur Ton und Optik anpassen; auch die Zielgruppe auf
Nicht-Programmierer verschieben.
**Chose:** beides.
**Reason:** Werkzeugauswahl verschiebt sich damit von Editoren zu Browser-Werkzeugen.
Faustregel fuer jeden Satz auf der Seite: Verstuende ihn jemand, der noch nie eine Zeile
Code gesehen hat? Wenn nein, umschreiben. Das Wort "Stack" kommt auf der Seite nicht vor.

## 2026-09-05: Drei Stufen statt einer Werkzeugliste

**Context:** Der Grunder wollte Kilo Code und OpenCode empfehlen ("das sind die besten
free dinger die es gibt"). Beides sind Entwicklerwerkzeuge und widersprechen der
Nicht-Programmierer-Ausrichtung am Einstieg.
**Options considered:** Kilo/OpenCode als Einstieg; gar nicht aufnehmen; als spaetere
Stufe aufnehmen.
**Chose:** als spaetere Stufe.
**Reason:** Stufe 1 ohne Installation im Browser, Stufe 2 Kilo Code mit eigenem
kostenlosem Gemini-Schluessel wenn das Gratis-Guthaben aufgebraucht ist, Stufe 3 optional
OpenCode und Ollama. Das deckt sich mit dem Zielbild des Grunders: "Am Anfang kommen die
ohne hierhin. Am Ende haben die bisschen Wissen und irgendwas gebaut." Das Wissen entsteht
genau auf Stufe 2. Kilo vor OpenCode, weil es eine sichtbare Oberflaeche hat.

## 2026-09-05: Genau fuenf Tipp-Karten, kein Lernpfad

**Context:** Umfang der "Tipps und Skills" war offen.
**Options considered:** fuenf Karten; vollstaendiger Lernpfad.
**Chose:** fuenf Karten, eingebettet an den Stellen, wo man haengenbleibt.
**Reason:** Inhalte, die nur unter Gratis-Bedingungen zaehlen, gibt es sonst nirgends.
Ein weiterer Grundlagenkurs waere austauschbar.

## 2026-09-05: Kein Altersfilter, Alter ist egal

**Context:** Der Pitch hatte Alter als Filter und als einziges Unterscheidungsmerkmal
eingebaut (Frage "Wie alt bist du?", Altersangaben pro Werkzeug, Pfade fuer unter 13).
Der Gruender hat das vor dem ersten Slice ausdruecklich verworfen: "Alter rausnehmen,
Alter ist egal."
**Options considered:** Altersfilter und Altersangaben behalten; Alter komplett aus dem
Produkt nehmen.
**Chose:** Alter komplett raus. Keine Altersfrage, keine Altersangaben in der Uebersicht,
kein Filter nach Nutzungsbedingungen, kein USP "wir sagen dir, was Minderjaehrige nicht
nutzen duerfen".
**Reason:** Explizite Anweisung des Gruenders. Der Finder fragt nur noch, was jemand
bauen will und ob Computer oder Handy. Claude, Cursor und aehnliche Werkzeuge fallen
weiter raus, weil sie Geld kosten, nicht weil jemand zu jung ist.
**Supersedes:** Die Folge "Altersfilter darf nicht entfallen" aus
"2026-09-05: Zielgruppe ist jeder ohne Budget und ohne Programmierkenntnisse".

## 2026-09-05: Next.js, nicht Astro

**Context:** Die Seite ist statisch, kein Backend, kein Login, Ziel Vercel. Offen
zwischen Astro und Next.js, Entscheidung vor Slice 1 noetig.
**Options considered:** Astro (weniger Maschine); Next.js.
**Chose:** Next.js.
**Reason:** Entscheidung des Gruenders in der Slice-Runde. Kein Backend, keine
API-Routen in M001. Statische Ausgabe auf Vercel.
