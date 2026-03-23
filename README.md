## Dynamisk datingsite

Dette projekt er udviklet som en del af Tema 8, hvor målet har været at udvikle en dynamisk hjemmeside ved hjælp af HTML, CSS og JavaScript. Projektet tager udgangspunkt i en datingside, hvor brugere kan finde matches gennem filtrering fremfor traditionelle swipe-baserede løsninger.
Formålet med projektet har været at arbejde med dynamisk data, brugerinteraktion og API-integration, samt at udvikle en brugervenlig og responsiv webapplikation.
Hjemmesiden giver brugerne mulighed for at:

- se populære brugerprofiler
- filtrere profiler efter forskellige kriterier
- bne individuelle profilsider
- starte en chat med andre brugere
- oprette en profil
  Brugerdata hentes dynamisk fra DummyJSON API, hvilket gør det muligt at simulere en database med forskellige brugerprofiler. Disse data bruges til at generere profilkort på siden ved hjælp af JavaScript og DOM manipulation.
  Projektet er designet i Figma og derefter implementeret som en responsiv hjemmeside.

Projektet er udviklet med følgende teknologier:

- HTML – struktur af hjemmesiden
- CSS – styling og layout
- JavaScript – funktionalitet og dynamisk indhold
- DummyJSON API – brugerdata til profiler
- Git & GitHub – versionsstyring
- Visual Studio Code – udviklingsmiljø
- Figma – design og prototype

## Projektstruktur:

Projektet er organiseret i mapper for at gøre koden overskuelig og let at arbejde med.

css/
chat.css
filtrering.css
general.css
index.css
opret.css
profil.css

fonts/

img/
billeder og ikoner

js/
chat.js
filtrering.js
index.js
opret.js
profil.js

HTML filer
index.html
filtrering.html
profil.html
chat.html
opret.html

ressourcer:

- billeder og ikoner ligger i img/
- stylesheets ligger i css/
- javascript filer ligger i js/
  dette gør det nemmere at vedligeholde projektet og finde relevante filer

## Navngivning:

vur bruger følgende regler for navngivning:

- filnavne skrives med små bogstaver
- css og js filer nangives efter den side de bruges på
  fx filtrering.html, profil.html, index.js, profil.js osv.
  Det gør det tydeligt hvilke filer der hører sammen.

## link til scripts

Vores javascrippt filer linkes der til øverst i head med defer atributten.

## Git branches

Vi arbejder med branches i Git for at undgå konflikter i koden.
Branches navngives efter funktion/hvad man abejder eller retter.
fx feature-filtrering, index-rettelser osv.
Når en funktion er færdig, mercher vi branchen til main.

## Arbejdsflow

Vores arbejdsproces i Git:

1. opret ny branch
2. arbejde på funktionen
3. commit ændringer med en beskrivende commit-besked
4. push til github
5. merge til main når funktionen virker
   fx rettelser i menuen, index indhold osv.

## Kode

i JavaScript refererer vi typisk til elementer med id, når vi skal hente dem med getElementById()
i CSS bruger vi oftest class, så flere elementer kan styles ens

## Funktionalitet

Hjemmesiden indeholder følgende funktioner:

- Brugerprofiler
  Profiler vises dynamisk på siden ved hjælp af data hentet fra DummyJSON API.
- Filtrering
  Brugeren kan filtrere profiler efter forskellige præferencer for at finde relevante matches.
- Profilsider
  Når en bruger klikker på et profilkort, åbnes en detaljeret profilside med mere information om personen.
- Chat
  Brugere kan starte en chat med andre profiler direkte fra profilsiden.
- Opret profil
  Brugere kan oprette deres egen profil via en formular.
- Responsivt design
  Hjemmesiden er designet til både desktop og mobil, hvor navigationen på mobil anvender en burger menu

Brugerdata hentes fra DummyJson API, og vises dynamisk på siden.

## API endpints

Vi anvender følgende API endpoint:
https://dummyjson.com/users
Dette endpoint bruges til at hente brugerdata som fx:

- Navn
- By
- Alder
- Køn
- Profilbillede
  Data behandles i JS og indsættes dynamisk i HTML.

## dokumentation af funktion

Funktionen showUsers bruges til at vise en liste af brugere på forsiden af websitet. Den modtager et array af brugere og genererer HTML, som indsættes i DOM’en, så brugerne bliver vist som kort.
Funktionen spiller sammen med fetch, som henter data fra API’et (DummyJSON). Når data er hentet, sendes det videre til showUsers, som står for at vise det på siden.

```javascript
fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((data) => {
    showUsers(data.users.slice(0, 8));
  });
```

vi har brugt userArray: Et array af bruger-objekter, som indeholder informationer som navn, alder, billede og adresse

Projektets formål har været at arbejde med:

- Dynamiske hjemmesider
- API
- Bruger integration
- Bruger interaktion
- Responsivt webdesign
- Samarbejde gennem Git og GitHub
