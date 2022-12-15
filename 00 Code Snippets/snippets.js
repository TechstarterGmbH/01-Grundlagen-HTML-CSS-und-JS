
/***
 *     _____  ___    ___    _     ___               _            _                   _                                          
 *    (  _  )(  _`\ (  _`\ (_)   (  _`\            ( )          ( )                 ( )_  _                                     
 *    | (_) || (_(_)| ( (_)| |   | ( (_)   _      _| |   __     | |_      __    ___ | ,_)(_)  ___ ___    ___ ___     __    ___  
 *    |  _  |`\__ \ | |  _ | |   | |  _  /'_`\  /'_` | /'__`\   | '_`\  /'__`\/',__)| |  | |/' _ ` _ `\/' _ ` _ `\ /'__`\/' _ `\
 *    | | | |( )_) || (_( )| |   | (_( )( (_) )( (_| |(  ___/   | |_) )(  ___/\__, \| |_ | || ( ) ( ) || ( ) ( ) |(  ___/| ( ) |
 *    (_) (_)`\____)(____/'(_)   (____/'`\___/'`\__,_)`\____)   (_,__/'`\____)(____/`\__)(_)(_) (_) (_)(_) (_) (_)`\____)(_) (_)
 *                                                                                                                              
 *                                                                                                                              
 */
// Anhand eines Buchstabens wird der ASCII-Wert bestimmt
const dasZeichen ="A"
const result = dasZeichen.charCodeAt(0);
console.log(`Der ASCII-Wert für ${dasZeichen} lautet: ${result}`);

//Anahnd des ASCII-Dezimalcodes wird das Zeichen ausgegben
console.log(String.fromCharCode(44))





/***
 *     _____  ___    _____  _   _     ___              _                              
 *    (___  )(  _`\ (  _  )( ) ( )   (  _`\  _        (_ )                            
 *        | || (_(_)| ( ) || `\| |   | (_(_)(_)  ___   | |    __    ___    __    ___  
 *     _  | |`\__ \ | | | || , ` |   |  _)_ | |/' _ `\ | |  /'__`\/',__) /'__`\/' _ `\
 *    ( )_| |( )_) || (_) || |`\ |   | (_( )| || ( ) | | | (  ___/\__, \(  ___/| ( ) |
 *    `\___/'`\____)(_____)(_) (_)   (____/'(_)(_) (_)(___)`\____)(____/`\____)(_) (_)
 *                                                                                    
 *                                                                                    
 */
// Variante 1: Mit Arrow Schreibweise, kuerzer
fetch("./data/objekt21-data.json")
    .then((response) => response.json())
    .then((data) => console.log("FETCH Daten mit Arrowschreibweise: " + data.name));


// Variante 2, Ohne Arrow Schreibweise, ausfuhrlicher
let responseFunc = function (response) {
    return response.json()
}

let dataFunc = function (data){
    // Einlesen einer Datei mit nur einem Objekt
    // console.log("FETCH Daten mit Callback Funktionen: " + data.name)
    // logger21.log(data.objektID)
    // logger21.log(data.name)
    // logger21.log(data.langbeschreibung)
    // logger21.log(data.urheber)

    
    // Einlesen einer Datei mit mehreren Objekten und Instanziierung mittels Klassen Constructor
    // let o21 = new Objekt21(data[0])
    // logger21.log(o21.objektID)

    // o21 = new Objekt21(data[1])
    // logger21.log(o21.objektID)

    // console.log("data: " + typeof(data))
    // console.log("o21: " + typeof(o21))
    
    // o21.getAehnlicheObjekte();

    // Einlesen einer beliebig Anzahl von Objekten und Instanziierung
    for (let index = 0; index < data.length; index++){
        let o = new Objekt21(data[index])
        vg.set(o.objektID,o);
        logger21.log(o.objektID)
    }
    console.log(vg)
    console.log(vg.size)
}

// Aufruf der Fetch-Funktion unter Verwendng von "then"
fetch("./data/objekt21-data.json").then(responseFunc).then(dataFunc);



// Variante 3: Fetch Aufruf mit await
// Neben den eingelesenen Daten liefert fetch auch Informationen zur Verbindung.
const fetchRueckgabe = await fetch("./data/objekt21-data.json")
console.log ("status " + fetchRueckgabe.status)
console.log ("status Text " + fetchRueckgabe.statusText)
console.log ("type" + fetchRueckgabe.type)
console.log (fetchRueckgabe.headers)
console.log (fetchRueckgabe.url)

let museumsDatenAlsJson = await fetchRueckgabe.json();
console.log ("json: " + museumsDatenAlsJson[0].objektID)

let o21 = new Objekt21(museumsDatenAlsJson[0])
console.log(" Fetch mit Await: "  + o21.objektID);
