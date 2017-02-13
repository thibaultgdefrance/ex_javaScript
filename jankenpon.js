function jankenpon() {
    var possibilité =["pierre","feuille","ciseaux"];
    var choix = document.getElementById("choix").value;
    var choixOrdi = Math.round(Math.random()*possibilité.length);
    if (choix==0){
        if (choixOrdi==0){
            console.log("égalité");
        }
        else if (choixOrdi==1) {
            console.log("perdu");
        }
        else{
            console.log("gagné");
        }
    }
    if (choix==1){
        if (choixOrdi==0){
            console.log("gagné");
        }
        else if (choixOrdi==1) {
            console.log("égalité");
        }
        else{
            console.log("perdu");
        }
    }
    if (choix==2){
        if (choixOrdi==0){
            console.log("perdu");
        }
        else if (choixOrdi==1) {
            console.log("gagné");
        }
        else{
            console.log("égalité");
        }
    }
}
