import type { Request, Response } from "express";
import { validationResult } from "express-validator";
import type NewsService from "../services/newsService.js";
import { ObjectId } from "mongodb";

export class NewsController {
  constructor(private newsService: NewsService) {}

  private validateRequest(req: Request, res: Response): boolean {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return false;
    }
    return true;
  }

  async create(req: Request, res: Response) {
    if (!this.validateRequest(req, res)) return;

    try {
      const { title, description, content, author } = req.body;
      const news = await this.newsService.create(title, description, content, author);
      res.status(201).json({ message: "Noticia creada", data: news });
    } catch (error) {
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }

  async archive(req: Request, res: Response) {
    if (!this.validateRequest(req, res)) return;

    try {
      const { title, description, content, author } = req.body;
      const news = await this.newsService.create(title, description, content, author);
      res.status(200).json({ message: "Noticia creada.", data: news });
    } catch (error) {
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }

  async getAllNews(req: Request, res: Response) {
    try {
      const news = await this.newsService.getAllNews();

      res.status(200).json({
        message: "Noticias obtenidas.",
        data: news,
      });
    } catch (error) {
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }

  async getAllArchivedNews(req: Request, res: Response) {
    try {
      const news = await this.newsService.getAllArchived();

      res.status(200).json({
        message: "Noticias archivadas obtenidas.",
        data: news,
      });
    } catch (error) {
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }

  async deleteNews(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "ID no proporcionado.",
        });
      }
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ message: "ID inválido." });
      }
      await this.newsService.delete(id);
      res.status(200).json({
        message: "Noticia eliminada.",
      });
    } catch (error) {
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
}
