
function tirage() {
    var choix=document.getElementById("liste").value;
    var possibilité = ["pile","face"];

    var cotès = possibilité[Math.round(Math.random())];
    if (cotès===choix){
        console.log("gagné");
    }
    else {
        console.log("perdu");
    }
}
