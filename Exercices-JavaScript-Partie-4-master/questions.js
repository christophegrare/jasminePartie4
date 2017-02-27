/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace("e", " ");
}
var concatString = function (texte1, texte2) {
    return texte1+texte2;
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.substr(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return typeof(texte)=== 'string';
}
var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}/*split coupe reverse inverse join recolle

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
 /*mdn */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}/*valeur absolue |x| */
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}/*array.map prend toute les lignes et fait la valeur absolue*/
var valeurAbsolueArray = function (array) {
    return array.map(Math.abs);
}/*PI est une constante*/
/* math.round pour l'arondi*/
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI*rayon * rayon);
}/*Math .hypot sert a calculer l'hypothenuse*/
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}/*donne le string du tofixed en decimal */
var calculIMC = function (poids, taille) {
    return parseFloat((poids / Math.pow(taille, 2)).toFixed(2));
}
