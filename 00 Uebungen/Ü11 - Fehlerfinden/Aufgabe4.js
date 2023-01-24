// Ziel: Eine Automatik soll die Temperatur pruefen. Wenn es drausen 
// kalt ist (es_ist_kalt == true) UND die Heizung aus ist (heizung_ein == false)
// dann soll die Heizung eingestellt werden (heizung_ein = true)
// Fehler: Die Heizung geht nicht an. Ausgabe: "Warm genug. HEIZUNG aus"

let es_ist_kalt = true
let heizung_ein = false

if ( (es_ist_kalt==true) && (heizung_ein=false) ){
    console.log("HEIZUNG EIN")
    heizung_ein = true
}
else{ console.log ("Warm genug. HEIZUNG aus")}