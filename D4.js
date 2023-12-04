/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
  const result = l1 * l2;
  return result;
}
const lunghezza1 = 10;
const lunghezza2 = 20;
const areaResult = area(lunghezza1, lunghezza2);
console.log(areaResult);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(num1, num2) {
  if (num1 === num2) {
    const result = (num1 + num2) * 3;
    return result;
  } else {
    const result = num1 + num2;
    return result;
  }
}

const numero1 = Math.floor(Math.random() * 10);
const numero2 = Math.floor(Math.random() * 10);

const risultato = crazySum(numero1, numero2);

console.log(risultato);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
  const differenza = Math.abs(num - 19);
  if (num > 19) {
    const result = differenza * 3;
  } else {
    return differenza;
  }
}
const numero = Math.floor(Math.random() * 30);

const diffTot = crazyDiff(numero);
console.log(diffTot);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
  if ((n > 20 && n < 101) || n === 400) {
    return true;
  } else {
    return false;
  }
}

const numero7 = Math.floor(Math.random() * 400);

const ris = boundary(numero7);
console.log(ris);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
  if (str.startsWith("EPICODE ")) {
    return str;
  } else {
    return "EPICODE " + str;
  }
}

const risultatoStr = epify("EPICODE");
console.log(risultatoStr);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(numb) {
  if (numb > 0) {
    if (numb % 3 === 0 || numb % 7 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(check3and7(7));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(stringa) {
  const inverti = stringa.split("").reverse().join("");
  return inverti;
}

const origine = "EPICODE";
const stringaInvertita = reverseString(origine);
console.log(origine);
console.log(stringaInvertita);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
