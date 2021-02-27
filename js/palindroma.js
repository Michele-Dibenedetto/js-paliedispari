// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// creo una funzione che mi permette di capire se una parola è polindroma
function palindroma(parola) {
    var support;
    // scompongo la parola trasformando la stringa in un arrey di sottostringhe
    var parolaScomposta = parola.split("");
    console.log(parolaScomposta);
    // inverto le sottostringhe
    var parolaInvertita = parolaScomposta.reverse();
    console.log(parolaInvertita);
    console.log(parolaScomposta);
    // creo un ciclo per paragonare la posizione delle lettere della parola originale con quelle della parola invertita.
    for (i=0; i < parola.length; i++) {
        console.log("ciclo", i);
        // verifico che la parola originale sia uguale alla parola invertita
        if (parola[i] == parolaInvertita[i]) {
            console.log("controllo", parolaScomposta[i]);
            support = true;
        } else {
            console.log("la parola non è palindroma");
            support = false;
        }
    }
    return support;
}
// chiedo all'utente di inserire una parola
var parolaInserita = prompt("inserire una parola");
// invoco la funzione
var parolaPalindroma = palindroma(parolaInserita);
if (parolaPalindroma) {
    alert("la parola inserita è palindroma");
} else {
    alert("la parola non è palindroma");
}
