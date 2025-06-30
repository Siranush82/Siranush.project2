#  Namensratespiel & Quiz – Ein Konsolenspiel in JavaScript

##  Kurze Erklärung

Dieses kleine Konsolenspiel besteht aus drei Teilen:

1. **Namensratespiel** – Der Benutzer muss den richtigen Namen erraten.
2. **Altersratespiel** – Danach soll das Alter der Person korrekt erraten werden.
3. **Quiz-Spiel** – Zum Schluss gibt es ein Multiple-Choice-Quiz mit Fragen zu Allgemeinwissen und Anna.



---

##  Funktionen

-  **Benutzereingabe** über die Konsole (`readline-sync`)
-  **Farbige Ausgaben** dank `colors`-Bibliothek
-  **Intelligente Hinweise** beim Namenraten (z. B. Länge, Anfangsbuchstabe)
-  **Quiz mit Punktesystem**
-  **Fallunterscheidung für richtige/falsche Antworten**

---

##  Voraussetzungen



- [Node.js] (Version 14 oder höher empfohlen)
- npm (Node Package Manager – wird mit Node.js mitgeliefert)

---

##  Installation

1. **Projektordner erstellen und wechseln:**

   mkdir namensratespiel && cd namensratespiel

    Initialisiere ein neues Node.js-Projekt:

npm init -y

Benötigte Pakete installieren:

    npm install readline-sync colors

    

▶️ Nutzung

Führe das Spiel im Terminal mit folgendem Befehl aus:

node spiel.js