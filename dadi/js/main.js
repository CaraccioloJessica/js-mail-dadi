// Gioco dei dadi: Generare un numero random da 1 a 6 sia per il giocatore sia per il computer.Stabilire il vincitore, in base a chi fa il punteggio più alto. 

// BOTTONE
const button = document.getElementById("play");
button.addEventListener("click",
function(){

// VARIABILI GIOCATORI
const user = Math.floor(Math.random()* 6 + 1);
const pc = Math.floor(Math.random()* 6 + 1);

console.log("dado utente", user);
console.log("dado computer",pc);


// CONDIZIONE VINTO/PERSO/PAREGGIO
if (user > pc){
  console.log("Hai vinto tu!");
}
else if (user < pc){
  console.log("Hai perso!")
}
else{
  console.log("Pareggio!")
}
}
)
