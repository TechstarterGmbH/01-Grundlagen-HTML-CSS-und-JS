import http from 'http'

const hostname = '127.0.0.1'
const port = '3000'

//Ein Server erstellen ...
let server = http.createServer(OnUserRequest);
// ... und auf Port 3000 auf anfragen warten
server.listen(port,hostname, () => {console.log(`Server is Listening on ${hostname}:${port}`)})

let counter=0;
function OnUserRequest(req, res){
    console.log(req.url)
    console.log(counter)

    if(req.url === "/"){ //Das ist die Startseite
        res.setHeader ('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end (`<h1>Hello Willkommen auf meiner Startseite</h1>
            ${counter}        
        `)
    } else if (req.url === "/ueber"){
        res.setHeader ('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end (`<h1>Das ist meine &Uumlber Mich Seite</h1> `)

    }
    else{ // Bei allen andern habe ich einen Fehler => 404
        res.setHeader ('Content-Type', 'text/html');
        res.statusCode = 404;
        res.end (`<h1>404 <h1><h2>Ohh, da ist etwas schiefggelaufen</h2>`)
    }
    counter++
}