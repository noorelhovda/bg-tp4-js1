// mode strict (slide 52)
"use strict";

// tableau avec les noms des etudiants (slide 39)
// je met const parce que le tableau change pas (slide 52)
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// un objet etudiant avec nom prenom age (slide 40)
const etudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
};

// tableau d'objets, 3 etudiants (slide 41)
const listeEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

// f1 se lance au clic (slide 18), fonction sans parametre (slide 46)
// boucle for pour afficher les cases une par une (slide 45)
// etudiants[i] c la case i, length c la taille du tableau (slide 39)
function f1() {
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]);
    }
}

// f2 affiche l'objet en entier (slides 34 et 40)
function f2() {
    console.log(etudiant);
}

// f3 boucle for...of pour passer sur chaque etudiant (slide 45)
// e.nom pour avoir le nom de l'objet (slide 40)
// et on colle tout avec des tirets (concatenation slide 38)
function f3() {
    for (const e of listeEtudiants) {
        console.log(e.nom + "-" + e.prenom + "-" + e.age);
    }
}