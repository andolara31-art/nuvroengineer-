export type ServicePageContent = {
  path: string;
  title: string;
  description: string;
  name: string;
  eyebrow: string;
  intro: string;
  deliverables: string[];
  steps: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  demoId: string;
};

export const servicePages: ServicePageContent[] = [
  {
    path: "/diseno-web-costa-rica",
    title: "Diseño web en Costa Rica para negocios | NUVRO Engineer",
    description:
      "Diseño de páginas web para negocios de Costa Rica. Presentá tus servicios, respondé dudas y facilitá las cotizaciones desde el celular con NUVRO Engineer.",
    name: "Diseño web en Costa Rica para presentar y hacer crecer tu negocio.",
    eyebrow: "Diseño web / Costa Rica",
    intro:
      "Cuando alguien descubre tu negocio, necesita entender qué ofrecés, si le sirve y cómo dar el siguiente paso. Diseñamos páginas comerciales que reúnen esa información y hacen fácil consultar desde el celular.",
    deliverables: [
      "Estructura de contenido alrededor de tu oferta: servicios, beneficios, preguntas frecuentes y contacto.",
      "Diseño adaptable a celulares, tabletas y computadoras, con navegación y botones fáciles de usar.",
      "Enlaces de contacto con un mensaje relacionado con el servicio que la persona está consultando.",
      "Base de SEO: títulos y descripciones por página, encabezados claros y enlaces internos relevantes.",
      "Publicación y revisión de enlaces, formularios e imágenes según el alcance acordado.",
      "Explicación de cómo solicitar o realizar cambios y qué mantenimiento necesita la página.",
    ],
    steps: [
      {
        title: "Entendemos tu oferta",
        body: "Revisamos tus servicios, tu tipo de cliente y el objetivo de la web. Definimos qué información necesitás aportar: identidad, fotografías, datos de contacto y detalles de cada servicio.",
      },
      {
        title: "Ordenamos y diseñamos",
        body: "Proponemos la estructura y una dirección visual. La página debe responder las dudas que aparecen antes de cotizar, con ejemplos y llamados a la acción relacionados con cada servicio.",
      },
      {
        title: "Construimos y revisamos",
        body: "Adaptamos la web a móvil y escritorio. Verificamos el contenido, los enlaces y el recorrido hasta el contacto; los sistemas de reserva, pago o catálogo se definen por separado si los necesitás.",
      },
      {
        title: "Publicamos y medimos",
        body: "Conectamos el dominio y dejamos definidos los eventos que conviene medir. Para ver resultados hacen falta datos reales: visitas, consultas recibidas y seguimiento comercial.",
      },
    ],
    faqs: [
      {
        question: "¿Me sirve una web si ya tengo Instagram y WhatsApp?",
        answer:
          "Puede servirte para reunir tu oferta en una dirección propia y dar contexto antes de la conversación. Las redes ayudan a descubrirte; la web puede explicar servicios, mostrar trabajos y dirigir consultas a WhatsApp. Primero revisamos si ese recorrido responde a tu negocio.",
      },
      {
        question: "¿Qué necesito tener listo para empezar?",
        answer:
          "El nombre del negocio, tus servicios, datos de contacto y una idea del objetivo. También ayudan el logo, fotografías propias y preguntas que te hacen los clientes. Si falta contenido, definimos cómo prepararlo antes de construir cada sección.",
      },
      {
        question: "¿El dominio, hosting y mantenimiento están incluidos?",
        answer:
          "La propuesta detalla qué incluye la construcción y qué pagos son recurrentes. Dominio, hosting, correo, herramientas de analítica o servicios externos pueden tener costes aparte. También acordamos quién es dueño de las cuentas y quién realiza las actualizaciones.",
      },
      {
        question: "¿La web va a aparecer de primera en Google?",
        answer:
          "No se puede garantizar una posición. Una estructura clara y una base técnica correcta ayudan a que los buscadores entiendan el sitio, pero el posicionamiento depende también del contenido, la competencia y otras señales. El progreso se evalúa con datos de Search Console y consultas reales.",
      },
      {
        question:
          "¿Pueden agregar pagos, reservas o venta de productos digitales?",
        answer:
          "Son posibilidades que evaluamos según tu operación. Antes de cotizar definimos cobros, entrega, disponibilidad, soporte y las plataformas necesarias. Una página comercial básica no supone que esas funciones estén incluidas o conectadas.",
      },
    ],
    demoId: "web",
  },
  {
    path: "/automatizaciones-negocios",
    title: "Automatizaciones para negocios en Costa Rica | NUVRO Engineer",
    description:
      "Ordená consultas, tareas repetitivas y seguimiento comercial. Diseñamos automatizaciones para negocios de Costa Rica según tus herramientas y tu proceso.",
    name: "Automatizaciones para negocios que necesitan ordenar su día a día.",
    eyebrow: "Automatización / Procesos comerciales",
    intro:
      "Una consulta entra por un lado, el dato se copia en otro y el seguimiento queda pendiente. Revisamos ese recorrido con vos y definimos qué tareas se pueden conectar, qué información hace falta y cuándo debe intervenir una persona.",
    deliverables: [
      "Mapa del proceso actual: qué inicia la tarea, qué datos necesita y qué resultado esperás.",
      "Propuesta de un flujo acotado, con responsables, reglas y criterios para revisar los errores.",
      "Conexión entre las herramientas acordadas, sujeta a los permisos y funciones disponibles en cada plataforma.",
      "Mensajes y avisos útiles para el equipo, con una ruta clara para los casos que requieren atención humana.",
      "Pruebas con ejemplos de uso normal, datos incompletos y fallos de los servicios conectados.",
      "Documentación para entender el flujo, detenerlo y mantenerlo después de la entrega.",
    ],
    steps: [
      {
        title: "Elegimos una tarea concreta",
        body: "Empezamos por una tarea repetida: registrar una consulta, avisar al equipo o recordar un seguimiento. Revisamos volumen, excepciones y el tiempo que te ocupa hoy antes de proponer herramientas.",
      },
      {
        title: "Definimos reglas y acceso",
        body: "Acordamos qué datos pueden circular, quién puede verlos y qué decisiones requieren revisión. Confirmamos que las herramientas permiten la integración y revisamos sus costes y límites.",
      },
      {
        title: "Probamos el recorrido",
        body: "Construimos un flujo de prueba con datos de ejemplo. Incluimos lo que ocurre si falta un dato, se repite una consulta o falla una conexión, para que el equipo sepa cómo responder.",
      },
      {
        title: "Activamos con seguimiento",
        body: "La activación usa las cuentas autorizadas de tu negocio. Definimos responsables, avisos de error y mantenimiento; después contrastamos el funcionamiento con el trabajo real del equipo.",
      },
    ],
    faqs: [
      {
        question: "¿Qué se puede automatizar en un negocio pequeño?",
        answer:
          "Tareas con entradas y reglas claras: registrar solicitudes, distribuir avisos, organizar datos o preparar recordatorios. Conviene empezar por un proceso sencillo y revisar sus excepciones. Las decisiones comerciales o respuestas sensibles pueden necesitar aprobación humana.",
      },
      {
        question: "¿Pueden conectar WhatsApp?",
        answer:
          "Revisamos el caso y las opciones oficiales disponibles para tu cuenta. Un enlace que abre WhatsApp y una integración que envía mensajes son funciones diferentes. Los envíos automáticos pueden requerir una plataforma compatible, autorizaciones, plantillas y cargos de terceros; se confirman antes de construir.",
      },
      {
        question: "¿Tengo que cambiar las herramientas que ya uso?",
        answer:
          "Primero revisamos tus herramientas actuales y sus posibilidades de conexión. Una hoja de cálculo puede ser suficiente para ciertos procesos; otros requieren una plataforma adicional. La elección depende de permisos, volumen, mantenimiento y presupuesto.",
      },
      {
        question: "¿Qué pasa si la automatización falla?",
        answer:
          "El alcance debe definir cómo detectar el fallo, avisar a una persona y retomar la tarea. También acordamos quién revisa las conexiones, los cambios de contraseña y las actualizaciones de las plataformas. Ningún flujo conectado elimina la necesidad de supervisión.",
      },
      {
        question: "¿Se paga una sola vez?",
        answer:
          "La construcción puede cotizarse como proyecto. Las plataformas, el consumo de API, los mensajes y el mantenimiento pueden generar pagos recurrentes. La propuesta debe separar esos conceptos y sus responsables antes de activar el flujo.",
      },
    ],
    demoId: "automatizacion",
  },
  {
    path: "/menu-qr-restaurantes",
    title: "Menú QR para restaurantes en Costa Rica | NUVRO Engineer",
    description:
      "Menús digitales con QR para restaurantes y cafeterías de Costa Rica. Organizá platos, categorías, precios y contacto en una página fácil de consultar.",
    name: "Menú QR para restaurantes y cafeterías de Costa Rica.",
    eyebrow: "Menú digital / Restaurantes y cafeterías",
    intro:
      "Tu cliente escanea, encuentra lo que busca y consulta con más contexto. Diseñamos un menú digital que presenta categorías, platos y precios con claridad, pensado para leer desde el celular en la mesa o antes de visitarte.",
    deliverables: [
      "Estructura por categorías que refleje tu oferta y permita encontrar platos con pocos pasos.",
      "Presentación de nombres, descripciones, precios y datos que tu negocio confirme.",
      "Diseño para celular con texto legible e imágenes optimizadas cuando formen parte del alcance.",
      "Código QR que dirige a la dirección acordada para tu menú, con archivo para impresión.",
      "Datos de ubicación, horarios y contacto que vos proporciones y apruebes.",
      "Procedimiento definido para actualizar precios, disponibilidad o contenido después de la entrega.",
    ],
    steps: [
      {
        title: "Ordenamos el menú",
        body: "Nos compartís la carta actual, precios, categorías y fotografías disponibles. Revisamos qué necesita leer el cliente para elegir, y tu negocio valida ingredientes, disponibilidad y cualquier información sobre alérgenos.",
      },
      {
        title: "Diseñamos la consulta",
        body: "Organizamos los platos para pantallas pequeñas. Definimos si necesitás búsqueda, filtros, idiomas o un enlace para consultas; esas funciones se incluyen únicamente cuando forman parte de la propuesta.",
      },
      {
        title: "Probamos el código QR",
        body: "Comprobamos que el QR abre la dirección correcta desde un celular. Antes de una tirada grande, se prueba una impresión real para revisar contraste, tamaño y distancia de lectura.",
      },
      {
        title: "Publicamos y entregamos",
        body: "Tu equipo revisa el contenido final y recibe los archivos acordados. Dejamos claro cómo se actualiza el menú y qué servicios, como el dominio o el alojamiento, requieren renovación.",
      },
    ],
    faqs: [
      {
        question: "¿El cliente necesita descargar una aplicación?",
        answer:
          "La propuesta de menú web abre una página en el navegador del celular. Se requiere conexión a Internet. El QR es el acceso a esa dirección; también podés compartir el enlace por WhatsApp o redes sociales.",
      },
      {
        question: "¿Puedo cambiar precios sin volver a imprimir el QR?",
        answer:
          "Si el menú conserva la misma dirección, el QR puede seguir apuntando a ella después de cambiar el contenido. La forma de editar los precios depende del sistema elegido: gestión por tu equipo o actualizaciones solicitadas a NUVRO. Lo definimos en la propuesta.",
      },
      {
        question: "¿Incluye pedidos, cobros o conexión con cocina?",
        answer:
          "El menú digital presenta tu oferta. Los pedidos, pagos y conexiones con caja o cocina necesitan un alcance adicional: horarios, disponibilidad, entrega, confirmaciones y herramientas compatibles. Se revisan y cotizan según tu operación.",
      },
      {
        question: "¿Pueden poner el menú en español e inglés?",
        answer:
          "Podemos definir una versión bilingüe dentro del alcance. Antes de publicarla, tu negocio debe aprobar nombres, descripciones, precios e información alimentaria en ambos idiomas. La traducción y sus futuras actualizaciones se contemplan en la propuesta.",
      },
      {
        question: "¿La impresión y el alojamiento están incluidos?",
        answer:
          "La propuesta especifica los archivos digitales entregados. Impresión, soportes físicos, fotografía, dominio y alojamiento pueden tener costes aparte. También se define quién conserva el acceso al dominio para que el QR mantenga su dirección.",
      },
    ],
    demoId: "menu-qr",
  },
  {
    path: "/ia-para-negocios",
    title:
      "IA para negocios en Costa Rica: aprendizaje práctico | NUVRO Engineer",
    description:
      "Aprendé a aplicar inteligencia artificial en tareas de tu negocio: preparar respuestas, ordenar información y evaluar automatizaciones con revisión humana.",
    name: "Aprendé a usar IA en las tareas reales de tu negocio.",
    eyebrow: "IA aplicada / Aprendizaje para negocios",
    intro:
      "No hace falta empezar con un sistema complejo. Podemos revisar una tarea de tu negocio, preparar instrucciones claras y practicar cómo evaluar la respuesta antes de usarla con tus clientes. El objetivo es que entendás qué te ayuda y qué necesita tu criterio.",
    deliverables: [
      "Selección de una tarea concreta: preparar borradores, ordenar información o resumir consultas.",
      "Explicación práctica de qué contexto dar, cómo pedir el resultado y cómo reconocer información que falta.",
      "Ejemplos de instrucciones adaptados al caso y al tono de comunicación de tu negocio.",
      "Criterios de revisión para comprobar datos, claridad y utilidad antes de publicar o enviar una respuesta.",
      "Recomendaciones de manejo de datos acordes con la información que realmente necesitás utilizar.",
      "Un siguiente paso definido: seguir con uso manual, mejorar el proceso o evaluar una automatización.",
    ],
    steps: [
      {
        title: "Traés una situación de trabajo",
        body: "Elegimos algo que hacés con frecuencia, como contestar preguntas sobre un servicio. Utilizamos datos de ejemplo o información autorizada y definimos cómo sería una respuesta útil.",
      },
      {
        title: "Preparamos la instrucción",
        body: "Aportamos contexto, una tarea específica, el formato esperado y límites claros. Si falta un precio o una condición, la instrucción debe pedir ese dato en vez de inventarlo.",
      },
      {
        title: "Revisamos y ajustamos",
        body: "Comparamos el borrador con la información aprobada por tu negocio. Detectamos errores, quitamos afirmaciones sin respaldo y ajustamos el lenguaje hasta que responda a la necesidad.",
      },
      {
        title: "Lo llevás a tu rutina",
        body: "Documentamos el ejemplo y quién revisa el resultado. Si la tarea se repite y tiene reglas claras, podemos evaluar por separado un flujo conectado a tus herramientas.",
      },
    ],
    faqs: [
      {
        question: "¿Necesito saber programar?",
        answer:
          "Para practicar tareas de texto con una herramienta de IA no necesitás empezar programando. Sí necesitás conocer tu negocio y revisar el resultado. Las conexiones con otros sistemas y los agentes automáticos requieren una evaluación técnica adicional.",
      },
      {
        question: "¿Qué tareas podemos trabajar con IA?",
        answer:
          "Podemos explorar borradores de respuestas frecuentes, organización de ideas, resúmenes y preparación de contenido a partir de información que vos confirmes. Primero elegimos un caso y una forma de comprobar si el resultado sirve.",
      },
      {
        question: "¿Las respuestas de la IA siempre son correctas?",
        answer:
          "No. Pueden incluir errores o completar datos que nunca les diste. Por eso practicamos con una fuente aprobada y criterios de revisión. Precios, condiciones comerciales, fechas y afirmaciones sobre tu negocio se comprueban antes de usarlos.",
      },
      {
        question: "¿Puedo usar información de mis clientes?",
        answer:
          "Antes de introducir datos en una herramienta externa conviene revisar su configuración y las autorizaciones aplicables a tu negocio. Para los ejercicios usamos ejemplos y evitamos datos identificables que no sean necesarios. Los accesos y el manejo de información se definen según cada caso.",
      },
      {
        question: "¿Esto incluye una suscripción o un chatbot funcionando?",
        answer:
          "El aprendizaje, las suscripciones a herramientas y el desarrollo de un chatbot son alcances distintos. Definimos el acompañamiento que necesitás y detallamos los costes de plataformas o consumo si aplican. Esta página no supone una integración activa con tus cuentas.",
      },
    ],
    demoId: "ia",
  },
];
