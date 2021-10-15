/* Creare un carosello che all'azione "click" su specifici pulsanti esegua:
    -cambiamento di "evidenza/selezione tra le immagini del carosello;

    -riproduzione dell'immagine selezionata nella sezione #visited, con relativi testi; 
*/


// creazione/copiatura delle variabili array dal materiale


const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


// Variabili
const btn_up = document.getElementById("up");
const btn_down = document.getElementById("down");



// Creare l'azione

btn_up.addEventListener ("click", function() {
    console.log("up premuto");

    /* qui la classe img_unselected, per il valore successivo, deve essere sostituita dalla classe img_selected;
    
    in contemporanea la relativa classe img_(country) deve essere applicata a #visited;
    
    in contemporanea i rispettivi valori di title e text devono essere mandati a schermo su #country e su #caption;*/
})


