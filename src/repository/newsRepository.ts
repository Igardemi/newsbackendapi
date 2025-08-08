import { ObjectId } from "mongodb";
import { db } from "../db/mongodb.js";
import type { News } from "../models/News.js";

export default class NewsRepository {
  private readonly collection = db.collection<News>("news");

  async create(title: string, description: string, content: string, author: string): Promise<News> {
    try {
      const newsToCreate = {
        title,
        description,
        content,
        author,
        date: new Date(),
        archiveDate: null,
      };

      const result = await this.collection.insertOne(newsToCreate);

      return {
        ...newsToCreate,
        _id: result.insertedId,
      };
    } catch (error) {
      throw new Error("Error al crear noticias.");
    }
  }
  async archive(newsId: ObjectId): Promise<void> {
    try {
      const result = await this.collection.updateOne(
        { _id: newsId },
        { $set: { archiveDate: new Date() } }
      );

      if (result.matchedCount === 0) {
        throw new Error("Error al encontrar noticia.");
      }
    } catch (error) {
      throw new Error("Error al archivar noticia.");
    }
  }
  async getAllNews(): Promise<News[]> {
    try {
      const query = { archiveDate: null };
      return await this.collection.find(query).sort({ date: -1 }).limit(50).toArray();
    } catch (error) {
      throw new Error("Error al obtener noticias.");
    }
  }
  async getAllArchived(): Promise<News[]> {
    try {
      const query = { archiveDate: { $ne: null } };
      return await this.collection.find(query).sort({ archiveDate: -1 }).limit(50).toArray();
    } catch (error) {
      throw new Error("Error al obtener noticias archivadas.");
    }
  }
  async delete(newsId: ObjectId): Promise<void> {
    try {
      const result = await this.collection.deleteOne({ _id: newsId });

      if (result.deletedCount === 0) {
        throw new Error("Error al encontrar noticia para eliminar.");
      }
    } catch (error) {
      throw new Error("Error al eliminar noticia.");
    }
  }
}
