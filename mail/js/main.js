// MAIL: Chiedi all’utente la sua email,controlla che sia nella lista di chi può accedere,stampa un messaggio appropriato sull’esito del controllo.

// MAIL INSERITA DA UTENTE
let userMail = prompt("Inserisci la tua mail");
console.log(userMail);

// LISTA MAIL INVITATI
const listaMail = ["luca@gmail.com", "marco@gmail.com", "paolo@gmail.com"];

for (let i = 0; i < listaMail.length; i++){   
  // MESSAGGIO SEI INVITATO
  if (userMail === listaMail[i]){
    var invitato = true;
    console.log("Sei tra gli invitati!")
  }
}

if (invitato !== true){
  console.log("Non sei tra gli invitati")
}
