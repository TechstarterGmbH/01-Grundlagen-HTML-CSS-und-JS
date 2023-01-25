// Import von externen Modulen
const dayjs = require("dayjs")
const express = require('express')


// Express Konfiguriern
const app = express()
const port = 3000

//Ein Zähler, um die Aufrufe zu unterscheiden
let counter = 0

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded





//Eine middleware, die ALLES annimmt
app.all('/*', (req, res, next) => {
  counter++
  log(req)
  next() // Wenn die Middleware fertig ist wird der Aufruf "weiter gegeben"
})

app.get("/hardware", (req, res) => { 
  res.send("Hier Liste aller geräte ausgeben")
})

app.get("/hardware/id/*", (req, res) => { 
  res.send("hier ein einzelnes Gerät ausgeben")
})


// Ein Spiegel. Alles Was Postman sendet wird direkt zurück gesendet
app.all('/*', (req, res) => {  
  let time = dayjs().format('HH:mm:ss');
  let msg = `[REQUEST ${counter}] ${time} 
  HOST: ${req.headers.host}
  HTTP-Method: ${req.method} 
  URL:  ${req.originalUrl}
  Querry: ${ JSON.stringify( req.query)}
  Body: ${JSON.stringify(req.body)}\n`

  res.send( msg)
})

// app.get('/', (req, res) => {    
//     res.send('Hello World!')
// })

// app.get('/artist', (req, res) => {    
//   res.send('Suche Künstler ....')
// })


app.listen(port, () => {
  console.log(`Express gestart, Port ${port}`)
})







// Eine minialistische Logger Funktion
let log = (req) =>{
  let day = dayjs().format('DD.MM.YYYY')
  let time = dayjs().format('HH:mm:ss');

  let msg = `[AUFRUF ${counter}] ${time} 
  HTTP-Method: ${req.method} 
  URL:  ${req.originalUrl}
  Body: ${JSON.stringify(req.body)}\n`
  
  
  console.log(msg);
}