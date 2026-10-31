// mode strict (slide 52)
"use strict";

// un tableau de chaînes de caractères (slide 39)
// const car le tableau lui-même ne change pas (slide 52)
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// un objet avec des propriétés nom, prenom, age (slide 40)
const etudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
};

// un tableau d'objets (slide 41)
const listeEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

// f1 : fonction sans paramètres (slide 46) appelée au clic (slide 18)
// boucle for pour afficher chaque case du tableau (slide 45)
// etudiants[i] pour accéder à une case, et .length pour la taille (slides 39 et 45)
function f1() {
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]);
    }
}

// f2 : on affiche l'objet en entier avec console.log (slides 34 et 40)
function f2() {
    console.log(etudiant);
}

// f3 : boucle for...of pour parcourir le tableau d'objets (slide 45)
// on accède aux propriétés avec le point, ex. e.nom (slide 40)
// et on colle tout avec + "-" + (concaténation, slide 38)
function f3() {
    for (const e of listeEtudiants) {
        console.log(e.nom + "-" + e.prenom + "-" + e.age);
    }
}