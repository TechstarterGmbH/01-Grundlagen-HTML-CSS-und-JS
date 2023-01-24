// Ziel: Über die Funktion zeichneMuster wird auf der Konsole ein Muster bestehnd aus Sternen und Strichen ausgegeben.
// 1. Die erste ausgabe lautet "START MUSTER" 
// 2. Eine Schleife wird 15 Mal durchlaufen nd zeichnet das Muster. 
// 3. Die letzte Zeile lautet "ENDE MUSTER"
// Fehler: Das Muster wird falsch ausgegeben
/** Beispiel des Musters. So sollte es sein
 * 
    STARTE MUSTER
    * -
    ** --
    *** ---
    **** ----
    ***** -----
    ****** ------
    ******* -------
    ******** --------
    ********* ---------
    ********** ----------
    *********** -----------
    ************ ------------
    ************* -------------
    ************** --------------
    ENDE MUSETR
*/


let stern = ("*")
let strich = ("-")

// Zeichnet ein Muster (Pattern) bestehend aus den Paramtern p1 und p2
let zeichneMuster = (p1, p2) => {
    count = 15
    
    for (let i = 1; i < count+1 ;i++){
        if(i==1);
            //Hier Ausgabe start
            console.log("STARTE MUSTER")
        
        console.log(p1.repeat(i) + " " + p2.repeat(i))
        if(i==count ) console.log("ENDE MUSTER")
    }
}
zeichneMuster(stern, strich)