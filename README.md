# API Rest with Node, Express and MongoDB

## Tecnologías utilizadas:

**Noje.js** v22.18 (compatible con Amazon Linux 2023)
**Express**  
**MongoDB**  
**Docker**  
**TypeScript**

### Los servicios estarán disponibles en:

API: http://localhost:3000/api  
MongoDB: mongodb://root:somepassword@localhost:27017

## Endpoints

GET /api/news Obtener todas las noticias  
GET /api/news/archived Noticias archivadas  
POST /api/news Crear nueva noticia  
PUT /api/news/:id/archive Actualizar noticia  
DELETE /api/news/:id Eliminar noticia

### Local or Dev Environment

Create .env file.

### Iniciar servicio en contenedores para desarrollo en local:

```
docker-compose up -d --build
```

### Detener servicio:

```
docker-compose down
```

### Script para añadir noticias iniciales a mongoDB

```
npm run mockup
```
