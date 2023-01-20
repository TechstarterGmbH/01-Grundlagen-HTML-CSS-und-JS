/**
 * Selbstaufrufende Funktionen - IIFE -Immediately Invoked Function Expression 
 * Werden direkt ausgeführt. Können nur einmal ausgeführt werden, die Funktion 
 * nach dem ausführen nicht mehr erreichbar ist 
 * 
 * Beschreibung und Beispiele
 * https://developer.mozilla.org/en-US/docs/Glossary/IIFE?retiredLocale=de
 */

// AUFBAU einer IIFE
// ( /** ---- hier steht der Code .... */ ) ()

(    () => { console.log("Endlich Freitag") }   ) ()

/**
 * CLOSURE
 * 
 */
function outer (param1, param2, ...rest){
    console.log("äussere ausgeführt")
    let counter = 0
    // äußere Funktion

    function inner (msg){
        // innere Funktion
        // Die innere Funktionen kann auf den Kontext der äußeren Funktion zugreifen.
        // Das heißt: Alle Variablen und Funktion der äußeren Funktion 
        // (Übergabeparameter, Variablen, Funktionen,...) können in der inneren 
        // Funktion genutzt werden 
        // => die innere Funktion "kapselt" die Werte der äußeren Funktion

        // die innere Funktion kann auch als anonyme Funktion dargestellt werden
    }

    return inner
}



function outer (nutzername){
    console.log("äussere ausgeführt")
    let counter = 0
    let url = "https://developer.mozilla.org/"

    function inner (msg){
        console.log("innere Funktion ausgeführt")
        console.log(url + "\t" + nutzername + "\t" + msg)
        counter++
    }

    return inner
}

let meinfunk = outer("username1")
meinfunk("Hallo von aussen")
meinfunk("nochmal aufrufen")
console.log(meinfunk.name) // => liefert "inner"


//Beispiel angedeutet: So könnte ein closure in der Praxis aussehen
function server(url, nutzername, pw){
    /**Server wird aufgerufgen / gestartet */
    let aufrufCounter = 0
    function requets(query, showCallCount){
        aufrufCounter++
        console.log(url +query + nutzername);
        if(showCallCount ==true){
            console.log(aufrufCounter)
        }
    }
    return requets
}

let url = "https://developer.mozilla.org/"
let send =  server(url, "username", "sdsjdhsdh")// nur zum Verständnis. SONST GILT: NIEMALS PASSWÖRTER IM QUELLTEXT
send("neueabfrage")
send("Abfrage 1")
send("Abfrage 2")
send("Abfrage 3", true)



/**
 * Kombination der zuvor Bespochen Themen
 * 1. Closure
 * 2. IIFE (selbstaufrufende Funktion) self-invoked
 * 3. Funktion als Eückgabewert
 * 4. anonyme funktion in arrow Schreibweise
 */
let variable = (function outer () {
    let counter=0
    console.log("outer")
    return (msg) => { console.log("inner:\t" + (counter++) + "\t" + msg) }
}) ()

variable("die Nachricht")
variable("die Nachricht")
variable("die Nachricht")










































// function outer () {
//     let url ="https://developer.mozilla.org"
//     let port = 8080
//     let protocoll = "https"
//     let counter = 0

//     let inner = (param, showClicks)=>{
//         console.log (`call: ${url}/param`)
//         counter++
//         if(showClicks ==true) {
//             console.log(counter)
//         }
//     }

//     return inner
// }

// client = outer ();
// client("check")
// client("check")
// client("check")
// client("check")
// client("check")
// client("check", true)
// client("check")
// client("check")
// client("check")
// client("check", true)











