import { MongoClient } from "mongodb";
import { sampleNews } from "./data.js";

const uri = `mongodb+srv://igardemi:wM6RdVhZxMpFo107@cluster0.bzgx0d5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
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
