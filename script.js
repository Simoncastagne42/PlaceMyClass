const addParticipant = document.querySelector("#ajouter");
const addButton = document.querySelector("#add");
const participantsList = document.querySelector("#liste-participants");  
let tableauNom = [];
let audio = new Audio ("./sonic.mp3")
let boutonSon = document.querySelector("#bouton")
let audioDeux = new Audio ("./Renaud.mp3")
let audioTrois = new Audio ("./trompette.mp3")



const generer = document.querySelector("#generer")
const places = document.querySelectorAll(".Place")

document.addEventListener("click", (event) => {
    // Vérifie si le clic n'est ni sur l'input ni sur le bouton
    if (
      event.target !== addParticipant &&
      event.target !== addButton &&
      event.target !== generer
    ) {
      addParticipant.value = ""; // Réinitialise le champ
    }
  });


  addButton.addEventListener("click",handleOnClickAdd) ;
  function handleOnClickAdd() {
    // Récupère la valeur de l'input
    const valeur = addParticipant.value;
    tableauNom.push(valeur)

        // Crée un nouvel élément de liste
        const listParticipants = document.createElement("ol");
        listParticipants.textContent = valeur;
        listParticipants.className = "Liste-Participants";

        // Ajoute l'élément à la liste
        participantsList.appendChild(listParticipants);
        // rénitialise le champ
        addParticipant.value = "";
       
        audio.play();
  }

generer.addEventListener("click", handleClick)

function handleClick(){
  
  let tableauMelanger = shuffle(tableauNom)
 
   
places.forEach((place, index) => {
  
  place.innerHTML = tableauMelanger[index]
 audioTrois.play()
  
});

}


function shuffle (tableauAleatoire){
    for(let i = tableauAleatoire.length - 1; i >= 0; i -=1){
        const indexTableau = Math.floor(Math.random()*(i+1));
    tableauAleatoire.push(tableauAleatoire[indexTableau]);
    tableauAleatoire.splice(indexTableau, 1);
}
return tableauAleatoire
}

boutonSon.addEventListener("click", handleClickSound)

function handleClickSound(){
  audioDeux.play()
}