import { News } from "../models/News.js";

export interface NewsUseCases {
  create(title: string, description: string, content: string, author: string): Promise<News>;
  archive(newsId: string): Promise<void>;
  getAllNews(): Promise<News[]>;
  getAllArchived(): Promise<News[]>;
  delete(newsId: string): Promise<void>;
}
