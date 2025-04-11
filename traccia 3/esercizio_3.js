// Traccia 3

                            
// Scrivi un programma che simuli un distributore automatico di bevande.

// Il programma deve mostrare in output all'utente il seguente messaggio:

// inserisci il numero corrispondente alla bevanda desiderata: 1 Acqua; 2 Coca-Cola; 3 Birra

// Il programma richiederà in input all'utente di effettuare una scelta.

// Una volta che l'utente ha effettuato la scelta il distributore dovrà mostrare la bevanda selezionata ad esempio:

// erogazione acqua in corso

// Erogata la bevanda il distributore deve riproporre automaticamente l'output di partenza (cioè dovrà ripartire da capo senza dover aggiornare la pagina).



// var message = prompt('inserisci il numero corrispondente alla bevanda desiderata: 1 Acqua; 2 Coca-Cola; 3 Birra')

// switch(message) {
//     case '1':
//         console.log('erogazione Acqua in corso');
//         break;
//     case '2':
//         console.log('erogazione Coca-Cola in corso');
//         break;
//     case '3':
//         console.log('erogazione Birra in corso');
//         break;
//     default:
// }


//         var question = ['e perche non mi ami?', 'eddaiii', 'e uffa']

//         var answer;

//         do {
//             answer = prompt ('mi ami? (y/n)');
//             if(answer == 'n') {
//                 var randomIndex = Math.floor(Math.random() * question.length)
//                 alert(question [randomIndex])
//             }
//         } while (answer != 'y');

//         console.log(firstname)


var products = ['erogazione Acqua in corso', 'erogazione Coca-Cola in corso', 'erogazione Birra in corso']

var message;

do {
    message = prompt ('inserisci il numero corrispondente alla bevanda desiderata: 1 Acqua; 2 Coca-Cola; 3 Birra');
    switch(message) {
        case '1':
            alert(products[0]);
            break;
        case '2':
            alert(products[1]);
            break;
        case '3':
            alert(products[2]);
            break;
        default :
        alert('prodotto non valido')
    }
} while (true);
