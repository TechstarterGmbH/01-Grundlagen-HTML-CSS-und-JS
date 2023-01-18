/**
 * Ü9 Funktionen
 * Manuel Fischer
 * 18.01.2023
 * https://classroom.google.com/u/3/c/NTU3MzQ4MTE3NjM4/a/NTg0MDAyNDEwMjMx/details
 */

let t = "*"

/**
 * 1. Schreibe eine Subtrahier-Methode mit zwei Argumenten. Subtrahiere das erste 
 * Argument vom zweiten. Liefere das Ergebnis an den Aufrufer zurück
 */
console.log(t.repeat(80) + "\nAUFGABE 1")
function subtrahiere(wert1, wert2){
    return (wert2 - wert1)
}
let ergebnis = subtrahiere(10,27)
console.log(`Das Ergebis lautet: ${ergebnis}`)





/**
 * 2. Schreibe eine anonyme Methode, die über die Variable zufall aufgerufen 
 * werden kann und eine Zufallszahl im Bereich von 0 bis 1 auf der Konsole ausgibt
 */
console.log(t.repeat(80) + "\nAUFGABE 2")
let zufall = function(){ 
    // Eine ganzzahlige Zufallszahl im Bereich von 0 bis 99
    let z = Math.floor((Math.random() * 100) % 100)
    console.log(`Aktuelle Zufallszahhl: ${z}` )
}
zufall ();

{{{}}}



/**
 * 3. Erstelle das Objekt:  Kind {name: "inga", alter:12}. Übergebe dieses Objekt 
 * an die Funktion Geburtstag. Bei Aufruf der Funktion wird Happy Birthday Inga 
 * auf der Konsole ausgegeben und das Alter ist um eins erhöht.
 */
console.log(t.repeat(80) + "\nAUFGABE 3")
let kind = {name: "inga", alter:12}
function geburstag(Geburtstagskind){
    //Prüfung ob das übergeben Objekt wirklich die erforderlichen Properties enthällt
    if(('name' in Geburtstagskind) && ('alter' in Geburtstagskind)){
        Geburtstagskind.alter++
        console.log(`Happy Birtday ${Geburtstagskind.name}`)
    }else {
        console.log("Das ist ja gar kein Geburstagskind :-(")
    }    
}

geburstag(kind)
console.log(kind);

//Erweiterung, wenn das übergeben Objekt kein Kind ist
console.log("\nPrüfung ob auch die Prüfung richtig erkannt wird")
let keinKind = {} // leeres Objekt anlegn und übergeben
geburstag(keinKind)

console.log("\nEnde der Übung\n")