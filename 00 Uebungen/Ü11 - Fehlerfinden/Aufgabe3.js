// Ziel:    Über die Funktion "mischen" werden die Zutaten eines Obstsalts gemischt. 
//          nach Aufruf der Funktion mischen wird  der text "Dein Obstsalt bestehned aus Apfel -&- Banane -&- Orange" ausgegben
//          1. Ein Array "Obstsalat" mit den Werten "Apfel", "Orange", "Banane" anlegen
//          2. Über die Array Funktion "Join" werden die Elemente des Array zu einem String zusammengefügt. 
//          3. Als Separator dient der an "Join" übergebene Paramter. hier  " -&- "
//          4. Dokumententation der Funktion Join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// Fehlermeldung: SyntaxError: Unexpected string

let Obstsalat = {"Apfel", "Orange", "Banane"}
let mischen = function (checkvalue){
    let seperator = " -&- "
    console.log("Dein Obstsalt bestehend aus " +  Obstsalat.join(seperator))
}
mischen)