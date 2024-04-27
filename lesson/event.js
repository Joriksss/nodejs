const fs = require("fs");

let writestream = fs.createWriteStream("text.txt");
writestream.write("Привет IT Hub!\n");
writestream.write("Продолжеине записи\n");
writestream.write("what??\n")
writestream.end("Завершение записи");

let readstream = fs.createReadStream("text.txt", "utf8");

readstream.on("data", function(q){
    console.log(q);
});