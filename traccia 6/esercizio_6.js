// Traccia 6 Extra e anche HARD

                            
// Data una stringa (vista come un array di caratteri):

// var msg = "ciao mamma guarda come mi divertoooo... con cantatuuu!!!";

// trovare il numero di volte (occorrenze) in cui si ripetono ogni singola vocale.

let msg = "ciao mamma guarda come mi divertoooo... con cantatuuu!!!";
let i = 0;
let repeat = [0,0,0,0,0];
let vocal=['a','e','i','o','u'];

while(i < msg.length) {
    let j = 0;  
    while(j < vocal.length) {
        if(msg[i] == vocal[j]) {
            repeat[j]++;
        } 
        j++;
    }
    i++;    
}
i = 0;
while(i < vocal.length) {
    console.log(`La lettera ${vocal[i]} si ripete ${repeat[i]} volte`)
    i++;
}