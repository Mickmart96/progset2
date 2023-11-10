/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    return l1 * l2;
}

const l1 = 5;
const l2 = 8;
const risultato = area(l1, l2);
console.log("L'area del rettangolo è: " + risultato)
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(numero1, numero2) {
    let somma = numero1 + numero2
    if (numero1 === numero2) {
      return somma * 3;
     
    } 
      return somma ;
      
    
  }
  console.log(crazySum(5, 5))
   
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(numero) {
    const differenza = Math.abs(numero - 19);
    if (numero > 19) {
      return differenza * 3; 
    } 
      return differenza;
      
  }
  console.log(crazyDiff(12))

  
  
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
      return true;
    } else {
      return false;
    }
  }
  
  
  // Esempio
  console.log(boundary(30));   // Restituisce true (30 è compreso tra 20 e 100)
  
  
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function epify(inputString) {
    if (inputString.startsWith("EPICODE")) {
      return inputString; // Restituisci la stringa originale se inizia già con "EPICODE"
    } else {
      return "EPICODE " + inputString; // Aggiungi "EPICODE" all'inizio della stringa
    }
  }
  
  // Esempio
  console.log(epify("Hello"));          // Restituisce "EPICODE Hello"
  console.log(epify("EPICODE World"));   // Restituisce "EPICODE World" (nessuna modifica)
  
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(numero) {
  if (numero <= 0) {
    return false; // Verifica se il numero è positivo
  }

  if (numero % 3 === 0 || numero % 7 === 0) {
    return true; // Verifica se il numero è un multiplo di 3 o di 7
  } else {
    return false; // Altrimenti, restituisci false
  }
}
// Esempio
console.log(check3and7(9));   // Restituisce true (9 è un multiplo di 3)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(inputString) {
  // Converte la stringa in un array di caratteri, inverte l'array e lo riunisce in una stringa
  return inputString.split('').reverse().join('');
}

// Esempio 
const stringOriginale = "EPICODE";
const stringInvertita = reverseString(stringOriginale);
console.log(stringInvertita); // Stampa "EDOCIPE"
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(inputString) {
  // Dividi la stringa in parole utilizzando lo spazio come separatore
  const parole = inputString.split(' ');

  // Trasforma la prima lettera di ogni parola in maiuscolo e mantieni il resto in minuscolo
  const paroleMaiuscole = parole.map(parola => parola.charAt(0).toUpperCase() + parola.slice(1).toLowerCase());

  // Unisci le parole trasformate in una nuova stringa
  const nuovaStringa = paroleMaiuscole.join(' ');

  return nuovaStringa;
}

// Esempio 
const stringaOriginale = "questa è una stringa di esempio";
const stringaModificata = upperFirst(stringaOriginale);
console.log(stringaModificata); // Stampa "Questa È Una Stringa Di Esempio"
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(inputString) {
  if (inputString.length < 3) {
    return ""; // Restituisci una stringa vuota se la stringa ha meno di 3 caratteri
  }

  // Estrai una sottostringa che inizia dal secondo carattere e finisce con il penultimo carattere
  const nuovaStringa = inputString.substring(1, inputString.length - 1);

  return nuovaStringa;
}

// Esempio 
const StringaOriginale = "esempio";
const StringaTagliata = cutString(StringaOriginale);
console.log(StringaTagliata); // Stampa "sempi"
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  const numeriCasuali = [];
  for (let i = 0; i < n; i++) {
    const numeroCasuale = Math.floor(Math.random() * 11); // Genera un numero casuale tra 0 e 10
    numeriCasuali.push(numeroCasuale);
  }
  return numeriCasuali;
}

// Esempio di utilizzo della funzione per ottenere un array di 5 numeri casuali:
const numeriCasuali = giveMeRandom(5);
console.log(numeriCasuali); // Stampa un array di 5 numeri casuali tra 0 e 10
