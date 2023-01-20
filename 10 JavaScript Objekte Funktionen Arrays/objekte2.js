function saghallo(nachricht = ""){
    console.log (nachricht)
}


function Person(vname, nnamen, essen, saghalloCbf){
    this.vorname = vname
    this.nachname = nnamen
    this.lieblingsessen = essen
    this.sagHallo = saghalloCbf //function (){console.log ("hallo")}
}

function gutenTag () {
    console.log("Guten Tag")
}


let m = new Person("manuel", "ficher", "pizza", gutenTag)
m.sagHallo()
console.log(typeof Person);

saghallo("diese nachricht möchte ich ausgeben")