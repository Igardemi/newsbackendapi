import { MongoClient } from "mongodb";
import { sampleNews } from "./data.js";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.MONGO_HOST || "mongodb://root:somepassword@localhost:27017/";
const dbName = "allfunds";
const collectionName = "news";

async function insertSampleNews() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.deleteMany({});
    await collection.insertMany(sampleNews);
    const count = await collection.countDocuments();
    console.log(`Total documents in collection: ${count}`);
  } catch (err) {
    console.error("Error insertando noticias:", err);
  } finally {
    await client.close();
    console.log("MongoDB close");
  }
}

insertSampleNews();
