const express = require("express");
const expressHBS = require("express-handlebars")
const hbs = require("hbs");
const app = express();

app.engine("hbs", expressHBS.engine({
    layoutDir: "views/layout",
    defaultLayout: "layout",
    extname: "hbs",
}));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials")

app.get("/contacts", function(req, res){
    res.render("contacts.hbs",{
        title: 'Мои контакты',
        email: 'Gulev324@mail.ru',
        phone: '+1234567890'
    });
});

app.get("/arhive", function(req, res){
    res.render("arhive.hbs")
});

app.get("/", function(req, res){
    res.render("home.hbs");
});

app.listen(5000)