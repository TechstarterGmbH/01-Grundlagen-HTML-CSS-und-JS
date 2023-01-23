let fs = require ("fs")
let os = require("os")



// Daten von einer belibigen Datein einlesen
fs.readFile("data.ini", callThisFunction)

function callThisFunction (err, data){
    // Die Funktion liest die Daten aus der Datei ein und liefert ein
    // Buffer Objekt: https://nodejs.org/api/buffer.html#buffers-and-character-encodings
    console.log(data)

    // Damit die daten lesbar werden muss das "Kodierung" angegben werden
    // z.B utf 8
    console.log(data.toString('utf8'))
}





// Daten aus einer JSON Datei einlesen
fs.readFile("filme.json", (err, data)=>{
    console.log(data)
    let filme = JSON.parse(data)
    console.log(filme)
    let film = filme[0]
    console.log(film.Actors)
})







// Daten aus einer CSV Datein einlesen und in JSON Objekt umwandeln
fs.readFile("bundeslaender.csv", (err, data)=>{
    // Daten zunächste zeilenweise speichern
    let bundeslaender_line_arr = data.toString('utf8').split("\n")

    // Die erste Zeile sind die Ueberschriften. diese etwas aufbereiten
    // 1. shift: Entfernt die erste Zeile und liefert sie zurück. Das sind die Überschriften
    // 2. trim: entfernt Leerzeichen vor oder nach dem String
    // 2. split: Trennt die Werte und liefert ein Array zurück. Als Trennzeichen dient das Semikolen
    let header_line = bundeslaender_line_arr.shift().trim().split(";")

    let bundelander = new Array()
    //Die Liste der Bundeslaender zeilenweise durchgehen
    for (let i=0; i<bundeslaender_line_arr.length; i++){
        // Wie bei der Ueberschriftenzeile zunächste störende Leerezeichen entfernen
        // die aktuelle Zeile abfragen, als Trennzeichen wird das Semikolon verwendet
        let curLine = bundeslaender_line_arr[i].trim().split(";")

        // Innerhalb der Zeile sind die Positionen der Werte fest
        let name = curLine[0]
        let hauptstadt = curLine[1]
        let einwohner_anzahl = curLine[2]
        let flaeche = curLine[3]
        bundelander.push(new Bundesland (name, hauptstadt, einwohner_anzahl, flaeche))
    }

    console.table(bundelander, header_line)







    //Schreiben von 

    //JSON Objekt speichern
    erstelle_neue_datei("bundeslaender_erstellt.json",JSON.stringify(bundelander))

    //Daten in eine bestehende Datei hinzufügen
    
    let datei_name= "meine-log-datei.txt"
    ergaenze_daten(datei_name, "Eintrag für die erste Zeile")
    ergaenze_daten(datei_name, "Eintrag für die zweite Zeile")
    ergaenze_daten(datei_name, "Eintrag für die dritte Zeile")
})

// Kontruktorfunktion
/**
 * Erstellt ein "Bundesland-Objekt"
 * @param {*} name (string) Name des Bundeslands
 * @param {*} hauptstadt (string) Name der Hauptstadt
 * @param {*} einwohner_anzahl (string) Anzahl der einwohner in Mio
 * @param {*} flaeche  (number) Fläche des Bundeslandes in km²
 */
function Bundesland (name, hauptstadt, einwohner_anzahl, flaeche){
    this.Name = name
    this.Hauptstadt= hauptstadt
    this.Einwohner=einwohner_anzahl
    this.Flaeche = flaeche
}





/// Daten in eine Datei schreiben
//1 Datei erstellen und Inhalt einfügen
function erstelle_neue_datei(dateiname, data){
    fs.writeFile(dateiname,data, ()=>{
        console.log("Datei erstellt")})
}






//2 Bestehende Datei öffnen und Inhalt vollständig überschreiben
function ergaenze_daten(dateiname, neue_daten){
    // Eine neue Datei erstellen oder eine bestehnde Datei ergänzen.
    // Damit jeder eintrag in eine neue zeile geschrieben wird muss
    // das Betriebssystemspezifische Zeilen (EOL => End of Line) ergaenzt werden
    fs.appendFile(dateiname,neue_daten, ()=>{
        console.log("Datei erstellt")})
}

//3 Bestehende Datei öffnen und Inhalt am Ende anfürgen
//4 Bestehende Datei öffnen und Inhalt am Anfang anfürgen