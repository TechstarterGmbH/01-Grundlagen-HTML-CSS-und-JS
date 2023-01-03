import fs from 'fs';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


let datei = './witze.data'
let splitet =""

// fs.readFile(datei, (err, data) => {
//     if (err) throw err;

//     console.log(data.toString());
    
//     // Zeilenweise ausgeben
//     splitet = data.toString().split("\n")
//     for (let i= 0; i<splitet.length-1;i++){
//         console.log (`${i}: ${splitet[i]}`)
//     }
    
//     //alternative
//     //data.toString().split("\n").forEach(line => { console.log (line)});
// });

fs.readFile (datei, onReadFile);


function onReadFile(err, data){
    if (err) throw err;

    //Die komplette Datei am Stueck
    //console.log(data.toString());
    
    // Die Datei zeilenweise ausgeben
    splitet = data.toString().split("\n")
    // for (let i= 0; i<splitet.length;i++){
    //     console.log (`${i+1}: ${splitet[i]}`)
    // }
    
    //alternative
    //data.toString().split("\n").forEach(line => { console.log (line)});
}


const line = readline.createInterface({input, output})
let antwort = await line.question("Noch einen [J/N]?\n")
while (antwort.toString()!="N"){
    let nxt = Math.floor( (Math.random()*100) %  splitet.length)
    console.log(nxt)
    console.log(splitet[nxt]);
    antwort = await line.question("Noch einen [J/N]?\n")
}
console.log(` ${antwort.toString()}`)
line.close();


//const used = process.memoryUsage().heapUsed / 1024 / 1024;
//console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);