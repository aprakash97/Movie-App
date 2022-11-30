// F64Ypp9KM6e6

import app from "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient
const mongo_username = "prakash"
const mongo_password = "F64Ypp9KM6e6"
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.rxi0jtc.mongodb.net/test`
const port = 8008

MongoClient.connect(
    uri,
    {
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1);
    })
    .then(async client => {
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        })
    })