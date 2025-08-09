import { MongoClient, Db } from "mongodb";

export let db: Db;

export const connectToDb = async (): Promise<void> => {
  if (!db) {
    try {
      const client = new MongoClient(`${process.env.MONGO_HOST}`);
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
