var nbErreur = 0 ;
var mots= ["jeu","clafoutis","pendrie","magenta","verbale","savoureux","entier",];
var secret = mots[Math.floor(Math.random()*mots.length)];
var lettre = [getElementsByClassName('alphabet')]; // tableau. On accède via lettres[5].value
function choix(lettre) {
    console.log(lettre);
    var i = 0;
    foreach(i=0 ; i<secret.length ; i++) {
        if (lettre===secret[i]){
            console.log("ok");
        }
        else {
            nbErreur++;
            if(nbErreur > 11);
        }
    }
}
