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

I JS beugwe vi function og arrow functins afhængigt af behov.
fx

```javascript
//function kode:
async function loadPopularUsers() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();}}
// arrow function:
users.map(user => {
  return `<h3>${user.firstName}</h3>`
})
```

CSS selectors:
Classes bruges til styling og id til JS.
I vores projekt anvendes ID'er i JS til elementer der kun findes en gang på siden, såsom navigation og containers. Classes bruges til elementer der forekommer flere gang fx profilkort osv. det gør det nemmere at manipulere flere elementer i DOM'en.

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

Eksempel på funktion brugt i projektet.
Funktion: loadPopularUsers()
funktionen henter brugerdata fra DummyJSON API og viser de første 8 brugerer på forsiden.
Der er ingen parametre.
funktionen returnere ikke en værdi, men manipulerer DOM'en og indsætter HTML.

```javascript
//function kode:
async function loadPopularUsers() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();

  const users = data.users.slice(0, 8);

  popularGrid.innerHTML = users
    .map(
      (user) => `
      <a href="profil.html?id=${user.id}" class="user-card">
         <img src="${user.image}">
         <h3>${user.firstName} ${user.lastName}</h3>
      </a>
  `,
    )
    .join("");
}

loadPopularUsers();
```

Projektets formål har været at arbejde med:

- Dynamiske hjemmesider
- API
- Bruger integration
- Bruger interaktion
- Responsivt webdesign
- Samarbejde gennem Git og GitHub
