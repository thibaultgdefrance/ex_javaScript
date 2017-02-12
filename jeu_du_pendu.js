var mots= ["jeu","clafoutis","pendrie","magenta","verbale","savoureux","entier",];

var secret = mots[Math.floor(Math.random()*mots.length)];
var lettre=getElementsByClassName('alphabet').value=value;

//function choix(lettre) {
//    console.log(lettre);
//}

function jeu(){
    var erreur = 0;
    var i = 0;
    foreach(i<secret.length-1,erreur<11, i++){
        if lettre===secret[i]{
            console.log("ok");
        }
        else {
            erreur++;
        }
    }
}
jeu;
