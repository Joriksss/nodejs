const express = require("express");
const app = express()
const port = 8080;



app.use(express.static(__dirname  + "/files"))

app.use ("/", function(req, res){
    res.sendFile(__dirname +  "/files/site.html")
});


app.listen(port, "127.0.0.1", function(){
    console.log("Сервер начал прослушивание запросов на http://localhost:%s", port)}
)


































// app.use ("/", function(req, res){
//     res.sendFile(__dirname +  "/site.html")
// });

// app.use ("/pop", function(req, res){
//         res.status(404).send("resourse don't")
//     });

// app.use ("/about", function(req, res){
//     res.sendFile(__dirname +  "./about.html")
// });

// app.get ("/contact", function(req, res){
//     res.send("<h1>Contact</h1>")
// });

// http.createServer(function(request, response){
//     console.log(message);
//     response.end(message);
// })

// .listen(port, "127.0.0.1", function(){
//     console.log("Сервер начал прослушивание запросов на http://localhost:%s", port);
// });