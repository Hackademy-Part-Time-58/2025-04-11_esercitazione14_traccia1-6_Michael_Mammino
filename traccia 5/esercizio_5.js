// Traccia 5 Extra e un po' Hard

                            
// Data una stringa quale:

// var msg = "ciao mamma guarda come mi divertoooo... con cantatuuu!!!";

// trovare il numero di volte (occorrenze) in cui si ripete la vocale o.

// PS: in javascript una stringa può anche essere vista come un array di caratteri infatti potete leggere i caratteri di una stringa come msg[0], msg[1], ...


let msg = 'ciao mamma guarda come mi divertoooo... con cantatuuu!!!';

let oCounter = 0;

let i = 0;

while (i < msg.length) {
    if (msg[i] == 'o'){
        oCounter++;
    }
    i++;
}
console.log(oCounter);
