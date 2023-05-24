const carteRetourner1 = document.getElementById("dos1");
const carteRetourner2 = document.getElementById("dos2");
const carteRetourner3 = document.getElementById("dos3");
const carteRetourner4 = document.getElementById("dos4");
const carteRetourner5 = document.getElementById("dos5");
const carteRetourner6 = document.getElementById("dos6");

const carteSwitch1 = document.getElementById("carte1");
const carteSwitch2 = document.getElementById("carte2");
const carteSwitch3 = document.getElementById("carte3");
const carteSwitch4 = document.getElementById("carte4");
const carteSwitch5 = document.getElementById("carte5");
const carteSwitch6 = document.getElementById("carte6");

carteRetourner1.addEventListener("click", changement1);
carteRetourner2.addEventListener("click", changement2);
carteRetourner3.addEventListener("click", changement3);
carteRetourner4.addEventListener("click", changement4);
carteRetourner5.addEventListener("click", changement5);
carteRetourner6.addEventListener("click", changement6);

let compte = 2;
let tableau = [2,2,2];
tableau [1] = 2

function changement1 (){
    carteRetourner1.style.display = "none";
    carteSwitch1.style.visibility = "visible";
    compte--; 
    tableau [1] -= -1;
}

function changement2 (){
    carteRetourner2.style.display = "none";
    carteSwitch2.style.visibility = "visible";
    compte--; 
    tableau [1] -= -1;
}

function changement3 (){
    carteRetourner3.style.display = "none";
    carteSwitch3.style.visibility = "visible";
    compte--; 
}

function changement4 (){
    carteRetourner4.style.display = "none";
    carteSwitch4.style.visibility = "visible";
    compte--; 
}

function changement5 (){
    carteRetourner5.style.display = "none";
    carteSwitch5.style.visibility = "visible";
    compte--; 
}

function changement6 (){
    carteRetourner6.style.display = "none";
    carteSwitch6.style.visibility = "visible";
    compte--; 
}