const fs = require("fs");
const zlib = require("zlib");

let readstream = fs.createReadStream("txt.txt", "utf-8");

let writestream = fs.createWriteStream("pack.txt.gz");

let gzip = zlib.createGzip();

readstream.pipe(gzip).pipe(writestream)