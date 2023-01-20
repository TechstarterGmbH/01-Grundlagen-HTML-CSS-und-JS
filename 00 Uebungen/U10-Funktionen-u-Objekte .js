/**
 * Übungsaufgabe 10: Funktionen und Objekte 
 * 19.01.2023 | M.Fischer
 * 
 * Aufgabenstellung
 * https://docs.google.com/document/d/15rJPgIBNbDAniaVa8ZoO43tExKiBMsh0XXd7eGrVgJo/edit#heading=h.g6q0dyoc65eg
 * 
 * ASCII Art Generator
 * https://patorjk.com/software/taag/#p=display&f=Banner3&t=ascii-art
 * 
 */



/**
   ###    ##     ## ########  ######      ###    ########  ########       ##   
  ## ##   ##     ## ##       ##    ##    ## ##   ##     ## ##           ####   
 ##   ##  ##     ## ##       ##         ##   ##  ##     ## ##             ##   
##     ## ##     ## ######   ##   #### ##     ## ########  ######         ##   
######### ##     ## ##       ##    ##  ######### ##     ## ##             ##   
##     ## ##     ## ##       ##    ##  ##     ## ##     ## ##             ##   
##     ##  #######  ##        ######   ##     ## ########  ########     ###### 
*/

/**
 * 
 * Definiere sinnvolle Attribute für Dinge des täglichen Lebens:
 * Buch - Titel, ISBN, Autor, Erscheinungsjahr, Verlag
 * Film - Titel, Regisseur, Besetzung, Genre, Erscheinungsjahr
 * Fahrzeug - Hersteller, Baujahr, Antriebsart, Leergewicht, Leistung
 * Schulklasse - Jahgangsstuffe, Klassenleitung, Klassengroesse
*/
console.log ("=".repeat(40) + "AUFGABE 1" + "=".repeat(40) )


let data = new Array()
data.push ({Dinge: "Buch", Attribute: "Titel, ISBN, Autor, Erscheinungsjahr, Verlag"})
data.push ({Dinge: "Film", Attribute: "Titel, Regisseur, Besetzung, Genre, Erscheinungsjahr"})
data.push ({Dinge: "Fahrzeug", Attribute: "Hersteller, Baujahr, Antriebsart, Leergewicht, Leistung"})
data.push ({Dinge: "Schulklasse", Attribute: "Jahgangsstuffe, Klassenleitung, Klassengroesse"})
console.table (data, ["Dinge", "Attribute"])



















/*
   ###    ##     ## ########  ######      ###    ########  ########     #######  
  ## ##   ##     ## ##       ##    ##    ## ##   ##     ## ##          ##     ## 
 ##   ##  ##     ## ##       ##         ##   ##  ##     ## ##                 ## 
##     ## ##     ## ######   ##   #### ##     ## ########  ######       #######  
######### ##     ## ##       ##    ##  ######### ##     ## ##          ##        
##     ## ##     ## ##       ##    ##  ##     ## ##     ## ##          ##        
##     ##  #######  ##        ######   ##     ## ########  ########    ######### 
*/
/**
 * Erstelle für die unter (1) angelegten Dinge JavaScript Objekte.
 * a) mittels literal schreibweise
 * b) mittels Konstruktorfunktion
 * c) mittels Object () und dem new-Operator
 */
console.log ("=".repeat(40) + "AUFGABE 2" + "=".repeat(40) )



let buch = {Titel: "Die Schatzinsel", ISBN:3866476973, Autor:"Robert Louis Stevenson", Erscheinungsjahr:"1863", Verlag:"Anaconda Verlag"}
function Buch (titel, isbn, autor, erscheungsjahr, verlag){
    this.titel = titel
    this.isbn = isbn
    this.autor = autor
    this.erscheinungsjahr = erscheungsjahr
    this.verlag = verlag
}

let buchObj = new Object()
buchObj.titel = "Die Schatzinsel"
buchObj.isbn = 3866476973
buchObj.autor = "Robert Louis Stevenson"
buchObj.erscheinungsjahr = 1863
buchObj.verlag = "Anaconda Verlag"

console.log ("buch über Literal-Schreibweise" )
console.log (JSON.stringify(buch))
console.dir (buch)

console.log ("Buch über Konstruktorfunktion" )
console.dir (new Buch("Die Schatzinsel", 3866476973, "Robert Louis Stevenson", 1863, "Anaconda Verlag" ))

console.log ("buchObj über new Object" )
console.dir (buchObj)

let film = {
    titel:"Gran Torino", 
    regisseur:"Clint Eastwood", 
    besetzung: ["Clint Eastwood: Walt Kowalski", "Bee Vang: Thao Vang Lor", "Ahney Her: Sue Lor", "John Carroll Lynch: Friseur Martin"], 
    genre:"Drama", 
    erscheinungsjahr:2006
}

function Film (titel, regisseur, besetzung, genre, erscheinungsjahr){
    this.titel = titel
    this.regisseur = regisseur
    this.besetzung = besetzung
    this.genre = genre
    this.erscheinungsjahr = erscheinungsjahr
}

let filmObj = new Object()
filmObj.titel = "Gran Torino"
filmObj.regisseur = "Clint Eastwood"
filmObj.besetzung = ["Clint Eastwood: Walt Kowalski", "Bee Vang: Thao Vang Lor", "Ahney Her: Sue Lor", "John Carroll Lynch: Friseur Martin"]
filmObj.genre = "Drama"
filmObj.erscheinungsjahr = 2006














/*
   ###    ##     ## ########  ######      ###    ########  ########     #######  
  ## ##   ##     ## ##       ##    ##    ## ##   ##     ## ##          ##     ## 
 ##   ##  ##     ## ##       ##         ##   ##  ##     ## ##                 ## 
##     ## ##     ## ######   ##   #### ##     ## ########  ######       #######  
######### ##     ## ##       ##    ##  ######### ##     ## ##                 ## 
##     ## ##     ## ##       ##    ##  ##     ## ##     ## ##          ##     ## 
##     ##  #######  ##        ######   ##     ## ########  ########     #######    */

/**
 * Erstelle eine Liste von JavaScript Objekten entsprechend nachfolgender Tabelle
 */
console.log ("=".repeat(40) + "AUFGABE 3" + "=".repeat(40) )


//1. Konstruktorfunktion
function Berufsbild (bezeichnung, beschreibung, schagworte, gehalt){
    this.bezeichnung = bezeichnung
    this.beschreibung = beschreibung
    this.schagworte = schagworte
    this.gehalt = gehalt
}

//2. die vier Berufsbilder anlegen
let softwaretester_tags = ["unit tests", "Systemtest", "Teststrategie", "Komponententest"]
let softwaretester = new Berufsbild ("Softwaretester", "Der Software-Tester ist ein IT-Experte, der Softwaretests durchführt.", softwaretester_tags, 57537)

let scrummaster_beschreibung = "Der Scrum-Master steht zwischen Product-Owner und Team. Er erledigt organisatorische und administrative Aufgaben. Moderiert Sitzung, sorgt für die Einhaltung der Scrum-Regeln oder fungiert als Agile-Coach."
let scrummaster_tags = ["moderation", "koordination", "kommunikativ"]
let scrummaster = new Berufsbild ("Scrum Master",scrummaster_beschreibung,scrummaster_tags, 49700 )

let software_architekt_beschreibung = "In enger Absprache mit den Kunden / Fachabteilungen entwerfen Softwarearchitekten das Konzept für das Gesamtsystem, beschreiben Schnittstellen und Austauschformate.  Sie arbeiten eng mit technischen wie nicht technischen Teams zusammen und begleiten das Projekt im Ideal von der Idee bis zur Umsetzung."
let software_architekt_tags = ["Entwurf", "Design", "Konzeption", "Security", "Testing"]
let software_architekt = new Berufsbild ("Software Architekt",software_architekt_beschreibung,software_architekt_tags, 76000 )

let data_scientist_beschreibung = "Data Scientists durchforsten und interpretieren große Datenmengen, um nützliche Informationen als Grundlage für strategische Unternehmensentscheidungen abzuleiten. Sie arbeiten in den Daten “versteckte” Informationen heraus mit dem Ziel, neue Erkenntnisse zu generieren."
let data_scientist_tags = ["Big Data-Analyse", "Statistik" ]
let data_scientist = new Berufsbild ("Data Scientist",data_scientist_beschreibung,data_scientist_tags, 67000 )

//3. Eine Liste (Array) erstellen und Berufsbilder der Liste hinzufügen
let berufsbilder = new Array()
berufsbilder.push(softwaretester)
berufsbilder.push(scrummaster)
berufsbilder.push(software_architekt)
berufsbilder.push(data_scientist)

console.table(berufsbilder, ["bezeichnung", "gehalt"])
//console.log(berufsbilder[3].beschreibung)

























/*
   ###    ##     ## ########  ######      ###    ########  ########    ##        
  ## ##   ##     ## ##       ##    ##    ## ##   ##     ## ##          ##    ##  
 ##   ##  ##     ## ##       ##         ##   ##  ##     ## ##          ##    ##  
##     ## ##     ## ######   ##   #### ##     ## ########  ######      ##    ##  
######### ##     ## ##       ##    ##  ######### ##     ## ##          ######### 
##     ## ##     ## ##       ##    ##  ##     ## ##     ## ##                ##  
##     ##  #######  ##        ######   ##     ## ########  ########          ##  */

/**
 * Schreibe eine Funktion, die drei Argumente annimmt und diese addiert
 */
console.log ("=".repeat(40) + "AUFGABE 4" + "=".repeat(40) )

// Variadische Funktion: Funktion,mit unbestimmter Arität => Parameteranzahl ist bei Deklaration nicht festgelegt.
// https://de.wikipedia.org/wiki/Variadische_Funktion#JavaScript
function addiere (...many){ //etwas mehr als die Aufgabe fordert
    let sum=0;
    for (let i= 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log ("Das Ergebniss der Adition lautet: \t" + addiere(1,2,3,4,5,6,7,8,9)) // => 45


















/*
   ###    ##     ## ########  ######      ###    ########  ########    ######## 
  ## ##   ##     ## ##       ##    ##    ## ##   ##     ## ##          ##       
 ##   ##  ##     ## ##       ##         ##   ##  ##     ## ##          ##       
##     ## ##     ## ######   ##   #### ##     ## ########  ######      #######  
######### ##     ## ##       ##    ##  ######### ##     ## ##                ## 
##     ## ##     ## ##       ##    ##  ##     ## ##     ## ##          ##    ## 
##     ##  #######  ##        ######   ##     ## ########  ########     ######  */

/**
 * Schreibe eine anonyme Funktion, die über eine Variable aufgerufen werden kann 
 * und die aktuelle Uhrzeit auf die Konsole ausgibt.
 */
console.log ("=".repeat(40) + "AUFGABE 5" + "=".repeat(40) )

let now = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    let t = h + ":" + m + ":" + s;

    return t
}

let zeit = now()
console.log(zeit)

/*
   ###    ##     ## ########  ######      ###    ########  ########     #######  
  ## ##   ##     ## ##       ##    ##    ## ##   ##     ## ##          ##     ## 
 ##   ##  ##     ## ##       ##         ##   ##  ##     ## ##          ##        
##     ## ##     ## ######   ##   #### ##     ## ########  ######      ########  
######### ##     ## ##       ##    ##  ######### ##     ## ##          ##     ## 
##     ## ##     ## ##       ##    ##  ##     ## ##     ## ##          ##     ## 
##     ##  #######  ##        ######   ##     ## ########  ########     #######   */

/**
 * Schreibe eine Funktion, die beliebig viele Argumente akzeptiert und diese in 
 * umgekehrter Reihenfolge auf die Konsole ausgibt.
 */

console.log ("=".repeat(40) + "AUFGABE 6" + "=".repeat(40) )

function uturn (...many){ //etwas mehr als die Aufgabe fordert
    
    
    //variante 1: Einfach. Alle Elemte vorne einfügen
    let uturn_arr_v1 = new Array();
    for (let i= 0; i < arguments.length; i++){
        uturn_arr_v1.unshift(arguments[i])
    }

    //variante 2: Etwas anders gedacht
    let uturn_arr_v2 = new Array();
    for (let i = arguments.length-1; i>=0;i--){
        uturn_arr_v2.push(arguments[i])
    }

    // Variante 3
    let uturn_arr_v3 = [...many].reverse();
    
    //v4
    let uturn_arr_v4 = many.reverse()

    
    //v5
    let v = (new Array (...arguments).reverse())
    let uturn_arr_v5 = [...arguments].reverse()

    return uturn_arr_v1
}
uturn(1,2,3,"hallo","pos5",true, "pos7");
console.table (uturn(1,2,3,"hallo","pos5",true, "pos7"))





