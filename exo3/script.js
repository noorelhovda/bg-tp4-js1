// mode strict (slide 52)
"use strict";

// les données Students : un tableau d'objets (slide 41)
// chaque étudiant est un objet avec ses propriétés (slide 40)
const Students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", note: 14, autre: 5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", note: 7, autre: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", note: 13, autre: 3 }
];

// B : fonction avec un paramètre et un retour (slide 46)
// elle compare la note à 10 avec >= (opérateur relationnel, slide 42)
// et retourne un booléen, true ou false (slide 38)
function B(note) {
    return note >= 10;
}

// A : fonction sans paramètres (slide 46), appelée au clic (slide 18)
// boucle for...of pour passer sur chaque étudiant (slide 45)
function A() {
    for (const s of Students) {
        // on appelle B avec la note de l'étudiant (slide 46)
        // if/else pour choisir le résultat selon ce que B retourne (slide 43)
        if (B(s.note)) {
            // concaténation pour l'affichage "1000: ADMIS" (slide 38)
            console.log(s.id + ": ADMIS");
        } else {
            console.log(s.id + ": AJOURNÉ");
        }
    }
}