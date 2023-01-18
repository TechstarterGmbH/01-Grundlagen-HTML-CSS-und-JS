import {Router}  from "express";
import path from  'path'
import { expresso_utils } from "../utils/utils.js";
//import { utils } from "../utils/utils.js";

const router = Router();



router.renderMainHtml = function(req, res){
    let htmlData =  '<h1>Hallo aus meinem Main Router</h1>' +
                    '<p> Das ist ein Text zum Ausgeben<p>';
    //res.send(htmlData);

    let htmlMessage = 'Hello there!'
    if(typeof req.body.my_form_message !== 'undefined'){
        htmlMessage += req.body.my_form_message
    }

    // Den Default ViewFolder verwenden
    //res.render('main-index.pug', { title: 'Hey', message: 'Hello there!'});
    
    // Den View-Folder des Moduls "Main" verwenden
    let mainFolder = path.join(expresso_utils.src, 'main', 'views')
    let fileToRender = path.join(mainFolder, 'index.pug')
    res.render(fileToRender, { title: 'Hey', message: htmlMessage})
        
}

router.get("/", router.renderMainHtml)

export {router}