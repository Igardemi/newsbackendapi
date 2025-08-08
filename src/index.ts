import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDb } from "./db/mongodb";
import newsRoutes from "./routes/newsRoutes";
dotenv.config();

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = express();

  try {
    await connectToDb();
    console.log("Dase de datos conectada");
  } catch (error) {
    console.error("Error conexión base de datos:", error);
  }

  app.use(cors());
  app.use(express.static("public"));
  app.use(express.json());
  app.use("/api/news", newsRoutes());

  const server: http.Server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });

  return server;
}

bootstrap().catch((err) => {
  console.error("No se pudo iniciar el servidor:", err);
});
