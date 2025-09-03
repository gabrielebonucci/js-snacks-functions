/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function countVowels(string) {
let vowelCount = 0;
const vowels = "aeiouAEIOU";

for (let i = 0; i < string.length; i++) {

const character = string[i];

 // Se l'indice del carattere nella stringa 'vowels' è diverso da -1,
    // significa che il carattere è una vocale.
    if (vowels.indexOf(character) !== -1) { 
      vowelCount++;
    }
  }

return vowelCount;
}

// Invoca la funzione qui e stampa il risultato in console

const result = countVowels(word);
console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)