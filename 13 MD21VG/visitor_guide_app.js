import { Objekt21, machwas } from './modules/Objekt21.js';
import { logger21 } from './modules/logger.js';

// Damit wir weniger oft console.log schreiben müssen. Thx @Stephan :-)
const C = console.log.bind(console);

// Nachfolgende Funktion machwas() ist ein Beispiel für den import einer Funktion.
// Sie ist NICHT Teil des Visitor Guides!
// machwas()


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
//document.getElementById("btn_find_Objektliste").addEventListener("click", find_o21_list);
document.getElementById("btn_find_Objektliste").addEventListener("click", show_all_O21_items);
document.getElementById("btn_find_Objektliste_Desktop").addEventListener("click", show_all_O21_items);

/**
 * Anhand eine Objekt ID wird ein einzelnes Objekt gesucht. 
 * Die ID muss eindeutig sein. Eine Ähnlichkeitssucher oder Empfehlung 
 * wird nicht durchgeführt
 */
function find_o21(){
    // Wir brauchen das Listenelemt der HTML-Seite, in die später die 
    // Inhalte eingefuegt werden.
    let searchList = create_SearchList_element();

    // Die Eingabe des Nutzers abfragen und prüfen
    let o21_objekt_id = getO21ID_from_userinput("O21-Suche")
      
    // HTML Felder für ein O21 Objekt vorbereiten 
    const o21_html_element = document.createElement("div");
    o21_html_element.setAttribute("class","col s8 offset-s2");

    let o21 = VG21.get(o21_objekt_id)
    if (o21 != undefined){   
        createHTMLElements(o21, o21_html_element);
    }
    else {
        // Alternativ zum Erstellen von Elementen mittels document.createElement 
        // kann auch direkt HTML-Code übergeben werden
        const ob21_falscher_code = `<h2> Schade :-)</h2> <p>Zu diesem Objekt haben wir leider keine Daten.<br/> Hast du Dich vielleicht vertippt?</p>`
        o21_html_element.innerHTML = ob21_falscher_code;
    }

    // Das gerade erstellte Objekt 21 Element für die Suchliste hinzugefügt
    searchList.appendChild(o21_html_element);

    // Die Liste der Elemente wird der Ergebnis-Liste hinzugefügt
    document.getElementById("search_results").appendChild(searchList);
}

/**
 * Nicht schön aber praktikabel wird für jedes O21-Objekt ein HTML Template angelegt
 */
function show_all_O21_items(){
    
    let o21_list = create_SearchList_element();
    //Wir fragen das Element ab, in das alle gefunden Objekte eingetragen werden sollen
    let results = document.getElementById("search_results")
    results.innerHTML="";
    
    // Ein Index, um zu zaehlen wieviele Elemente in einer Zeile sind
    let itemCounter = 1;
    let tempResults =""
   
    // Für jedes Element im Visitor Guide
    for (const [o21id, o21] of VG21) {

        const o21_item = document.createElement("div");
        o21_item.setAttribute("id",o21.objektID )
        o21_item.setAttribute("class", "col s12 m4")      
        
        let html_Template =  
            `<div class="card">
                <div class="card-image">
                    <img id="${o21.objektID}_card_img" src="${o21.bild}">
                    <span id="${o21.objektID}_card_title" class="card-title">${o21.name}</span>
                </div>
                <div class="card-content">
                    <h2 id="${o21.objektID}_card_header">${o21.name}</h2>
                    <p id="${o21.objektID}_card_fullDescription">${o21.langbeschreibung}</p>
                    <p>${o21.urheber}</p>
                    <p>${o21.bereitstellendeInstitution}</p>
                </div>
                <div class="card-action">
                    <a href="#">Der Link zu dem Objekt</a>
                </div>
            </div>`     
        
        o21_item.innerHTML = html_Template
    
        // Das erstellte Objekt wird der Objektliste hinzugefügt
        o21_list.appendChild(o21_item)

        if (itemCounter == 1){
            // Noch ist die Liste leer, dennoch können wir diese bereits der Ergbnisliste hinzufuegen und in den weiteren Iterationen befüllen 
            //results.appendChild(o21_list);
            
        } else if ((itemCounter % 3) == 0){
            // o21_list = o21_list.cloneNode();
            // o21_list.id =  o21_list.id +"_"+ itemCounter
            // o21_list.innerHTML = "";

            // tempResults = document.createElement("div");
            // tempResults.setAttribute("id", "search_results_");
            // tempResults.setAttribute("class", "row");
            // tempResults.appendChild(o21_list);
            // // das in den letztn drei Iterationen gefuellte Liste wird NACH der bereits vorhandenen Liste im HTML Dokument eingefügt
            // results.after(tempResults);

            // die aktuelle Ergbnissliste wird fuer die nächste drei Iterationen in der vorherigen Liste gepsiechert
            //results = tempResults
        }else{

        }

        itemCounter++
    }
    // Die Liste der Elemente wird dem "Ergebniselement" hinzugefügt
    document.getElementById("search_results").appendChild(o21_list);
}



/**
 * Prüft ob das HTML Element search_list bereits existiert. Wenn Nein wird 
 * das Element erstellt, sonst wird die bereits vorhandene Liste zurück gegeben
 * @returns Das HTMLElement "search_list", das die Inhalte der aufnehmen soll
 */
function create_SearchList_element() {
    // zunaechst pruefen wir ob unsere Erbenisliste bereits existiert
    let searchList = document.getElementById("search_list");
    if (searchList == null) {
        // Wenn NEIN dann legen wir die Ergebnissliste an.
        searchList = document.createElement("div");
        searchList.setAttribute("id", "search_list");
        searchList.setAttribute("class", "col s12 center-align");

        //Die Überschrift kann jetzt etwas kleiner ausfallen
        smallerHeader();
    }
    else {
        // an der Stelle koennen wir Inhalte loeschen, 
        // die aus vorherigen Suchen noch sichtbar sind.
        searchList.innerHTML = "";
        document.getElementById("search_results").innerHTML="";
    }
    return searchList;
}

/**
 * Trimmt (=> Leerzeichen werden entfernt) den Eingangswert und wandelt alle 
 * Zeichen in Großbuchstaben um.
 * @param {*} htmlInputId: ID des HTML Elements, dessen value verwendet werden soll 
 * @returns liefert einen String in Großbuchstaben OHNE Leerzeichen am Anfang oder am Ende
 */
function getO21ID_from_userinput(htmlInputId = "O21-Suche") {
     /**
     * 1. Länge soll max 5 sein
     * 2. Erster Buchstabe muss A (=> Ausstellung), O (=> Objekt) oder S(=> Sammlung) sein
     * 3. Es dürfen nur Buchstaben A-Z sowie Zahlen 0-9 enthalten sein
     * 4. Trimmen => führendes Leerzeichen und Leerzeichen am Ende entfernen
     * 5. Alles Großbuchstaben => upper
     **/ 

    // 0. String "aufräumen" => Keine Leerzeichen, nur Großbuchstaben
    let userinput = String(document.getElementById(htmlInputId).value);
    let o21_id = userinput.trim();
    o21_id = o21_id.toUpperCase();

    // 1. Check: eine ID kann max. 5 lang sein
    const DEFAULT_ID_LENGTH = 5
    if(o21_id.length == DEFAULT_ID_LENGTH) {
        //super, so muss das sein
        if(o21_id.charAt(0) == "O" || 
            o21_id.charAt(0) == "A" ||
            o21_id.charAt(0) == "S"){
                // alles super
            }
        else {
            C ("VALIDIERUNG: ID ist nicht wohlgefomrt: " + o21_id)
        }
    }else if (o21_id.length < DEFAULT_ID_LENGTH){
        // das ist keine gültige ID
        C ("VALIDIERUNG: ID ungueltig. zu kurz : " + o21_id)
    }else if (o21_id.length > DEFAULT_ID_LENGTH){
        // das ist keine gültige ID
        C ("VALIDIERUNG: ID ungueltig. zu lang : " + o21_id)
    }else{
        // Dieser Bereich kann eigentlich nicht erreicht werden
        // Was muss geschehen, damit diexer Code erreicht wird?
    }

    return o21_id
}

function createHTMLElements(o21, o21_html_element) {
    const ob21_bild_item = document.createElement("img");
    ob21_bild_item.setAttribute ("id", o21.objektID + "_single_view")
    ob21_bild_item.setAttribute("src", o21.bild)
    ob21_bild_item.setAttribute("class", "responsive-img")

    const ob21_name_item = document.createElement("h2");
    ob21_name_item.innerText = o21.name;

    const ob21_id_item = document.createElement("p");
    ob21_id_item.innerText = o21.objektID;

    const ob21_langbeschreibung_item = document.createElement("p");
    ob21_langbeschreibung_item.innerHTML = "<p><b>LANGBESCHREIBUNG:</b></p><p>" + o21.langbeschreibung + "</p>";

    const ob21_untertitel_item = document.createElement("p");
    ob21_untertitel_item.innerText = "untertitel:" + o21.untertitel;

    const ob21_kurzbeschreibung_item = document.createElement("p");
    ob21_kurzbeschreibung_item.innerText = "kurzbeschreibung:" + o21.kurzbeschreibung;

    const ob21_bereitstellendeInstitution_item = document.createElement("p");
    ob21_bereitstellendeInstitution_item.innerText = "bereitstellendeInstitution:" + o21.bereitstellendeInstitution;

    const ob21_urheber_item = document.createElement("p");
    ob21_urheber_item.innerText = "urheber:" + o21.urheber;

    const ob21_eigentuemer_item = document.createElement("p");
    ob21_eigentuemer_item.innerText = "eigentuemer:" + o21.eigentuemer;

    const ob21_artDesObjekts_item = document.createElement("p");
    ob21_artDesObjekts_item.innerText = "artDesObjekts:" + o21.artDesObjekts;

    const ob21_audiodeskription_item = document.createElement("p");
    ob21_audiodeskription_item.innerText = "audiodeskription:" + o21.audiodeskription;

    // Alle Felder dem o21 Element hinzufügen
    o21_html_element.append(ob21_bild_item);
    o21_html_element.append(ob21_name_item);
    o21_html_element.append(ob21_id_item);
    o21_html_element.append(ob21_untertitel_item);
    o21_html_element.append(ob21_kurzbeschreibung_item);
    o21_html_element.append(ob21_langbeschreibung_item);
    o21_html_element.append(ob21_bereitstellendeInstitution_item);
    o21_html_element.append(ob21_urheber_item);
    o21_html_element.append(ob21_eigentuemer_item);
    o21_html_element.append(ob21_artDesObjekts_item);
    o21_html_element.append(ob21_audiodeskription_item);
}

// nur ein wenig Kosmetik, damit die Überschrift nicht so präsent ist
function smallerHeader(){
     //Die Überschrift soll kleiner sein => css class hinzufuegen / entfernen
     let element = document.getElementById("main-h1-header")
     element.classList.toggle("smaller-h1-header");
     element.classList.toggle("col");
     element.classList.toggle("s5");
     element.classList.toggle("offset-s3");
}



// TODO: In der Form funktioniet das nicht. Das Clonen der Knoten ist möglich, 
// danach ist der Zugriff auf Elemente des Knoten jedoch sehr umständlich. 
// Daher wird die Funktion derzeit nicht verwendet. 
// NUR ZUR ANSICHT 
function find_o21_list(){
alert("")
    // HTML Elemente abrufen
    const o21_list = document.getElementById("o21_list");
    const html_template = document.getElementById("o21_html_template");

    // Für jedes Element im Visitor Guide
    for (const [o21id, o21] of VG21) {
        //console.log(`${o21id} = ${o21}`);
        const clone = html_template.cloneNode(true);
        
       
        if(o21_list.classList.contains("hide") == true){
            // Wenn Das Element unsichtbar ist, ist dies der erste Aufruf.
            o21_list.classList.remove("hide")
            // => also erstmal das Template löschen
            o21_list.innerHTML=""
        }
        else {
            // Nichts zu tun
        }
        // let item = clone.getElementById("card_title")
        // item.innerText = o21.name
        
        
        clone.id = o21.objektID;
        //clone.childNodes[1].childNodes[4].innerHTML=021.langbeschreibung
        //clone.getElementById("card_title").innerHTML = o21.name
        // clone.getElementById("card_header").innerText = o21.name
        // clone.getElementById("card_fullDescription").innerText = o21.langbeschreibung
        // Egal ob beim ersten oder einem spaeteren Aufruf es wird das geclonte Objekte hinzugefügt
        o21_list.appendChild(clone)
        // let element = document.getElementById(o21.objektID)
        // element.getElementById("card_title").innerText = o21.name
    }
}



