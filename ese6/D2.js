/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 10;
let numero2 = 15;
if (numero1 > numero2) {
  console.log("Il numero più grande è: " + numero1);
} else if (numero2 > numero1) {
  console.log("Il numero più grande è: " + numero2);
} else {
  console.log("I due numeri sono uguali.");
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero4 = 7; 

if (numero4 !== 5) {
  console.log("not equal");
}
else {
  console.log("equal")
}



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero3 = 15; 


if (numero3 % 5 === 0) {
  console.log("divisibile per 5")
}
else {
  console.log('non diviibile')
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function verificaOtto(numero1, numero2) {
  return (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8);
}

console.log(verificaOtto(5, 3)); 


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
// Saldo totale del carrello dell'utente
let totalShoppingCart = 60; // Sostituisci con il saldo effettivo del carrello

// Costo fisso della spedizione
const costoSpedizioneFisso = 10;

// Verifica se il totale del carrello supera 50
if (totalShoppingCart > 50) {
  // Spedizione gratuita
  console.log("Totale carrello: " + totalShoppingCart + " - Spedizione Gratuita");
} else {
  // Spedizione a pagamento
  const totaleConSpedizione = totalShoppingCart + costoSpedizioneFisso;
  console.log("Totale carrello: " + totalShoppingCart + " + Spedizione: " + costoSpedizioneFisso + " = " + totaleConSpedizione);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/ 
/* SCRIVI QUI LA TUA RISPOSTA */



// SCONTO
const scontoBlackFriday = totalShoppingCart * 0.2;


// Verifica se il totale del carrello supera 50
if (totalShoppingCart > 50) {
  // Spedizione gratuita
  const totaleConSconto = totalShoppingCart - scontoBlackFriday;
  console.log("Totale carrello: " + totaleConSconto + " - Spedizione Gratuita");
} else {
  // Spedizione a pagamento
  const TotaleConSpedizione = totalShoppingCart + costoSpedizioneFisso;
  console.log("Totale carrello: " + totalShoppingCart + " + Spedizione: " + costoSpedizioneFisso + " = " + TotaleConSpedizione);
  // Calcola il totale con lo sconto del Black Friday
  const scontoBlackFriday = totalShoppingCart * 0.2;
  const totaleConSconto =totalShoppingCart - scontoBlackFriday;
  console.log("Totale scontato (Black Friday): " + totalShoppingCart + " - Sconto del 20%: " + scontoBlackFriday + " = " + totaleConSconto);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
// Definisci tre variabili con valori numerici
let numero11 = 25;
let numero12 = 12;
let numero13 = 40;

// Crea un array con i valori delle tre variabili
let arrayNumeri = [numero11, numero12, numero13];

// Ordina l'array in ordine decrescente
arrayNumeri.sort(function(a, b) {
  console.log(a,b);
  return b-a;
});

// Estrai i valori ordinati in tre nuove variabili
let numeroMaggiore = arrayNumeri[0];
let numeroMedio = arrayNumeri[1];
let numeroMinore = arrayNumeri[2];

// Mostra il risultato in console
console.log("Numero Maggiore: " + numeroMaggiore);
console.log("Numero Medio: " + numeroMedio);
console.log("Numero Minore: " + numeroMinore);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num= '1';
console.log(typeof num)
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let numero5 = 10; 


if (numero5 % 2 === 0) {
  console.log("pari")
}
else {
  console.log('dispari')
}

// ESERCIZIO 10
  //Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
  let val = 7
  if (val < 5) {
        console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }




/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
 }
 me.city='toronto'
 console.log(me)
 
 /* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills;
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = []; // Crea un array vuoto

for (let i = 1; i <= 10; i++) {
  numeri.push(i); // Aggiungi i numeri da 1 a 10 all'array
}

console.log(numeri); // Stampa l'array risultante

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const numeri6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array con i numeri da 1 a 10*/

numeri[numeri6.length - 1] = 100; // Sostituisci l'ultimo elemento con il valore 100

console.log(numeri6); // Stampa l'array risultante
