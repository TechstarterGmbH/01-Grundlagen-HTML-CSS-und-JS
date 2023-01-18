const fs = require('fs');

// Person = {
//     vorname: "Manuel",
//     nachname: "fischer"
// }


fs.readFile("data.json", (err, buffer) => {
    if (err) throw err

    let jon = JSON.parse (buffer)
    console.log (jon.name)

})

let jim ={"name":"jim", "age":25, "cars":["VW", "Fahrrad"]}
fs.writeFile ("jimsData.json", JSON.stringify(jim),(err) => {
    if (err) throw err;
    console.log('Jim gespeichert');
  });


let einMann = {
    "vorname": "hans", 
    "alter": "16", 
    "Wohnort":"Muenster"
}
console.log(einMann)


let mannAlsString = JSON.stringify(einMann)
console.log(mannAlsString)

let mannAlsJson = JSON.parse(mannAlsString)
console.log(mannAlsJson)

function Person (name, nachname){
    this.name = name,
    this. nachname = nachname

}
let p = new Person("Manuel", "Fischer")
let a = new Person("Thomas", "Müller")
let b = new Person ("Ingo", "Appelt")


Person.prototype.adresse="kein wert gesetzt"

console.log(p.adresse)
console.log(a.adresse)
console.log(b.adresse)

p.alter="geheim :-)"
console.log(p.alter)
console.log(a.alter)
console.log(b.alter)
