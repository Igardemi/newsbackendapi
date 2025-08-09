import { ObjectId } from "mongodb";
import NewsRepository from "../repository/newsRepository.js";
import type { NewsUseCases } from "../interfaces/NewsUseCase.js";
import type { News } from "../models/News.js";

export default class NewsService implements NewsUseCases {
  constructor(private newsRepository: NewsRepository) {}

  async create(title: string, description: string, content: string, author: string): Promise<News> {
    try {
      if (!title || !content || !author || !description) {
        throw new Error("Faltan datos.");
      }

      return await this.newsRepository.create(title, description, content, author);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error al crear noticia: ${error.message}`);
      }
      throw new Error("Error desconocido al crear noticia.");
    }
  }

  async archive(newsId: string): Promise<void> {
    try {
      if (!ObjectId.isValid(newsId)) {
        throw new Error("Formato id invalido.");
      }
      await this.newsRepository.archive(new ObjectId(newsId));
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error al archivar noticia: ${error.message}`);
      }
      throw new Error("Error desconocido al archivar noticia.");
    }
  }

  async delete(newsId: string): Promise<void> {
    try {
      if (!ObjectId.isValid(newsId)) {
        throw new Error("Formato id invalido");
      }
      await this.newsRepository.delete(new ObjectId(newsId));
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error al eliminar noticia: ${error.message}`);
      }
      throw new Error("Error desconocido al eliminar noticia.");
    }
  }

  async getAllNews(): Promise<News[]> {
    try {
      const news = await this.newsRepository.getAllNews();
      return news;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error al obtener noticias: ${error.message}`);
      }
      throw new Error("Error desconocido al obtener noticias.");
    }
  }
}
