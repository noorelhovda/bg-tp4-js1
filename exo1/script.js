// Mode strict : signale les variables non déclarées avec let, const ou var (slide 52)
"use strict";

// Déclaration de variables avec let (slide 52)
// Type primitif string : chaîne de caractères (slide 38)
// Affectation avec le signe = et fin d'instruction avec ; (slide 37)
let nom = "John";
let prenom = "Doe";

// Type primitif number : nombre entier (slide 38)
let age = 30;
let note = 15;

// Déclaration d'une constante avec const (slide 52)
// Type primitif number : nombre réel (slide 38)
const PI = 3.14;

// Déclaration d'une fonction sans paramètres (slide 46)
// Appelée lors de l'événement onclick du bouton "Nom" (slide 18)
// Affichage dans la console avec console.log() (slide 34)
function f1() {
    console.log(nom);
}

// Fonction sans paramètres appelée au clic sur "Prénom" (slides 46 et 18)
function f2() {
    console.log(prenom);
}

// Fonction sans paramètres appelée au clic sur "Nom & Prénom" (slides 46 et 18)
// Concaténation de chaînes avec l'opérateur + (slide 38)
function f3() {
    console.log(nom + "-" + prenom);
}

// Fonction sans paramètres appelée au clic sur "Age" (slides 46 et 18)
function f4() {
    console.log(age);
}

// Fonction sans paramètres appelée au clic sur "Note" (slides 46 et 18)
function f5() {
    console.log(note);
}

// Fonction sans paramètres appelée au clic sur "Pi" (slides 46 et 18)
function f6() {
    console.log(PI);
}