const addParticipant = document.querySelector("#ajouter");
const addButton = document.querySelector("#add");
const participantsList = document.querySelector("#liste-participants");
const generer = document.querySelector("#generer");

let tableauNom = [];

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
    const valeur = addParticipant.value; // Récupère la valeur de l'input
      // Ajoute la valeur au tableau
      tableauNom.push(valeur);


        // Crée un nouvel élément de liste
        const listParticipants = document.createElement("ol");
        listParticipants.textContent = valeur;
        listParticipants.className = "Liste-Participants";

        // Ajoute l'élément à la liste
        participantsList.appendChild(listParticipants);
        // rénitialise le champ
        addParticipant.value = "";
  }


