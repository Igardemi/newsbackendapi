import { Router } from "express";
import NewsRepository from "../repository/newsRepository.js";
import NewsService from "../services/newsService.js";
import { NewsController } from "../controllers/newsController.js";
import { body, param } from "express-validator";

export default function newsRoutes(): Router {
  const router = Router();
  const newsRepository = new NewsRepository();
  const newsService = new NewsService(newsRepository);
  const newsController = new NewsController(newsService);

  router.post(
    "/news",
    [
      body("title").trim().notEmpty().isLength({ max: 120 }),
      body("description").trim().notEmpty(),
      body("content").trim().notEmpty(),
      body("author").trim().notEmpty(),
    ],
    newsController.create
  );
  router.get("/news", newsController.getAllNews);
  router.put("/news/:id/archive", [param("id").isMongoId()], newsController.archive);
  router.delete("/news/:id", [param("id").isMongoId()], newsController.deleteNews);

  return router;
}
