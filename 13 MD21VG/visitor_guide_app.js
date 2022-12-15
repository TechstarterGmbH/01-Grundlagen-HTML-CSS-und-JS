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
 * Start:   Daten aus JSON Datei einlesen und Liste von Objekten 
 *          (in Form einer Map) anlegen
 */
const o21Map = await Objekt21.CreateO21Map("./data/objekt21-data.json")
console.log("Anzahl: " + o21Map.size);
