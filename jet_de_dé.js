var oldNumber=0;

//function essai{
    function jet(){
        var nombre = Math.ceil(Math.random()*6);
        console.log(nombre);
        if(nombre>oldNumber){
            console.log("joueur2 gagne");
        }
        else if (nombre===oldNumber) {
            console.log("égalité");
        }
        else{
            console.log("joueur1 gagne");
        }
        oldNumber = nombre;
    }
