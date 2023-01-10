import express from 'express'
import {router as filmRouter} from './filme/routerFilme.js'
import {router as mainRouter} from './main/mainRouter.js'

let port = 3001

// Starten der App
const app = express();
app.listen(port, () => {console.log(`Express App listen on ${port}`)})

//Konfiguration der App
app.use(express.static("src/public"))
app.use('/', mainRouter)
app.use('/filme', filmRouter )


// Routing der App
app.get("/ueber", (req, res) => {
    res.send("<h1>Die Über uns seite</h1>");
})

