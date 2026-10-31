// mode strict, ca oblige a declarer les variables (slide 52)
"use strict";

// les variables avec let (slide 52)
// nom et prenom c des string (slide 38)
let nom = "John";
let prenom = "Doe";

// age et note c des number (slide 38)
let age = 30;
let note = 15;

// pi change pas donc const (slide 52)
const PI = 3.14;

// fonction sans parametre (slide 46), elle se lance au clic sur Nom (slide 18)
// on affiche dans la console avec console.log (slide 34)
function f1() {
    console.log(nom);
}

// meme chose pour le prenom
function f2() {
    console.log(prenom);
}

// on colle nom et prenom avec un tiret, concatenation avec + (slide 38)
function f3() {
    console.log(nom + "-" + prenom);
}

// affiche l'age
function f4() {
    console.log(age);
}

// affiche la note
function f5() {
    console.log(note);
}

// affiche pi
function f6() {
    console.log(PI);
}