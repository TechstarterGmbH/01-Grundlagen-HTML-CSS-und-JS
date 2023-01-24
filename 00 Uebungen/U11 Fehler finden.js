/*
   ###    ##     ## ########  ######      ###    ########  ########       ##   
  ## ##   ##     ## ##       ##    ##    ## ##   ##     ## ##           ####   
 ##   ##  ##     ## ##       ##         ##   ##  ##     ## ##             ##   
##     ## ##     ## ######   ##   #### ##     ## ########  ######         ##   
######### ##     ## ##       ##    ##  ######### ##     ## ##             ##   
##     ## ##     ## ##       ##    ##  ##     ## ##     ## ##             ##   
##     ##  #######  ##        ######   ##     ## ########  ########     ###### */

// Ziel:
//  1. Ein Objekt "Person" soll erstellt werden. 
//  2. Das Attribut "Name" wird auf tom gesetzt. 
//  3. Das Attribut "alias" soll gelöscht werden  
// Fehler: Löschen des Attributs nicht möglich.
function Person (name, alter, alias) {
    this.name = name
    this.alter = alter
    this.alias = alias
}
let p = new Person ("tom", 39, "roboto")
console.log(`Das ist ${p.name}. Er ist ${p.alter} Jahre alt.` )
delete p.alias
console.log(JSON.stringify(p) )

// Fehlerursache: Das Property Alias wurden im Objekt falsch bennant (aliaz mit z statt alias)
// Lösung: Property aliaz in alias umbenennen





/*
   ###    ##     ## ########  ######      ###    ########  ########     #######  
  ## ##   ##     ## ##       ##    ##    ## ##   ##     ## ##          ##     ## 
 ##   ##  ##     ## ##       ##         ##   ##  ##     ## ##                 ## 
##     ## ##     ## ######   ##   #### ##     ## ########  ######       #######  
######### ##     ## ##       ##    ##  ######### ##     ## ##          ##        
##     ## ##     ## ##       ##    ##  ##     ## ##     ## ##          ##        
##     ##  #######  ##        ######   ##     ## ########  ########    ######### */

// Ziel: Uber die Funktion zeichneMuster wird auf der Konsole ein Muster bestehnd aus Sternen und Strichen ausgegeben.
// 1. Die erste ausgabe lautet "START MUSTER" 
// 2. Eine Schleife wird 15 Mal durchlaufen und zeichnet das Muster. 
// 3. Die letzte Zeile lautet "ENDE MUSTER"

let stern = ("*")
let strich = ("-")

// Zeichnet ein Muster (Pattern) bestehend aus den Paramtern p1 und p2
let zeichneMuster = (p1, p2) => {
    count =15
    for (let i = 1; i < count+1 ;i++){
        if(i==1 ){
            console.log("STARTE MUSETR")
        }
        console.log(p1.repeat(i) + " " + p2.repeat(i))
        if(i==count ){
            console.log("ENDE MUSTER")
        }
    }
}
zeichneMuster(stern, strich)
// Fehlerursache: in der Zeile  if(i==1); ist das ; zu viel
// Lösung: Simikolen löschen




/*
   ###    ##     ## ########  ######      ###    ########  ########     #######  
  ## ##   ##     ## ##       ##    ##    ## ##   ##     ## ##          ##     ## 
 ##   ##  ##     ## ##       ##         ##   ##  ##     ## ##                 ## 
##     ## ##     ## ######   ##   #### ##     ## ########  ######       #######  
######### ##     ## ##       ##    ##  ######### ##     ## ##                 ## 
##     ## ##     ## ##       ##    ##  ##     ## ##     ## ##          ##     ## 
##     ##  #######  ##        ######   ##     ## ########  ########     #######  */

// Ziel:    Über die Funktion "mischen" werden die Zutaten eines Obstsalts gemischt. 
//          nach Aufruf der Funktion mischen wird  der text "Dein Obstsalt bestehned aus Apfel -&- Banane -&- Orange" ausgegben
//          1. Ein Array "Obstsalat" mit den Werten "Apfel", "Orange", "Banane" anlegen
//          2. Über die Array Funktion "Join" werden die Elemente des Array zu einem String zusammengefügt. 
//          3. Als Separator dient der an "Join" übergebene Paramter. hier " -&- "
//          4. Dokumententation der Funktion Join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// Fehlermeldung: SyntaxError: Unexpected string

let Obstsalat = ["Apfel", "Orange", "Banane"]
let mischen = function (checkvalue){
    let seperator = " -&- "
    console.log("Dein Obstsalat bestehend aus " +  Obstsalat.join(seperator))
}
mischen()

// Fehlerursache: a) Es wird ein Objekt erstellt und kein Array. b) Beim Funktionsaufruf von mischen fehlt eine öffnende runde klammer
// Lösung: Objekt a) {} in Array [] ändern b) öffnende runde Klammer ergänzn mischen()



/* 
   ###    ##     ## ########  ######      ###    ########  ########    ##        
  ## ##   ##     ## ##       ##    ##    ## ##   ##     ## ##          ##    ##  
 ##   ##  ##     ## ##       ##         ##   ##  ##     ## ##          ##    ##  
##     ## ##     ## ######   ##   #### ##     ## ########  ######      ##    ##  
######### ##     ## ##       ##    ##  ######### ##     ## ##          ######### 
##     ## ##     ## ##       ##    ##  ##     ## ##     ## ##                ##  
##     ##  #######  ##        ######   ##     ## ########  ########          ##  */

// Ziel: Eine Automatik soll die Temperatur pruefen. Wenn es drausen 
// kalt ist (es_ist_kalt == true) UND die Heizung aus ist (heizung_ein == false)
// dann  soll die Heizung eingestellt werden (heizung_ein = true)
// Fehler: Die Heizung geht nicht an

let es_ist_kalt =true
let heizung_ein = false

if ( (es_ist_kalt==true) && (heizung_ein=false) ){
    console.log("HEIZUNG EIN")
    heizung_ein = true
}
else{ console.log ("Warm genug. HEIZUNG aus")}

// Fehlerursache: Statt einer Prüfng auf Gleichheit (heizung_ein==false) findet eine Zuweisung statt (heizung_ein=false)
// Lösung: Gleichheitszeichen ergänzen, sodass eine Prüfung stattfindet 