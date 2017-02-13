//function jeu() {
//    var mots= ["jeu","clafoutis","pendrie","magenta","verbale","savoureux","entier",];

//    var secret = mots[Math.floor(Math.random()*mots.length)];
    var lettre= getElementsByClassName('alphabet').value;
    function choix(lettre) {
        console.log(lettre);
       var erreur = 0 ;
        while(erreur<11){
            var i = 0;
            foreach(i=0 ; i<secret.length ; i++) {
                if (lettre===secret[i]){
                    console.log("ok");
                }
                else {
                    erreur++;
                }
            }
        }*/
    }
    choix(lettre);
//}
//jeu();
