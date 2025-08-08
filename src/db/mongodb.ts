import { MongoClient, Db } from "mongodb";

export let db: Db;

export const connectToDb = async (): Promise<void> => {
  if (!db) {
    try {
      const client = new MongoClient(
        `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:27017/`
      );
      client.connect().catch((err) => {
        console.error("Error connecting to MongoDB:", err);
      });

      db = client.db("allfunds");
    } catch (error) {
      console.error("Error al conectar a MongoDB:", error);
      throw error;
    }
  }
};
