import {Router}  from "express";

const router = Router();



router.get("/", (req, res) => {
   
    let jsonData = {
        Filme: [{
            "Namen": "König der Löwen",
            "Erscheinungsjahr": "1996 und 2020",
            "Studio":"Disney"
        }, 
        {
            "Namen": "Zurück in die Zukunft",
            "Erscheinungsjahr": "1987",
            "Studio":"k.A"
        }]
    }
    res.send(jsonData);
})

// router.get("/listen", (req, res) => {
//     res.send("<h1>Filmlisten</h1>")
// })

export {router}