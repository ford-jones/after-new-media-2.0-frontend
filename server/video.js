const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()

const pw = process.env.MONGODB_PW
const usr = process.env.MONGODB_USR
const database = process.env.MONGODB_DB
const cltn = process.env.MONGODB_COLLECTION

const uri = `mongodb+srv://${usr}:${pw}@ytcrawler.0jhwpkg.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

async function getVideo() {
        let vidArr = []
        
        const collection = client.db(database).collection(cltn).find()
        await collection.forEach((vid) => {
            return vidArr.push(vid)
        })

    return vidArr
    
}

function deleteVideo(vid) {
    const collection = client.db(database).collection(cltn).deleteOne(vid)
    return collection
}

module.exports = {
    getVideo,
    deleteVideo,
}