// Traccia 4 Extra - Sconti di Natale

                            
// Dato un array di number contenente prezzi di prodotti ad esempio:

// var prices = [5, 2.50, 15, 20, 1.99];

// calcolare la somma dei prezzi escludendo i prodotti che costano meno di 10 euro.

var prices = [5, 2.50, 15, 20, 1.99];

var total = 0;

var i = 0;

while(i < prices.length) {
    if(prices[i] > 10) {
        total = total+prices[i]
    }
    i++;
}

console.log(total)

console.log('fine')