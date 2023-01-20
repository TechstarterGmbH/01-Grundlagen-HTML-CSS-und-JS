//Beispielobjekt Band. 
let band = {
	name : 'Deep Purple',
	year : 1968,
	members : {
		vocals : 'Rod Evans',
		guitar : 'Ritchie Blackmore'
	}
}

//ZUgriff auf Attribute / Properties des objekts mitlgieder
let mitglieder = band.members
console.log(band.members.vocals)
console.log(mitglieder.vocals)

// Innere Funktion kann auf den äußeren Kontext zugreifen
let txt = "hallo"
let schreibetwas = function (nachricht){
    let prefix = "-----"
    console.log ("Funktion definiert und ausgeführt")
    return  function innereFunktion (msg){
        console.log (prefix + nachricht + txt + msg)
    }
}()
console.log(`Typ der ${schreibetwas.name}: ${typeof schreibetwas}` )
schreibetwas("1")
schreibetwas("2")
schreibetwas("3")


// let nachricht = "hallo" 
// const schreibEtwas = () => {
//     let nachricht = "servus"
// }

// console.log (nachricht)
// console.log (typeof schreibEtwas)
// schreibEtwas = "hallo"
// console.log (typeof schreibEtwas)
// schreibEtwas()




// function schreibeEtwas(){ 
//     nachricht = "hallo"
//     console.log(nachricht)
// }

// function schreibeEtwas2(){ console.log(nachricht.constructor.name)}
// //function schreibeEtwas3(){ console.log(nachricht)}

// schreibeEtwas()
// schreibeEtwas2()
// //schreibeEtwas3()
// console.log(nachricht)
