/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.sort((a, b) => b.localeCompare(a));
console.log(pets)
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstEle = pets.shift();

// Aggiung il primo elemento in ultima posizione
pets.push(firstEle);

console.log(pets)
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'PIPPOBAUDO' + (i + 1); // Puoi scegliere un valore a tua scelta, ad esempio, ABCD1, ABCD2, ABCD3, ecc.
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const NuovaAuto = {
  brand: 'Ferrari',
  model: 'F22',
  color: 'white',
  trims: ['sport', 'granturismo', 's'],
};
cars.push(NuovaAuto);

// Rimuovi l'ultimo elemento dalla proprietà "trims" di ciascuna auto
for (let i = 0; i < cars.length; i++) {
  const auto = cars[i];
  if (auto.trims.length > 0) {
    auto.trims.pop();
  }
}

console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
  if (cars[i].trims && cars[i].trims.length > 0) {
    justTrims.push(cars[i].trims[0]);
  }
}

console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  const firstLetter = car.color.charAt(0).toLowerCase(); // Ottieni la prima lettera della proprietà "color" in lettere minuscole

  if (firstLetter === 'b') {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}




/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const NumericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;
while (i < NumericArray.length && NumericArray[i] !== 32) {
  console.log(NumericArray[i]);
  i++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

function posizioneNellAlfabetoItaliano(carattere) {
  switch (carattere.toLowerCase()) {

    case 'd':
      return 4;

    case 'g':
      return 7;

    case 'n':
      return 14;

    case 'u':
      return 21;
    case 'z':
      return 26;
    default:
      return -1; // Carattere non presente nell'alfabeto italiano
  }
}

const posizioniAlfabetoItaliano = charactersArray.map(carattere => posizioneNellAlfabetoItaliano(carattere));


console.log(posizioniAlfabetoItaliano);





