import { Objekt21, machwas } from './modules/Objekt21.js';
import { logger21 } from './modules/logger.js';

// Damit wir weniger oft console.log schreiben müssen. Thx @Stephan :-)
const C = console.log.bind(console);

// Das ist ein Beispiel für den import einer Funktion.
// Es ist NICHT Teil des Visitor Guides!
machwas()


// Der Visitor Guide beseteht derzeit aus einem einzelnen Map-Objekt
let VG21 = new Map()

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
C ("Anzahl: " + o21Map.size);

// Derzeit koennen wir die o21 Map dem Visitor Guide direkt zuweisen.
// Sobald aber auch Sammlungen und Ausstellungen existieren geht das in der Form nicht mehr
VG21 = o21Map


/**
 * Event Listener registrieren
 */
document.getElementById("btn_find_object").addEventListener("click", find_o21);


function find_o21(){
    // Wir brauchen eine Liste, in die später die Inhalte eingefuegt werden
    // zunaechst pruefen wir ob unsere Erbenisliste bereits existiert
    let searchList = document.getElementById("search_list");
    if(searchList == null){
        // Wenn NEIN dann legen wir die Ergebnissliste an.
        searchList = document.createElement("div");
        searchList.setAttribute("id","search_list");
        searchList.setAttribute("class","col s12 center-align");

        //Die Überschrift kann jetzt etwas kleiner ausfallen
        smallerHeader();
    }
    else{
        // an der Stelle koennen wir Inhalte loeschen, 
        // die aus vorherigen Suchen noch sichtbar sind.
        searchList.innerHTML="";
    }

   
    //Die Eingabe des Nutzers abfragen
    let userinput = document.getElementById("O21-Suche")
    /**
     * TODO Eingabe des Nutzer prüfen
     * 1. Länge soll max 5 sein
     * 2. Erster Buchstabe muss A (=> Ausstellung), O (=> Objekt) oder S(=> Sammlung) sein
     *  */ 

    //nur zum Prüfen wieviele Elemente geladen wurden    
    C ("Anzahl der VG21 Objekte: " + VG21.size)
    
    let o21 = VG21.get(userinput.value)

    // HTML Felder für ein O21 Objekt vorbereiten 
    const o21_html_element = document.createElement("div");

    const ob21_name_item = document.createElement("h2")
    ob21_name_item.innerText = o21.name;
    
    const ob21_id_item = document.createElement("p")
    ob21_id_item.innerText=o21.objektID;

    const ob21_langbeschreibung_item = document.createElement("p")
    ob21_langbeschreibung_item.innerText="LANGBESCHREIBUNG:" + o21.langbeschreibung;
    
    

    // Alle Felder dem o21 Element hinzufügen
    o21_html_element.append(ob21_name_item);
    o21_html_element.append(ob21_id_item);
    o21_html_element.append(ob21_langbeschreibung_item);
    

    searchList.appendChild(o21_html_element);



  

    document.getElementById("search_results").appendChild(searchList);


}

// nur ein wenig Kosmetig, damit die Überschrift nicht so präsent ist
function smallerHeader(){
     //Die Überschrift soll weniger praesent sein => css class hinzufuegen / entfernen
     let element = document.getElementById("main-h1-header")
     element.classList.toggle("smaller-h1-header");
     element.classList.toggle("col");
     element.classList.toggle("s5");
     element.classList.toggle("offset-s3");

}