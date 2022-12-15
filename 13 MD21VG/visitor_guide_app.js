import { Objekt21, machwas } from './modules/Objekt21.js';
import { logger21 } from './modules/logger.js';

// Test Stephan
const C = console.log.bind(console);


//Beispiel für den import einer Funktion
machwas()


//Der Visitor Guide beseteht derzeit aus einem einzelnen Map-Objekt
let vg = new Map()

/**
 * Vorgehen
 */
// 1. Daten müssen in den Visitor Guide geladen werden
// 2. Daten müssen (vor-) verarbeitet werden
// 3. Website muss erstellt
// 4. Daten auf der Website darstellen



/**
 * Start: Daten aus JSON Datei einlesen
 */

// Variante 1: Mit Arrow Schreibweise, kuerzer
//fetch("./data/objekt21-data.json")
//     .then((response) => response.json())
//     .then((data) => console.log("FETCH Daten mit Arrowschreibweise: " + data.name));


// Variante 2, Ohne Arrow Schreibweise, ausfuhrlicher
let responseFunc = function (response) {
    return response.json()
}

let dataFunc = function (data){
    // console.log("FETCH Daten mit Callback Funktionen: " + data.name)
    // logger21.log(data.objektID)
    // logger21.log(data.name)
    // logger21.log(data.langbeschreibung)
    // logger21.log(data.urheber)


    for (let index = 0; index < data.length; index++){
        let o = new Objekt21(data[index])
        vg.set(o.objektID,o);
        logger21.log(o.objektID)
    }
    console.log(vg)
    console.log(vg.size)

    // let o21 = new Objekt21(data[0])
    // logger21.log(o21.objektID)

    // o21 = new Objekt21(data[1])
    // logger21.log(o21.objektID)

    // console.log("data: " + typeof(data))
    // console.log("o21: " + typeof(o21))
    
    // o21.getAehnlicheObjekte();
}

fetch("./data/objekt21-data.json").then(responseFunc).then(dataFunc);


vg.set("O23KE", new Objekt21())
console.log ( "MAP" + vg.get("O23KE").name)


<<<<<<< Updated upstream
//logger21.log("check");
=======



// Variante 3: Fetch Aufruf mit await
const fetchRueckgabe = await fetch("./data/objekt21-data.json")
console.log ("status " + fetchRueckgabe.status)
console.log ("status Text " + fetchRueckgabe.statusText)
console.log ("type" + fetchRueckgabe.type)
console.log (fetchRueckgabe.headers)
console.log (fetchRueckgabe.url)

let museumsDatenAlsJson = await fetchRueckgabe.json();
console.log ("json: " + museumsDatenAlsJson[0].objektID)

let o21 = new Objekt21(museumsDatenAlsJson[0])
console.log(" Fetch mit Awsait: "  + o21.objektID);
>>>>>>> Stashed changes
