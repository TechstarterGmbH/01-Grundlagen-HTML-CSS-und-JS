let g = "gerd"
g = "manuel" // => String (Zeichenkette)
g = 94 // => Zahl

const c = "Christian"
//c = "Paul" // ACHTUNG FEHLER: KONSTANTEN DÜRFEN NUR EINMAL ZUGEWIESEN WERDEN

let arr = [] // eine leeres Array wird erstellt
// In das Array werden drei Elemente mit unterschiedlichem Datentyp eingefügt
arr.push("deniz");
arr.push(17);
arr.push(true);
// Die Länge, jedes einzelne Elemente sowie das ganze Array werden ausgegeben
console.log(arr.length);
console.log (arr[0]);
console.log (arr[1]);
console.log (arr[2]);
console.log (arr);

// Eine Konstante wird erzeugt, die ebenfalls auf das zuvor angelegte 
// Array "zeigen"
// HINWEIS: Die Konstante "zeigt" auf das Array NICHT auf die Variable arr
const constArr = arr
console.log (constArr);

console.log (arr[0]);
console.log (constArr[0]);

// Über die Konstante constArr können die Werte des Array geändert werden.
// Die Änderungen sind auch über die Variable arr abrufbar / ersichtlich
constArr[1] = 95
console.log (constArr);
console.log (arr);

// der Variablen arr wird ein neuer Wert zugewiesen. Die Variable arr "zeigt"
// nicht mehr auf das Array sondern auf die Zeichenkette.
arr = "jodie"
console.log (arr);
console.log (constArr); // Auf das Array kann weiterhin über die Konstanten constArr zugegriffen werden 

//constArr = "halima"  // ACHTUNG FEHLER: Eine Konstante darf nur einmal initialisiert werden 
console.log (constArr);

let n = constArr[1];
console.log(n)

constArr[1] = 100
console.log(n)
console.log(constArr[1])


let m = n // m = 95 und n=95
m=70 // m = 70 n=95
// Basisdatentypen

let f = 14.5
let h = 0xf // 0123456789AB C D E F
console.log( h)
console.log( typeof h)

let b = 0b0011
console.log( b)
console.log( typeof b)