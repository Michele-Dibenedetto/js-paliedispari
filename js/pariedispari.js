/* L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo se l'utente ha vinto */
// chiediamo all'utente di scegliere pari o dispari
var pariDispariUtente = prompt("segli pari o dispari");
console.log(pariDispariUtente);
// creo un ciclo che permette di andare avanti solo quando l'utente inserisce un numero compreso tra 1 e 5
do {
    var numeroUtente = parseInt(prompt("inserisci un numero tra 1 e 5"));
} while (numeroUtente < 1 || numeroUtente > 5);
console.log(numeroUtente);
// creo una funzione per generare un numero casuale avendo un max e un min di numeri da generare
function Random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) +min);
}
// richiamo la funzione random e indico i range di numeri da generare
var numeroComputer = Random(1,5);
console.log(numeroComputer);
// sommo il numero generato dal computer con quello scelta dall'utente
var somma = numeroComputer + numeroUtente;
console.log(somma);
// creo una funzione per stabilire se un numero è pari o dispari
function paridispari(num) {
    if (num % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}
// richiamo la funzione paridispari e gli passo l'elemento somma per verificare se la somma sia pari o dispari
var pariDispariSomma = paridispari(somma);
console.log(pariDispariSomma);
// se la scelta fatta all'inizio dall'Utente(pari o dispari) è uguale al risultato della somma dei numeri allora il giocatore ha vinto 
if (pariDispariSomma == pariDispariUtente) {
    alert("hai vinto!");
} else {
    alert("hai perso");
}