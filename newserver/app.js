const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res){
    res.send("<h1>Главная</h1>")});

app.get("/accounts", (req, res) => {
    res.json(accounts);
}),

app.get("/redir", function(req,res){
    res.redirect("about")
}),

app.use("/products/", function(req,res){
    res.send("Продукты")
}),

app.use("/products/:id", function(req,res){
    res.send(`Товар ${req.params.id}`)
}),

app.use("/products/create", function(req,res){
    res.send("добавление продукта")
}),

app.use("/product/", function(req,res){
    res.send("Продукты")
}),

app.get("/about", function(req,res){
    res.send("О сайте")
}),

app.listen(port, "127.0.0.1", function(){
    console.log("Сервер работает на http://localhost:%s", port)
})

let accounts = [
    {
        "id": 1,
        "username":"Виталик",
        "role": "admin"
    },
    {
        "id": 2,
        "username":"Юра",
        "role": "guest"
    },
    {
        "id": 3,
        "username":"Андрей",
        "role": "guest"
    },
]