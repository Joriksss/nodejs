const fs = require("fs");

let File = fs.readFileSync("./text.txt", "utf8");
console.log(File)