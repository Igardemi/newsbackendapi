import type { News } from "../../models/News.js";

export const sampleNews: News[] = [
  {
    title: "Descubren nueva especie marina en el Pacífico",
    description: "Hallazgo revolucionario en biología marina",
    content:
      "Un equipo internacional de biólogos marinos ha descubierto una especie de pulpo completamente nueva en las profundidades de la Fosa de las Marianas. El cefalópodo, bautizado como 'Octopus abyssalis', presenta características nunca antes vistas, incluyendo órganos bioluminiscentes y un sistema de camuflaje que supera al de cualquier otra especie conocida. Los investigadores estiman que este descubrimiento podría reescribir parte de lo que sabemos sobre la evolución de los moluscos en ambientes de alta presión.",
    date: new Date("2023-10-05"),
    author: "María López",
    archiveDate: new Date("2023-10-20"),
  },
  {
    title: "Avance revolucionario en energía solar",
    description: "Tecnología solar rompe récord de eficiencia",
    content:
      "Ingenieros del MIT han desarrollado una nueva generación de paneles solares que alcanzan un 45% de eficiencia en conversión energética, superando por primera vez el límite teórico que se creía imposible. Esta tecnología utiliza nanocristales de perovskita dispuestos en una estructura fractal que captura un espectro más amplio de luz solar. Las primeras estimaciones sugieren que esta innovación podría reducir el costo de la energía solar en un 60% cuando llegue al mercado en 2025.",
    date: new Date("2023-10-07"),
    author: "Carlos Martínez",
  },
  {
    title: "La inteligencia artificial diagnostica cáncer con un 98% de precisión",
    description: "IA supera a humanos en detección temprana de cáncer",
    content:
      "Un sistema de inteligencia artificial desarrollado por Google Health ha demostrado en pruebas clínicas una precisión del 98% en la detección temprana de cáncer de mama, superando el 92% de precisión promedio de los radiólogos humanos. El algoritmo, que analiza miles de mamografías por segundo, puede identificar patrones microscópicos invisibles al ojo humano. Los hospitales de la Clínica Mayo comenzarán a implementar esta tecnología a partir del próximo mes.",
    date: new Date("2023-10-10"),
    author: "Ana Rodríguez",
    archiveDate: new Date("2023-10-25"),
  },
  {
    title: "Nueva ley de protección de datos entrará en vigor en enero",
    description: "Regulación estricta para empresas tecnológicas",
    content:
      "La Unión Europea ha aprobado la nueva Directiva de Protección de Datos Digitales (DPDD), que impone multas de hasta el 6% de la facturación global a empresas que incumplan las normas de privacidad. La legislación, que entrará en vigor el 1 de enero de 2024, obligará a las plataformas a obtener consentimiento explícito para cada uso de datos personales y establece el 'derecho al olvido digital' como fundamental. Las grandes tecnológicas ya han comenzado a adaptar sus sistemas.",
    date: new Date("2023-10-12"),
    author: "Pedro Sánchez",
  },
  {
    title: "El rover Perseverance encuentra evidencias de agua reciente en Marte",
    description: "Perseverance hace descubrimiento histórico en Marte",
    content:
      "El rover Perseverance de la NASA ha detectado en el cráter Jezero formaciones minerales que solo pueden haberse creado en presencia de agua líquida durante los últimos 100,000 años. Este hallazgo revolucionario sugiere que Marte podría haber albergado condiciones para la vida mucho más recientemente de lo que se pensaba. Los científicos planean ahora analizar muestras de arcilla que podrían contener microfósiles.",
    date: new Date("2023-10-15"),
    author: "Elena García",
  },
  {
    title: "Criptomonedas se recuperan tras meses de caída",
    description: "Bitcoin lidera repunte del mercado crypto",
    content:
      "Tras 18 meses de mercado bajista, Bitcoin ha superado la barrera psicológica de los $35,000, impulsado por la aprobación regulatoria de los ETF spot en Estados Unidos y la adopción institucional. Analistas de JPMorgan predicen que esta podría ser la antesala de un nuevo ciclo alcista que llevaría al BTC a nuevos máximos históricos en 2024. Las altcoins también han mostrado fuertes recuperaciones, con Ethereum subiendo un 45% en las últimas dos semanas.",
    date: new Date("2023-10-18"),
    author: "Javier Fernández",
    archiveDate: new Date("2023-11-01"),
  },
  {
    title: "Nuevo tratamiento para Alzheimer muestra resultados prometedores",
    description: "Esperanza para pacientes con Alzheimer",
    content:
      "El fármaco experimental Lecanemab ha demostrado en ensayos de Fase 3 reducir en un 27% el deterioro cognitivo en pacientes con Alzheimer temprano, marcando el mayor avance terapéutico en dos décadas. El tratamiento, que ataca directamente las placas amiloides en el cerebro, ha recibido aprobación acelerada de la FDA. Aunque presenta algunos efectos secundarios serios, los neurólogos lo consideran un punto de inflexión en la lucha contra esta enfermedad neurodegenerativa.",
    date: new Date("2023-10-20"),
    author: "Laura Méndez",
  },
  {
    title: "Lanzamiento exitoso del nuevo cohete de SpaceX",
    description: "Éxito en misión orbital de Starship",
    content:
      "SpaceX ha logrado por primera vez completar una misión orbital completa con su cohete Starship, el vehículo más potente jamás construido. El lanzamiento desde Boca Chica, Texas, marca un hito crucial en el programa Artemis de la NASA para regresar a la Luna. Elon Musk anunció que la próxima versión del Starship incorporará mejoras que permitirán hasta 100 vuelos del mismo cohete, reduciendo costos en un 90% comparado con los sistemas tradicionales.",
    date: new Date("2023-10-22"),
    author: "David Pérez",
  },
  {
    title: "Descubren ciudad perdida de la civilización maya",
    description: "Hallazgo arqueológico redefine historia maya",
    content:
      "Utilizando tecnología LiDAR, arqueólogos han descubierto una extensa red urbana maya con más de 60,000 estructuras ocultas bajo la selva guatemalteca. La metrópolis, que data del período Clásico (250-900 d.C.), incluye pirámides, sistemas de riego y una sofisticada red de calzadas que conectaba ciudades-estado. Este hallazgo sugiere que la civilización maya fue mucho más extensa y poblada de lo estimado, con una población que podría haber alcanzado los 20 millones de habitantes.",
    date: new Date("2023-10-25"),
    author: "Sofía Ramírez",
    archiveDate: new Date("2023-11-05"),
  },
  {
    title: "La ONU advierte sobre punto de no retorno climático",
    description: "Urgente llamado a la acción climática",
    content:
      "El último reporte del IPCC revela que el mundo tiene solo 7 años para reducir emisiones a la mitad y evitar los efectos más catastróficos del cambio climático. Los científicos advierten que superar los 1.5°C de calentamiento global desencadenaría retroalimentaciones irreversibles, como el colapso de la capa de hielo de Groenlandia. El secretario general de la ONU ha convocado una cumbre de emergencia donde pedirá a los países triplicar sus compromisos de reducción de carbono.",
    date: new Date("2023-10-28"),
    author: "Miguel Ángel Cruz",
  },
  {
    title: "Nuevo lanzamiento de producto",
    description: "La compañía presentó su nueva línea de dispositivos inteligentes",
    date: new Date("2025-08-01"),
    content:
      "TechGlobal Inc. ha revolucionado el mercado con el lanzamiento de su nueva serie Nexus, una línea de dispositivos inteligentes que integra inteligencia artificial avanzada con diseño modular. Los nuevos productos incluyen desde smartphones con pantallas holográficas hasta asistentes domésticos con capacidad predictiva, todos interconectados mediante el innovador protocolo QuantumLink. Según el CEO Mark Richardson, esta plataforma unificada representa 'el mayor salto tecnológico desde la invención del smartphone', con procesadores bioinspirados que consumen un 40% menos energía.",
    author: "María Gómez",
    archiveDate: null,
  },
  {
    title: "Avances en energía renovable",
    description: "Investigadores logran aumentar la eficiencia de paneles solares",
    date: new Date("2025-07-25"),
    content:
      "Científicos del Instituto de Tecnología de Zurich han batido todos los récords al desarrollar paneles solares con un 32.5% de eficiencia gracias a una nueva estructura de células fotovoltaicas de triple unión. Esta tecnología, que utiliza nanocristales de perovskita y grafeno, supera en un 15% los modelos comerciales actuales y mantiene su rendimiento incluso en condiciones de baja luminosidad. El equipo estima que esta innovación podría reducir el periodo de amortización de instalaciones solares de 7 a apenas 3 años, acelerando la transición energética global.",
    author: "Carlos Pérez",
    archiveDate: null,
  },
  {
    title: "Acuerdo comercial histórico",
    description: "Dos países firman un tratado que reducirá aranceles",
    date: new Date("2025-07-20"),
    content:
      "Tras una década de negociaciones, los gobiernos de Mercosur y la Unión Europea han firmado el mayor acuerdo comercial bilateral de la historia, eliminando aranceles en el 92% de los productos agrícolas e industriales. Este pacto, que cubre un mercado conjunto de 780 millones de consumidores, incluye cláusulas pioneras en comercio sostenible y protección laboral. Analistas económicos prevén que el tratado impulsará el PIB regional en un 1.8% anual y creará más de 2 millones de empleos directos en los próximos cinco años.",
    author: "Laura Martínez",
    archiveDate: null,
  },
  {
    title: "Festival de música internacional",
    description: "Se celebra el mayor evento musical del año",
    date: new Date("2025-07-15"),
    content:
      "Más de 300,000 asistentes vibraron con las 120 actuaciones del Global Sound Festival, que este año batió récords de audiencia y sostenibilidad. El evento, celebrado en Barcelona, combinó estrellas internacionales como Coldplay y Rosalía con talento emergente de 40 países, todo alimentado exclusivamente por energías renovables. La organización destacó el innovador sistema de sonido espacial 8D y la app de realidad aumentada que permitió experiencias personalizadas a cada espectador.",
    author: "Andrés López",
    archiveDate: null,
  },
  {
    title: "Descubrimiento arqueológico",
    description: "Hallan una ciudad perdida en la selva amazónica",
    date: new Date("2025-07-10"),
    content:
      "Un equipo multidisciplinar ha descubierto en el corazón del Amazonas los restos de 'Karahkwa', una metrópolis precolombina que albergó hasta 50,000 habitantes entre los siglos IX y XII. Las imágenes LiDAR revelan pirámides escalonadas, sofisticados sistemas de acueductos y lo que parecen observatorios astronómicos, desafiando la visión tradicional sobre el desarrollo en la región. Los arqueólogos creen que este hallazgo reescribirá la historia de las civilizaciones americanas, mostrando un nivel de complejidad urbana comparable a los mayas.",
    author: "Sofía Torres",
    archiveDate: null,
  },
  {
    title: "Campeonato mundial de ajedrez",
    description: "Un joven prodigio se corona campeón mundial",
    date: new Date("2025-07-05"),
    content:
      "El indio Ramesh Vuppala, de solo 19 años, ha destronado al noruego Magnus Carlsen tras una épica final de 12 partidas en el Campeonato Mundial de Ajedrez de Dubai. Su victoria en la última partida, con un audaz sacrificio de dama en el movimiento 34, ha sido calificada como 'obra maestra estratégica' por los grandes maestros. Vuppala, que aprendió a jugar a los 4 años en los slums de Chennai, representa el auge de una nueva generación formada mediante inteligencia artificial, combinando cálculo computarizado con creatividad humana.",
    author: "Luis Ramírez",
    archiveDate: null,
  },
  {
    title: "Innovación en transporte público",
    description: "Se introduce un nuevo sistema de autobuses eléctricos",
    date: new Date("2025-07-02"),
    content:
      "La capital sueca ha inaugurado la flota más avanzada de autobuses eléctricos del mundo, con 200 unidades que se recargan en solo 3 minutos mediante pantógrafos automáticos en las paradas. Estos vehículos, equipados con sensores IoT y asientos inteligentes que se adaptan al peso del usuario, forman parte del plan 'Cero Emisiones 2030'. El sistema reduce el consumo energético en un 60% respecto a modelos anteriores y ofrece wifi 6G gratuito, estableciendo un nuevo estándar en movilidad urbana sostenible.",
    author: "Elena Fernández",
    archiveDate: null,
  },
  {
    title: "Récord en turismo",
    description: "La ciudad alcanza cifras históricas de visitantes",
    date: new Date("2025-06-28"),
    content:
      "Tokio ha superado por primera vez los 5 millones de visitantes internacionales en un solo mes, impulsado por el nuevo visado digital y la apertura del Distrito Futuro, una megainfraestructura flotante con atracciones de realidad extendida. La Oficina de Turismo atribuye este éxito a la combinación de tradición e innovación, donde templos centenarios coexisten con robots guía y restaurantes holográficos. Este boom ha generado 120,000 empleos pero también plantea desafíos de sostenibilidad que las autoridades afrontan con un sistema de gestión de crowds en tiempo real.",
    author: "Pedro Sánchez",
    archiveDate: null,
  },
  {
    title: "Programa espacial",
    description: "La agencia espacial anuncia misión a Marte para 2030",
    date: new Date("2025-06-25"),
    content:
      "La Agencia Espacial Europea ha revelado los detalles de su ambicioso programa 'Mars Pioneers', que enviará a cuatro astronautas a establecer la primera base permanente en Marte. La misión, prevista para 2030, utilizará un revolucionario sistema de propulsión nuclear térmica que reduce el viaje a solo 4 meses. Los seleccionados, actualmente en entrenamiento en la base lunar, probarán tecnologías clave como invernaderos de algas para producción de oxígeno y trajes pressurizados con exoesqueletos robóticos, allanando el camino para la colonización humana del planeta rojo.",
    author: "Isabel Morales",
    archiveDate: null,
  },
  {
    title: "Nueva ley de protección ambiental",
    description: "Se aprueba legislación para proteger ecosistemas marinos",
    date: new Date("2025-06-20"),
    content:
      "El Parlamento Global Oceánico ha aprobado por unanimidad la Ley de Santuarios Marinos, que protege el 30% de los océanos con patrullas robóticas y sanciones millonarias. Esta normativa pionera, fruto de 5 años de negociaciones, combina tecnología blockchain para rastrear pesca ilegal con drones submarinos que regeneran arrecifes de coral. Los primeros resultados en la zona piloto del Pacífico muestran un aumento del 40% en biodiversidad, dando esperanza para la recuperación de ecosistemas críticos amenazados por el cambio climático.",
    author: "Javier Ortega",
    archiveDate: null,
  },
  {
    title: "Exposición de arte contemporáneo",
    description: "Muestra reúne a los artistas más influyentes del siglo XXI",
    date: new Date("2025-05-15"),
    content:
      "El Museo del Futuro de Berlín alberga la mayor retrospectiva de arte neurodigital, donde 85 creadores exploran la intersección entre mente humana y algoritmos. Destacan instalaciones como 'Consciencia Colectiva' de Yiyi Zhang, que traduce ondas cerebrales de visitantes en esculturas holográficas, y 'Memorias Artificiales' de Jean-Luc Bertrand, donde IA genera recuerdos ficticios. La crítica elogia cómo esta exposición redefine el concepto de autoría artística en la era posthumana, con piezas que evolucionan mediante aprendizaje automático.",
    author: "Marta Ruiz",
    archiveDate: new Date("2025-07-01"),
  },
  {
    title: "Cumbre de líderes mundiales",
    description: "Se discuten políticas para frenar el cambio climático",
    date: new Date("2025-04-10"),
    content:
      "En la Cumbre Climática de Reikiavik, 150 naciones han acordado adelantar a 2035 la neutralidad de carbono, con planes concretos para eliminar el carbón y subsidiar masivamente energías limpias. El pacto incluye el innovador Fondo de Adaptación Justa, financiado con impuestos a combustibles fósiles, que apoyará a países en desarrollo con tecnología verde. Aunque algunos critican la falta de sanciones duras, expertos consideran este el acuerdo más ambicioso desde París 2015, con compromisos verificables por satélites de monitoreo climático.",
    author: "Fernando Castillo",
    archiveDate: new Date("2025-06-15"),
  },
  {
    title: "Concierto benéfico",
    description: "Evento recauda fondos para víctimas de desastres naturales",
    date: new Date("2025-03-05"),
    content:
      "El megaevento 'Voces por el Planeta' reunió en streaming a estrellas como Beyoncé, BTS y Stromae en un maratón musical de 12 horas que recaudó 250 millones de dólares para ayuda humanitaria. Transmitido en metaverso y con tecnología holográfica, permitió a espectadores de 180 países interactuar virtualmente mientras contribuían mediante criptodonaciones. Los fondos se destinarán a reconstrucción ecológica en zonas afectadas por huracanes y a sistemas de alerta temprana basados en IA en el Sudeste Asiático.",
    author: "Patricia Vega",
    archiveDate: new Date("2025-06-05"),
  },
  {
    title: "Innovación en medicina",
    description: "Nuevo tratamiento para enfermedades crónicas",
    date: new Date("2025-02-20"),
    content:
      "El hospital universitario de Kyoto ha presentado resultados revolucionarios en la Fase III de pruebas de 'NeuroRegen', un tratamiento con células madre modificadas que ha revertido síntomas de Parkinson y esclerosis múltiple en el 68% de pacientes. Esta terapia pionera, que regenera tejido nervioso mediante nanotransportadores de ARN mensajero, podría aprobarse en 2026 tras demostrar seguridad en ensayos con 2,000 voluntarios. Los neurólogos hablan del mayor avance en neurología regenerativa de la última década.",
    author: "Raúl Hernández",
    archiveDate: new Date("2025-05-25"),
  },
  {
    title: "Proyecto de reforestación",
    description: "Iniciativa busca plantar 1 millón de árboles",
    date: new Date("2025-01-15"),
    content:
      "La campaña 'Pulmón Verde' ha superado su meta inicial al plantar 1.2 millones de árboles nativos en la Amazonía usando drones de siembra masiva y semillas inteligentes con nutrientes encapsulados. Este proyecto colaborativo entre comunidades locales, científicos y empresas ha creado además 15,000 empleos verdes y un sistema blockchain para monitorear el crecimiento de cada árbol. Los primeros resultados muestran un aumento del 18% en precipitaciones regionales, demostrando el impacto climático inmediato de la reforestación a gran escala.",
    author: "Natalia Campos",
    archiveDate: new Date("2025-05-10"),
  },
];
