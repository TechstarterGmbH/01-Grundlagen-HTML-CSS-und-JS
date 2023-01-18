// Externe Module
import express, { urlencoded } from 'express'

// Eigene Module
import {expresso_utils} from './utils/utils.js'
import {router as filmRouter} from './filme/routerFilme.js'
import {router as mainRouter} from './main/mainRouter.js'
import {router as buchRouter} from './buecher/buecherRouter.js'


let port = 3001

// Starten der App
const app = express();
app.listen(port, () => {console.log(`Express App listen on ${port}`)})

//Konfiguration der App
app.set('view engine', 'pug')
app.set('views', expresso_utils.views);

app.use(express.static( expresso_utils.public))
app.use(express.urlencoded({extended:false}))
app.use('/', mainRouter)
app.use('/filme', filmRouter )
app.use('/buecher', buchRouter )


// Routing der App
app.get("/ueber", (req, res) => {
    res.send("<h1>Die Über uns seite</h1>");
})

app.get("/g", (req,res) => {res.redirect("http://google.de")})

app.post("/sag_hallo", sag_hallo_middleware, mainRouter.renderMainHtml)

function sag_hallo_middleware(req, res, next){
    let user = {}
    user.nutzername = req.body.nutzername
    user.nickname = req.body.nickname
    user.slogan = req.body.slogan
    
    console.log (user)
    //res.send("<h1>Die Über uns seite</h1>");
    req.body.my_form_message ="Danke für deine Eingabe"
    next()
    //res.end()
}

// 404 Fehler: Wenn bis hier her keine Route gefunden wurde gibt es auch keine 
// passende Route mehr
app.use(function (req, res, next) {
    expresso_utils.log(req);
    res.status(404).send("404 ... :-(");    
  });
