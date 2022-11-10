// Gioco dei dadi: Generare un numero random da 1 a 6 sia per il giocatore sia per il computer.Stabilire il vincitore, in base a chi fa il punteggio più alto. 

// BOTTONE
const button = document.getElementById("play");

button.addEventListener("click",
function(){

// VARIABILI GIOCATORI
const user = Math.floor(Math.random()* 6 + 1);
// console.log("dado utente", user);
document.querySelector('.user-dice').innerHTML = user;

const pc = Math.floor(Math.random()* 6 + 1);
// console.log("dado computer",pc);
document.querySelector('.pc-dice').innerHTML = pc;


// VARIABILE RISULTATO H2
let risultato = document.getElementById("result");

// CONDIZIONE VINTO/PERSO/PAREGGIO
if (user > pc){
  risultato.innerHTML =`Hai vinto!`;
  risultato.className = 'green';
}
else if (user < pc){
  risultato.innerHTML = `Hai perso!`
  risultato.className = 'red';
}
else{
  risultato.innerHTML = `Pareggio!`
  risultato.className = "";
}
}
)
