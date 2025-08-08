import { MongoClient } from "mongodb";
import type { News } from "../../models/News.js";

export const sampleNews: News[] = [
  {
    title: "Descubren nueva especie marina en el Pacífico",
    description: "Hallazgo revolucionario en biología marina",
    content:
      "Científicos han identificado una nueva especie de pulpo con características únicas en las profundidades del océano Pacífico.",
    date: new Date("2023-10-05"),
    author: "María López",
    archiveDate: new Date("2023-10-20"),
  },
  {
    title: "Avance revolucionario en energía solar",
    description: "Tecnología solar rompe récord de eficiencia",
    content:
      "Nuevos paneles solares alcanzan un 45% de eficiencia, superando todos los récords anteriores.",
    date: new Date("2023-10-07"),
    author: "Carlos Martínez",
  },
  {
    title: "La inteligencia artificial diagnostica cáncer con un 98% de precisión",
    description: "IA supera a humanos en detección temprana de cáncer",
    content:
      "Un nuevo algoritmo de IA desarrollado en MIT puede detectar cáncer de mama en etapas tempranas con mayor precisión que radiólogos humanos.",
    date: new Date("2023-10-10"),
    author: "Ana Rodríguez",
    archiveDate: new Date("2023-10-25"),
  },
  {
    title: "Nueva ley de protección de datos entrará en vigor en enero",
    description: "Regulación estricta para empresas tecnológicas",
    content:
      "La legislación afectará a todas las empresas que operen en la Unión Europea, con multas de hasta el 4% de su facturación global.",
    date: new Date("2023-10-12"),
    author: "Pedro Sánchez",
  },
  {
    title: "El rover marciano encuentra evidencias de agua reciente",
    description: "Perseverance hace descubrimiento histórico en Marte",
    content:
      "Perseverance ha detectado minerales que solo se forman en presencia de agua líquida en el cráter Jezero.",
    date: new Date("2023-10-15"),
    author: "Elena García",
  },
  {
    title: "Criptomonedas se recuperan tras meses de caída",
    description: "Bitcoin lidera repunte del mercado crypto",
    content:
      "Bitcoin supera los $35,000 por primera vez en 18 meses, marcando el inicio de un nuevo ciclo alcista según analistas.",
    date: new Date("2023-10-18"),
    author: "Javier Fernández",
    archiveDate: new Date("2023-11-01"),
  },
  {
    title: "Nuevo tratamiento para Alzheimer muestra resultados prometedores",
    description: "Esperanza para pacientes con Alzheimer",
    content:
      "En ensayos clínicos fase 3, el fármaco redujo en un 27% el deterioro cognitivo en pacientes con Alzheimer temprano.",
    date: new Date("2023-10-20"),
    author: "Laura Méndez",
  },
  {
    title: "Lanzamiento exitoso del nuevo cohete de SpaceX",
    description: "Éxito en misión orbital de Starship",
    content:
      "El Starship completa su primera misión orbital sin contratiempos, marcando un hito en la exploración espacial comercial.",
    date: new Date("2023-10-22"),
    author: "David Pérez",
  },
  {
    title: "Descubren ciudad perdida de la civilación maya",
    description: "Hallazgo arqueológico redefine historia maya",
    content:
      "Arqueólogos han encontrado más de 60,000 estructuras ocultas en la selva guatemalteca usando tecnología LiDAR.",
    date: new Date("2023-10-25"),
    author: "Sofía Ramírez",
    archiveDate: new Date("2023-11-05"),
  },
  {
    title: "La ONU advierte sobre punto de no retorno climático",
    description: "Urgente llamado a la acción climática",
    content:
      "Nuevo reporte indica que solo quedan 7 años para evitar los peores efectos del cambio climático.",
    date: new Date("2023-10-28"),
    author: "Miguel Ángel Cruz",
  },
];

const uri = "mongodb://root:somepassword@localhost:27017";
const dbName = "alfunds";
const collectionName = "news";

async function insertSampleNews() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.deleteMany({});
    await collection.insertMany(sampleNews);
    const count = await collection.countDocuments();
    console.log(`Total documents in collection: ${count}`);
  } catch (err) {
    console.error("Error insertando noticias:", err);
  } finally {
    await client.close();
    console.log("MongoDB close");
  }
}

insertSampleNews();
