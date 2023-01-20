// 1. Ein Objekt über die Literal Schreibweise erstellen
let fahrrad = {marke: "Kettler", modell: "Mountainbike", gekauft:"2020"}

// 2. Ein Objekt über Object erstellen
let auto = new Object();
auto.marke = "vw"
auto.modell = "golf"
auto.baujahr = 2010

// 3. Ein Objekt über Kontruktormethode erstellen
function Fahrzeug(marke, modell, baujahr){
    this.marke = marke
    this.modell = modell
    this.baujahr = baujahr
} 

let f1 = new Fahrzeug("renault", "kangoo", "2016")
let f2 = new Fahrzeug("Opel", "Corsa", "2019")
let f3 = new Fahrzeug("Toyota", "Auris", "2017")

console.log ("PRÜFUNG: Von welchem Typ ist auto? \t" + typeof auto)
console.log ("PRÜFUNG: Von welchem Typ ist f1? \t" + typeof f1)

console.log ("PRÜFUNG: Konstruktor von 'auto': " + auto.constructor.name)
console.log ("PRÜFUNG: Konstruktor von 'f1': " + f1.constructor.name)
console.log ("PRÜFUNG: Ist auto vom Typ Object? \t" + (auto instanceof Object))
console.log ("PRÜFUNG: Ist marke in auto enthalten?\t" + ('marke' in auto))
delete auto.marke
delete f1.marke
console.log ("PRÜFUNG: Ist marke in auto enthalten?\t" + ('marke' in auto))
console.log(auto.marke);


//Frage: Wie kann man das property für alle löschen?
delete Fahrzeug.marke

let f4 = new Fahrzeug("seat", "arosa",1998)
console.log ("PRÜFUNG: Von welchem Typ ist die 'Variable'? \t" + typeof Fahrzeug)
console.log ("PRÜFUNG: Von welchem Typ ist die 'Variable? \t" + typeof 77)
console.log ("PRÜFUNG: Von welchem Typ ist die 'Variable? \t" + typeof true)
console.log ("PRÜFUNG: Von welchem Typ ist die 'Variable? \t" + typeof "Pause")
console.log ("ENDE PRÜFUNG\t")



/**
 * ENTWURF
 */



// function check(propTocheck, varToCheck, TypeToCheckAgain){
//     console.log (`PRÜFUNG: Von welchem Typ ist ${varToCheck} ? \t` + typeof varToCheck)
//     console.log (`PRÜFUNG: Ist ${varToCheck.constructor.name} vom Typ Object? \t` + (varToCheck instanceof TypeToCheckAgain))
//     console.log (`PRÜFUNG: Ist ${propTocheck} in ${varToCheck} enthalten?\t` + (propTocheck in varToCheck))
// }
// check ("marke", f1, Fahrzeug)
// check ("gekauft", fahrrad, Fahrzeug)
