import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = express();

  app.use(cors());
  app.use(express.static("public"));
  app.use(express.json());

  const server: http.Server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });

  return server;
}

bootstrap().catch((err) => {
  console.error("No se pudo iniciar el servidor:", err);
});
