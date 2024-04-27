const express = require("express");
const expressHBS = require("express-handlebars")
const hbs = require("hbs");
const app = express();

app.set("views engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials")
app.use(express.static(__dirname + '/public'))

app.engine("hbs", expressHBS.engine({
    layoutDir: "views/layouts",
    defaultLayout: "menu",
    extname: "hbs",
}));

app.get("/", function(req, res){
    res.render("all.hbs", {
      name: "МЕНЮ"
    });
});

app.get("/breakfast", function(req, res){
    res.render("breakfast.hbs", {
      name: "ЗАВТРАК"
    });
});

app.get("/dinner", function(req, res){
  res.render("dinner.hbs",{
    name: "ОБЕД"
  });
});

app.get("/cocktails", function(req, res){
  res.render("cocktails.hbs",{
    name: "КОКТЕЙЛИ"
  });
});

app.get("/dinner2", function(req, res){
  res.render("dinner2.hbs",{
    name: "УЖИН"
  });
});

app.listen(3000)
