import express from 'express'

//Konstanten
const port = 3002;

//App definieren
const app = express();


app.listen(port, ()=> console.log(`Express is Listening ${port}`))

app.get('/', (req,res)=>{
    res.send("<h1> Hallo von Express</h1>")
});
app.get('/ueber', (req,res)=>{
    res.send("<h1> die Ueber uns Seite</h1>")
});