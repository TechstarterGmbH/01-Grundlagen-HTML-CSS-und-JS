import express from 'express'
import {router as filmrouter} from './filme/index.js'

let port = 3001
const app = express();

app.use(express.static("public"))
app.listen(port, () => {console.log(`Express App listen on ${port}`)})

app.use('/filme', filmrouter )


app.get("/", (req, res) => {
    res.send("<h1>Hallo von Express</h1>");
})

app.get("/ueber", (req, res) => {
    res.send("<h1>Die Über uns seite</h1>");
})

app.get("/json", (req, res) => {
    let jsonData = {
        personen: [{'name':'andy'}, {'name':'peter'}]
    }
    res.send(jsonData);
})