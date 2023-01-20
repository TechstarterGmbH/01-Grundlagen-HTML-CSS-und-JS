// leere Objekte anlegen
const p = {}
const c = {}
console.log (c)

// Properties eines Objekts declarieren und initialisieren
p.vorname = "halima"
p.nachname = "Sadeqi"
console.log (p)

c.vorname = "christian"
c.nachname = "schröder"
console.log (c)

// Ein Array Personen anlegen, das eine Liste der Personen umfasst
let personen = [p, c]
console.log (personen)

console.log(personen[0].vorname)

// Objekt über die Literal-Schreibweise anlegen
let d = {
    vorname: "deniz",
    nachnamen: "Sezer",
    sport: ["fußball", "basketball", "handball"],
    motto: function () {    //annonyme Funktion, die über das Propertie motto aufgerufen werden kann
        console.log("läuft") 
    }
}

d.motto()
console.log (d.sport)

// Ein leeres Objekt angelegt und Propertie 'saghallo' definiert. Über dieses property kann die annonyme Funktion aufgerufen werden
let n = {}
n.saghallo = function () {console.log("hallo")}
n.saghallo()

// Eine Konstruktur Funktion über die beliebig viele Objekte erzeugt werden könnnen
function Person(vname, nnamen, essen){
    this.vorname = vname
    this.nachname = nnamen
    this.lieblingsessen = essen
}

let m = new Person("manuel", "ficher", "pizza")
console.log(m);

