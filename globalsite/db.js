const {MongoClient} = require('mongodb')
const URL = "mongodb://0.0.0.0:27017/tank"

let dbConnection;

module.exports = {
    connectTodb: (cb) => {
        MongoClient
        .connect(URL)
        .then((client) => {
            console.log("Connected to MongoDB");
            dbConnection = client.db();
            return cb ();
        })
        .catch((err) => {
            return cb (err);
        })
    },
    getDb: () => dbConnection,
}