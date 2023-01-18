import {Router}  from "express";
import path from  'path'
import { expresso_utils } from "../utils/utils.js";

const router = Router();

router.get("/", (req, res) => {
    let htmlData =  '<h1>Hallo aus meinem Main Router</h1>' +
                    '<p> Das ist ein Text zum Ausgeben<p>';
    //res.send(htmlData);

    // Den Default ViewFolder verwenden
    let buecher = [{
        titel: "Ungleichheit in der Klassengesellschaft",
        autor: "Christoph Butterwegge",
        erscheinungsjahr: "2020"
    }]

    
    // Den View-Folder des Moduls "Main" verwenden
    let viewFolder = path.join(expresso_utils.src, 'buecher', 'views')
    let fileToRender = path.join(viewFolder, 'index.pug')
    res.render(fileToRender, { title: 'Bücher', message: 'Willkommn in der Welt der Bücher', buch:buecher[0] });
    
})

export {router}