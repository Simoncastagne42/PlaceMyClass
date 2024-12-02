const addParticipant = document.querySelector("#ajouter");
const addButton = document.querySelector("#add");
const participantsList = document.querySelector("#liste-participants");
document.addEventListener("click", (event) => {
    // Vérifie si le clic n'est ni sur l'input ni sur le bouton
    if (
      event.target !== addParticipant &&
      event.target !== addButton
    ) {
      addParticipant.value = ""; // Réinitialise le champ
    }
  });


  addButton.addEventListener("click",handleOnClickAdd) ;
  function handleOnClickAdd() {
    // Récupère la valeur de l'input
    const valeur = addParticipant.value;

    
        // Crée un nouvel élément de liste
        const listParticipants = document.createElement("ul");
        listParticipants.textContent = valeur;
        listParticipants.className = "Liste-Participants";

        // Ajoute l'élément à la liste
        participantsList.appendChild(listParticipants);
        // rénitialise le champ
        addParticipant.value = "";
  }

  let tableauNom = ["simon", "Hamza", "Ali", "Karl", "Jeremy"]


function shuffle (tableauAleatoire){
    for(let i = tableauAleatoire.length - 1; i >= 0; i -=1){
        const indexTableau = Math.floor(Math.random()*(i+1));
    tableauAleatoire.push(tableauAleatoire[indexTableau]);
    tableauAleatoire.splice(indexTableau, 1);
}
return tableauAleatoire
}

shuffle(tableauNom);

console.log(tableauNom)