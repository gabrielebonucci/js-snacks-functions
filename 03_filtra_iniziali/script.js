/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filterByInitial(namesArray, initialLetter) {
    const filteredNames = [];
    const letterToMatch = initialLetter.toUpperCase(); //rende la lettera maiuscola per il confronto

    for (let i = 0; i < namesArray.length; i++) {
        const currentName = namesArray[i];
        if (currentName[0].toUpperCase() === letterToMatch) {
            filteredNames.push(currentName);
        }
    }
    return filteredNames;
}

// Invoca la funzione qui e stampa il risultato in console

const startingWithA = filterByInitial(names, "A");
console.log(startingWithA);

const startingWithL = filterByInitial(names, "L");
console.log(startingWithL);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]