const c = console.log.bind(console);


// "reguläre" Funktionsschreibweise
function addiere (summand1, summand2){
    console.log (summand1+summand2)
}

addiere("5","7")

// der Variable meineVariable wird eine Funktion zugewiesen, 
// die dann später aufgerufen werden kann
let meineVariable = addiere

meineVariable(3,4)
console.log(typeof addiere)
console.log(typeof meineVariable)

// Eine annonyme Funktion
let meinVariable2 = function (summand1, summand2){
    console.log (summand1+summand2)
}
meinVariable2(10,7)

// Funktion in Arrow Schreibweise
let meinVariable3 = (s1, s2) => {console.log (s1+s2)}

// Funktionen als Parameter
function meineAllesFunktion(funktionsname){
    funktionsname(12,1);
}
// unterschiedliche "Funktions-Variablen" werden übergeben
// meineAllesFunktion("einText") // FEHLER => is not a function
meineAllesFunktion(addiere)
meineAllesFunktion((v1, v2 )=>{console.log(v1-v2)} )
meineAllesFunktion(()=>{console.log("hallo")} )


// funktion mit primitiven Datentype
function schreibeAufdieConsole(NAchricht){
    console.log(NAchricht)
}
schreibeAufdieConsole("hallo")

function zaehleEinsHoch(zahl){
    let z = zahl;
    z++;
    zahl++

    console.log (z)
    console.log (zahl)
}
let zahl = 7
zaehleEinsHoch(zahl)
console.log (zahl)

// Funktion mit kompleren Datentyp
let meinObj = { name:"ingo" }
function aendereObj(ObjZumAendern){
    ObjZumAendern.name = "kein Name"
}
// Man muss so eine Funktion auch aufrufen :-) 
console.log(meinObj)
aendereObj(meinObj)
c (meinObj)