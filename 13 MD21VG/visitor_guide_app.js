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

// Variante 3: Fetch Aufruf mit await
// const fetchRueckgabe = await fetch("./data/objekt21-data.json")
// let o21_json = await fetchRueckgabe.json();
// for (let index = 0; index < o21_json.length; index++){
//     let o = new Objekt21(o21_json[index], Objekt21.Option.SINGLE_OBJEKT21)
//     vg.set(o.objektID,o);
//     logger21.log(o.objektID)
// }

const o21Map = await Objekt21.CreateO21Map("./data/objekt21-data.json")
console.log("Anzahl: " + o21Map.size);




// let o21 = new Objekt21(o21_json[0])
// console.log(" Fetch mit Awsait: "  + o21.objektID);

// // Variante 2, Ohne Arrow Schreibweise, ausfuhrlicher
// let responseFunc = function (response) {
//     return response.json()
// }

// let dataFunc = function (data){

//     for (let index = 0; index < data.length; index++){
//         let o = new Objekt21(data[index])
//         vg.set(o.objektID,o);
//         logger21.log(o.objektID)
//     }
//     console.log(vg)
//     console.log(vg.size)
// }

// fetch("./data/objekt21-data.json").then(responseFunc).then(dataFunc);



// console.log ( "MAP" + vg.get("O23KE").name)






