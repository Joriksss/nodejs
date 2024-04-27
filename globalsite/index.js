const app = require("./app")

app.get("/", function(req,res){
    res.status(200).json({
        message: "Working"
    })
})

app.listen(3000)

