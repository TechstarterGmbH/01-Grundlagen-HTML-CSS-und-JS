let fullname = { vornaname:"Alex",nachname:"kittich" }
let fullname2 = { vornaname:"Thomas",nachname:"Müller" }
fullname.maedchenname ="ibach"
console.log(fullname)


function Person (vnamen, nname, mname =""){
    this.vorname = vnamen
    this.nachname = nname
    this.maedchenname = mname
    this.funk = () => {console.log("check")}
}

let p = new Person("manuel", "fischer")
let a = new Person("Thomas", "fischer")
let b = new Person("Andy", "fischer")
b.alter = 22
let c = new Person("Susane", "fischer")
p.nachname = "müller"
console.log (p)
console.log (a)
console.log (b)
console.log (c)

console.log ( p instanceof Person );
console.log ( typeof Person );

let fullNameArr
const meinStr = "DIESEN WERT KANN ICH NICHT ÄNDERN"
const PI = 3.14
let vorname = ""
vorname = "cecile"












// const meinArray = ["Deniz", "Alex", "Jodie", "Manuel"]
// meinArray[1] = "Maryam"
// console.log (meinArray[1])
// console.log (meinArray)

// meinArray.push (fullname)
// console.log (meinArray);

// const einFehler = "das ist ok" // hier findet die zuweisung statt
// einFehler ="ein neuer Wert" // das geht nicht, weil die zuweisung einer Konstanten bei der Initialisierung erfolgen muss
// console.log(einFehler)

fullname.nachname ="kittich"
//console.log(fullname.nachname)

fullname ="KEIN WERT"
//console.log (fullname)

let Wohnung = {
    adresse:"Mustermannstr",
    warmmiete: {
        kaltmiete: "400",
        Nebenkosten: "400"
    },
    kaltmiete:"",
    groeesse: "15qm"
}
Wohnung.warmmiete.kaltmiete = "450"
Wohnung.kaltmiete = "700"

//console.log (Wohnung)

let kaltmiete
//console.log(kaltmiete);

Wohnung.kaltmiete = "500";
//console.log(Wohnung.kaltmiete)