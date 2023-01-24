// Ziel:
//  1. Ein Objekt "Person" soll erstellt werden. 
//  2. Das Attribut "Name" wird auf Tom gesetzt. 
//  3. Das Attribut "alias" soll gelöscht werden  
// Fehler: Löschen des Attributs nicht möglich.
function Person (name, alter, alias) {
    this.name = name
    this.alter = alter
    this.aliaz = alias
}
let p = new Person ("Tom", 39, "roboto")
console.log(`Das ist ${p.name}. Er ist ${p.alter} Jahre alt.` )
delete p.alias
console.log(JSON.stringify(p) )