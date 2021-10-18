/* Creare un carosello che al click sui bottoni, cambi l'immagine ed i testi nella zona principale, e contemporaneamente schiarisca la relatica immagine nella colonna, contornandola di un bordo bianco. */


// Array preimpostate per l'esecuzione dell'esercizio.

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

// Variabili costanti 

const jumbo_cnt = document.querySelector(".container");
const img_cnt = document.querySelector(".carosello");

const up = document.querySelector(".up");
const down = document.querySelector(".down");
const limit = items.length;

// Variabili inizializzate ma relative

let jumbo = "";
let img = "";
let x = 0;


// Utilizziamo un ciclo per "distribuire" le immagini ed i testi con gli array. Creiamo alcuni elementi html da qui.

for (let index = 0; index < items.length; index++) {
    jumbo += `
        <section class="jumbotron img" style="background-image: url(${(items[index])})">
            <div class="text">
                <h1 class="country">${title[index]}</h1>
                <p class="caption">${text[index]}</p>
            </div>
        </section>`;

    // console.log(jumbo);
    img += `
    <div class="unselected img" style="background-image: url(${(items[index])})"></div>`
}


// Mandiamo a schermo

jumbo_cnt.innerHTML = jumbo;
document.getElementsByClassName("jumbotron")[x].classList.add("selected");

img_cnt.innerHTML = img;
document.getElementsByClassName("unselected")[x].classList.add("selected");


// Creiamo le funzioni che ci permettono al click del bottone di:

up.addEventListener("click", function() {

    // - togliere la classe attiva (selected) dalla posizione che occupa;
    document.getElementsByClassName("jumbotron")[x].classList.remove("selected");
    document.getElementsByClassName("unselected")[x].classList.remove("selected");

    // - slittare la variabile posizione (x) secondo una data regola per ripartire da capo quando finisce il giro (decrescente);
    if (x > 0) {
        x --;
    }else {
        x = limit - 1;
    }
    
    // - assegnare la classe attiva (selected) nella nuova posizione indicata;
    console.log(x);
    document.getElementsByClassName("jumbotron")[x].classList.add("selected");
    document.getElementsByClassName("unselected")[x].classList.add("selected");
    
}); 


// Funzione con giro crescente:

down.addEventListener("click", function() {

    document.getElementsByClassName("jumbotron")[x].classList.remove("selected");
    document.getElementsByClassName("unselected")[x].classList.remove("selected");
    
    
    if (x < limit - 1) {
        x ++;
    }else {
        x = 0;
    }
    
    console.log(x);
    document.getElementsByClassName("jumbotron")[x].classList.add("selected");
    document.getElementsByClassName("unselected")[x].classList.add("selected");

    
}); 
