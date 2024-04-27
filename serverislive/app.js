const express = require("express");
const app = express()

app.set("view engine", "hbs")

app.use("/contact", function(req, res){
    res.render("contacts.hbs", {
        title: "Мои контакты",
        email: "Gulev324@mail.ru",
        phone: "89644542947"
    });
});

app.use("/", function(req, res){
    res.send("Главная старница")
});
app.listen(3000);