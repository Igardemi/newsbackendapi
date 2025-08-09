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
  {
    title: "Nuevo lanzamiento de producto",
    description: "La compañía presentó su nueva línea de dispositivos inteligentes.",
    date: new Date("2025-08-01"),
    content:
      "Durante el evento anual se reveló la nueva línea de productos que promete revolucionar el mercado.",
    author: "María Gómez",
    archiveDate: null,
  },
  {
    title: "Avances en energía renovable",
    description: "Investigadores logran aumentar la eficiencia de paneles solares.",
    date: new Date("2025-07-25"),
    content:
      "Un equipo de científicos ha desarrollado un nuevo material que aumenta la eficiencia de los paneles solares en un 15%.",
    author: "Carlos Pérez",
    archiveDate: null,
  },
  {
    title: "Acuerdo comercial histórico",
    description: "Dos países firman un tratado que reducirá aranceles.",
    date: new Date("2025-07-20"),
    content:
      "El acuerdo busca fortalecer las relaciones bilaterales y aumentar el comercio entre ambas naciones.",
    author: "Laura Martínez",
    archiveDate: null,
  },
  {
    title: "Festival de música internacional",
    description: "Se celebra el mayor evento musical del año con artistas de todo el mundo.",
    date: new Date("2025-07-15"),
    content:
      "Más de 100 bandas y solistas participaron en el festival, atrayendo a miles de visitantes.",
    author: "Andrés López",
    archiveDate: null,
  },
  {
    title: "Descubrimiento arqueológico",
    description: "Hallan una ciudad perdida en la selva amazónica.",
    date: new Date("2025-07-10"),
    content:
      "Los arqueólogos creen que la ciudad fue construida hace más de 1.000 años y podría cambiar la historia conocida.",
    author: "Sofía Torres",
    archiveDate: null,
  },
  {
    title: "Campeonato mundial de ajedrez",
    description: "Un joven prodigio se corona campeón mundial.",
    date: new Date("2025-07-05"),
    content: "A sus 19 años, logró imponerse frente al campeón defensor en una partida épica.",
    author: "Luis Ramírez",
    archiveDate: null,
  },
  {
    title: "Innovación en transporte público",
    description: "Se introduce un nuevo sistema de autobuses eléctricos.",
    date: new Date("2025-07-02"),
    content:
      "La ciudad implementará más de 200 unidades de autobuses eléctricos para reducir la contaminación.",
    author: "Elena Fernández",
    archiveDate: null,
  },
  {
    title: "Récord en turismo",
    description: "La ciudad alcanza cifras históricas de visitantes.",
    date: new Date("2025-06-28"),
    content: "Más de 5 millones de turistas visitaron la ciudad en la primera mitad del año.",
    author: "Pedro Sánchez",
    archiveDate: null,
  },
  {
    title: "Programa espacial",
    description: "La agencia espacial anuncia misión a Marte para 2030.",
    date: new Date("2025-06-25"),
    content: "La misión buscará establecer una base permanente en el planeta rojo.",
    author: "Isabel Morales",
    archiveDate: null,
  },
  {
    title: "Nueva ley de protección ambiental",
    description: "Se aprueba una legislación para proteger ecosistemas marinos.",
    date: new Date("2025-06-20"),
    content: "La ley busca prohibir la pesca en zonas protegidas y aumentar la vigilancia.",
    author: "Javier Ortega",
    archiveDate: null,
  },
  // Noticias archivadas
  {
    title: "Exposición de arte contemporáneo",
    description: "Muestra reúne a los artistas más influyentes del siglo XXI.",
    date: new Date("2025-05-15"),
    content: "La exposición cuenta con más de 300 obras de arte de todo el mundo.",
    author: "Marta Ruiz",
    archiveDate: new Date("2025-07-01"),
  },
  {
    title: "Cumbre de líderes mundiales",
    description: "Se discuten políticas para frenar el cambio climático.",
    date: new Date("2025-04-10"),
    content: "Los líderes acordaron reducir emisiones en un 50% para 2040.",
    author: "Fernando Castillo",
    archiveDate: new Date("2025-06-15"),
  },
  {
    title: "Concierto benéfico",
    description: "Evento recauda fondos para víctimas de desastres naturales.",
    date: new Date("2025-03-05"),
    content: "La recaudación superó los 10 millones de euros, destinados a programas de ayuda.",
    author: "Patricia Vega",
    archiveDate: new Date("2025-06-05"),
  },
  {
    title: "Innovación en medicina",
    description:
      "Nuevo tratamiento promete mejorar la calidad de vida de pacientes con enfermedades crónicas.",
    date: new Date("2025-02-20"),
    content: "El fármaco ha mostrado resultados prometedores en las pruebas clínicas.",
    author: "Raúl Hernández",
    archiveDate: new Date("2025-05-25"),
  },
  {
    title: "Proyecto de reforestación",
    description: "Iniciativa busca plantar 1 millón de árboles en 5 años.",
    date: new Date("2025-01-15"),
    content: "Organizaciones ambientales colaboran para llevar a cabo el proyecto.",
    author: "Natalia Campos",
    archiveDate: new Date("2025-05-10"),
  },
];

const uri = `mongodb+srv://igardemi:wM6RdVhZxMpFo107@cluster0.bzgx0d5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const dbName = "allfunds";
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
