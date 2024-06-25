const dog_walking = document.getElementById("dog_walking");
const dog_sitting = document.getElementById("dog_sitting");
const dialogContainer = document.getElementById("dialogue-container");
const dialogueText = document.getElementById("dialogue-text");
const nextBtn = document.getElementById("next-btn");
const animationContainer = document.getElementById("animation-container");
const cadeauContainer = document.getElementById("cadeau-container");
const cadeau = document.getElementById("cadeau");
const gateau = document.getElementById("gateau");
const ouvrirBtn = document.getElementById("ouvrir-btn");
const lettreContainer = document.getElementById("lettre-container");
const flecheBtn = document.getElementById("fleche-btn");

const dialogues = [
  "Bonjour, c'est un dialogue d'exemple.",
  "Voici la deuxième ligne du dialogue.",
  "Et voici la troisième ligne du dialogue.",
];

let currentDialogueIndex = 0;
let charIndex = 0;
const typingSpeed = 50; // Vitesse de saisie en ms par caractère

// Jouer la vidéo du berger allemand
setTimeout(() => {
  dog_walking.style.left = "40%";
}, 500); // Délai pour commencer l'animation après le chargement

// Afficher le cadeau après l'animation du chien
dog_walking.addEventListener("transitionend", () => {
  dog_walking.style.display = "none";
  dog_sitting.style.display = "block";
  dialogContainer.style.display = "flex";
  typeDialogue();
});

function typeDialogue() {
  if (charIndex < dialogues[currentDialogueIndex].length) {
    dialogueText.textContent +=
      dialogues[currentDialogueIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeDialogue, typingSpeed);
  } else {
    nextBtn.disabled = false; // Réactiver le bouton une fois le texte terminé
  }
}

function showNextDialogue() {
  nextBtn.disabled = true; // Désactiver le bouton pendant la saisie
  dialogueText.textContent = ""; // Réinitialiser le texte de la bulle
  charIndex = 0;
  currentDialogueIndex++;
  if (currentDialogueIndex < dialogues.length) {
    typeDialogue();
  } else {
    // alert("Fin du dialogue");
    currentDialogueIndex = 0; // Réinitialiser l'index si tu veux boucler
    // typeDialogue();
    dialogContainer.style.display = "none";
    dog_sitting.classList.add("fadeout_animation");
  }
}

nextBtn.addEventListener("click", showNextDialogue);

dog_sitting.addEventListener("animationend", () => {
  dog_sitting.style.display = "none";
  cadeauContainer.style.display = "flex";
  cadeauContainer.classList.add("fadein_animation");
});

cadeauContainer.addEventListener("animationend", () => {
  cadeau.classList.add("cadeau_shake_animation");
});

let iteration = 0;
cadeau.addEventListener("animationiteration", () => {
  if(iteration == 3){
    ouvrirBtn.style.opacity = "1";
    ouvrirBtn.disabled = false;
  }
  else{
    iteration++;
  }
});

function openCadeau()
{
  cadeau.style.display = "none";
  gateau.style.display = "initial";
  gateau.classList.add("fadein_animation");
  animationContainer.style.backgroundImage = "initial";
  animationContainer.style.backgroundColor = "hsl(70, 31%, 85%)";
  animationContainer.classList.add("fadein_animation");
  ouvrirBtn.innerText = "Faire un vœu";
  balloons.style.visibility = "visible";
  cadeauContainer.style.display = "none";
  balloons.style.animation = "balloons 15s 1";
  ouvrirBtn.removeEventListener("click", openCadeau);
}

// Ouvrir le cadeau
ouvrirBtn.addEventListener("click", openCadeau);

// Bouton pour défiler la lettre
flecheBtn.addEventListener("click", () => {
  alert(
    "Lettre défilée (tu peux ajouter du code ici pour faire défiler la lettre)"
  );
});