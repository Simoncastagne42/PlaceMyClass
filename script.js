const addParticipant = document.querySelector("#ajouter");
const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Saisissez un texte ici...";
      input.id = "participantInput";

      input.className = "styled-input";

addParticipant.addEventListener("click",handleOnClickAjouter);

function handleOnClickAjouter () {
    
      addParticipant.replaceWith(input);

      // Ajoute un gestionnaire pour capturer l'entrée utilisateur lorsqu'il termine
      input.addEventListener("blur", () => {
        const valeur = input.value;

        // Remet le bouton si aucune valeur n'est saisie
        addParticipant.textContent = "Ajouter quelqu'un";
        input.replaceWith(addParticipant); // Réinjecte le bouton
      });

      // Remplace le bouton par le champ de saisie
      addParticipant.replaceWith(input);

      // Donne immédiatement le focus au champ de saisie (= permet de saisir le texte directement sans avoir a reclické)
      input.focus();
    };

  