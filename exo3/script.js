// mode strict (slide 52)
"use strict";

// les etudiants, c un tableau d'objets (slide 41)
// chaque etudiant c un objet (slide 40)
const Students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", note: 14, autre: 5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", note: 7, autre: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", note: 13, autre: 3 }
];

// B prend la note en parametre et retourne true ou false (fonction avec retour slide 46)
// on compare avec >= 10 (operateurs slide 42), ca donne un booleen (slide 38)
function B(note) {
    return note >= 10;
}

// A se lance au clic sur Deliberation (slide 18)
// boucle for...of pour passer sur chaque etudiant (slide 45)
function A() {
    for (const s of Students) {
        // on appelle B avec la note, si c true il est admis sinon ajourné (if else slide 43)
        if (B(s.note)) {
            // affichage avec l'id devant (concatenation slide 38)
            console.log(s.id + ": ADMIS");
        } else {
            console.log(s.id + ": AJOURNÉ");
        }
    }
}