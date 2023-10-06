const { MongoClient } = require("mongodb");
const { mongodbUri } = require("../../config.json")

export async function connectToDatabase() {
    try {
        let client = new MongoClient(mongodbUri);
        await client.connect();
        return client.db("opchainDb")

    } catch (err) {
        console.error(err)
    }
}