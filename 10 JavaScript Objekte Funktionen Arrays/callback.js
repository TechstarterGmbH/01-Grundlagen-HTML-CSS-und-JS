/**
 * Verrechnet zwei Werte entsprechend der übergebene Funktion
 * @param {number} v1 
 * @param {number} v2 
 * @param {funktion} fkn 
 */
function rechne(v1,v2,fkn){
    console.log("Aufruf: " + fkn.name)
    fkn(v1,v2)
}

let test = mulitipliziere

// Aufruf der rechne Funktion
rechne (5,7, addiere) // => 12
rechne (5,7, subtrahiere) // => -2
rechne (5,7, mulitipliziere) // => 35
rechne (5,7, test) // => 35
rechne (5,7, (v1,v2)=>{console.log(v1/v2)}) // => 5/7
rechne (5,7, function (v1,v2){console.log(v1/v2)}) // => 5/7

// Das sind unsere Callbacks. Sie werden über die Funktion rechne aufgerufen
function addiere (v1,v2){ console.log ((v1+v2)) }
function subtrahiere (v1,v2){ console.log ((v1-v2)) }
function mulitipliziere (v1,v2){ console.log ((v1*v2)) }

summe(2,4,5,6,7,8,9, "servus", true, {name:"ingo"})
function summe( ... arr){
    //console.log(v1,  v2)
    console.log("Anzahl Summanden:\t" + arr.length)
    console.log( arr.constructor.name)
}




// // Nur zum Ausprobieren ob die drei Funktionieren auch wie erhofft funktionieren
// addiere(5,6) // => 11
// subtrahiere(5,6) // => -1
// mulitipliziere(5,6) // => 30