const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()

async function getVideo() {
    try {
        const pw = process.env.MONGODB_PW
        const usr = process.env.MONGODB_USR
        const database = process.env.MONGODB_DB
        const cltn = process.env.MONGODB_COLLECTION
        
        const uri = `mongodb+srv://${usr}:${pw}@ytcrawler.0jhwpkg.mongodb.net/?retryWrites=true&w=majority`
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
        
     
        const collection = client.db(database).collection(cltn)
        const videos = collection.find()
        await videos.forEach((vid) => {
            console.log(vid)
        })
        // .then(() => {
            client.close()  
        // })
        // console.log('server data: ', videos)
        return videos
        } 
        catch (error) {
        console.log(error)
        
    }

}

module.exports = {
    getVideo,
}