/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function sayHello(name) {
    return `Ciao ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console

const greeting = sayHello(userName)

console.log(greeting);

//Risultato atteso se si passa 'Mario': // ciao Mario
