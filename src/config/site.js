/**
 * ARCHIVO DE CONFIGURACION CENTRAL
 * =================================
 * Este es el archivo que debes editar para personalizar tu landing page.
 * Cambia los textos, colores y datos de contacto aqui.
 * Los cambios se aplicaran automaticamente en toda la pagina.
 */

export const siteConfig = {
  // ─────────────────────────────────────────────
  // INFORMACION DEL NEGOCIO
  // ─────────────────────────────────────────────
  name: "ARDITEC",
  tagline: "Imagínalo, nosotros lo hacemos posible.",
  description:
    "Empresa de productos personalizados en Chihuahua, Chih. y en línea para personas, empresas, escuelas, equipos deportivos y gobierno.",

  // ─────────────────────────────────────────────
  // SECCION HERO (la primera pantalla que ven los visitantes)
  // ─────────────────────────────────────────────
  hero: {
    badge: "",
    title: "Imagínalo, nosotros lo hacemos",
    titleHighlight: "posible",
    subtitle: "",
    ctaPrimary: "Cotiza tu proyecto",
    ctaSecondary: "Ver nuestro trabajo",
    ctaTertiary: "Catálogos",
    // Enlace del boton principal. Puedes poner una URL de Calendly o Google Calendar.
    // Ejemplo Calendly: "https://calendly.com/tu-usuario/30min"
    // Ejemplo Google Calendar: "https://calendar.google.com/calendar/appointments/..."
    ctaPrimaryUrl: "/#contact",
    ctaSecondaryUrl: "/galeria",
    ctaTertiaryUrl: "/catalogos",
  },

  // ─────────────────────────────────────────────
  // CINTA DE ACCIONES (fin de casi cada pagina: cotizar, hablar, volver)
  // ─────────────────────────────────────────────
  pageCtaBar: {
    cotizaLabel: "Cotiza tu proyecto",
    cotizaHref: "/#contact",
    hablemosLabel: "Hablemos de tu proyecto",
    hablemosHref: "/#contact",
    homeLabel: "Volver al inicio",
    homeHref: "/",
  },

  // ─────────────────────────────────────────────
  // PAGINA /quienes-somos (contenido de texto sigue en whoWeAre mas abajo)
  // ─────────────────────────────────────────────
  quienesSomosPage: {
    metadata: {
      title: "¿Quiénes somos? | ARDITEC",
      description:
        "Conoce ARDITEC: empresa de personalización con grabado láser, sublimado, vinil, DTF y foil. México, con alcance en Chihuahua y en línea.",
    },
    eyebrow: "Conócenos",
    backHomeLabel: "Volver al inicio",
    logo: "/Imagenes/ARDITEC%20logo%20principal.jpeg",
    ctaLabel: "Cotiza tu proyecto",
    ctaHref: "/#contact",
  },

  // ─────────────────────────────────────────────
  // PAGINA /por-que-arditec (usa los textos de faq)
  // ─────────────────────────────────────────────
  porQueArditecPage: {
    metadata: {
      title: "¿Por qué ARDITEC? | ARDITEC",
      description:
        "Un solo lugar para grabado láser, sublimado, vinil, DTF y más. Valor agregado para personas, empresas e instituciones.",
    },
    eyebrow: "Confianza y valor",
    backHomeLabel: "Volver al inicio",
    logo: "/Imagenes/ARDITEC%20logo%20principal.jpeg",
    ctaLabel: "Hablemos de tu proyecto",
    ctaHref: "/#contact",
  },

  // ─────────────────────────────────────────────
  // PAGINA /preguntas-frecuentes
  // ─────────────────────────────────────────────
  preguntasFrecuentesPage: {
    metadata: {
      title: "Preguntas frecuentes | ARDITEC",
      description:
        "Formatos de archivo para tus diseños (.pdf, .ai, .cdr, .png, .dxf, .dwg) y ayuda para crear o definir tu idea.",
    },
    eyebrow: "Diseño y archivos",
    heading: "Preguntas frecuentes",
    subheading: "Resolvemos tus dudas antes de cotizar",
    logo: "/Imagenes/ARDITEC%20logo%20principal.jpeg",
    ctaLabel: "Cuéntanos tu idea",
    ctaHref: "/#contact",
    items: [
      {
        question: "¿En qué formato debo enviar mis diseños?",
        answer:
          "Los formatos pueden ser: .pdf, .ai, .cdr, .png, .dxf, .dwg.",
      },
      {
        question: "¿Si no tengo un diseño, me pueden ayudar a diseñarlo?",
        answer:
          "Sí, claro: nos das la idea de lo que quieres y lo diseñamos.",
      },
      {
        question: "¿Me pueden ayudar con ideas? No tengo claro lo que quiero",
        answer:
          "Claro que sí: mándanos mensaje y te ayudamos a definir qué es lo que quieres.",
      },
      {
        question: "¿Puedo ver cómo quedó el diseño antes de que se realice el trabajo?",
        answer:
          "Claro que sí: dentro de nuestro proceso hacemos el diseño y te lo enviamos para que lo revises a detalle y, ya cuando lo autorices, es cuando procedemos a realizar el trabajo.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // GALERIA /galeria — trabajos por técnica (edita listas de imágenes aquí)
  // ─────────────────────────────────────────────
  gallery: {
    metadata: {
      title: "Galería de trabajos | ARDITEC",
      description:
        "Ejemplos de grabado y corte láser, vinil, sublimado, foil y más. ARDITEC, Chihuahua y en línea.",
    },
    heroEyebrow: "Portfolio",
    heading: "Galería de trabajos",
    subheading:
      "Separado por técnica para que encuentres referencias alineadas con tu proyecto.",
    logo: "/Imagenes/ARDITEC%20logo%20principal.jpeg",
    jumpNavIntro: "Saltar a:",
    /** Etiqueta del enlace al inicio de la galería (menú superior y salto rápido). */
    navAllLabel: "Todo",
    emptyMessage: "Pronto añadiremos más ejemplos en esta categoría.",
    sections: [
      {
        id: "galeria-grabado-laser",
        navLabel: "Grabado láser",
        title: "Grabado y corte láser",
        description:
          "Acrílico, madera, termos, reconocimientos, llaveros y piezas con corte o grabado de alta precisión.",
        imageGroups: [
          {
            title: "Termos",
            images: [
              { src: "/Imagenes/termo%20ae%20fin.jpg", alt: "Termo personalizado con grabado láser sobre recubrimiento" },
              { src: "/Imagenes/termo%201.png", alt: "Termo con diseño grabado a láser" },
              { src: "/Imagenes/termos%203.png", alt: "Variantes de termos con grabado personalizado" },
              { src: "/Imagenes/valdez2.jpg", alt: "Botella o termo oscuro con retrato y nombre grabados" },
              { src: "/Imagenes/porfirio.jpg", alt: "Termo Yeti blanco grabado láser con retrato y firma estilo Porfirio Díaz" },
              {
                src: "/Imagenes/fba1.jpg",
                alt: "Dos termos Yeti grabados láser con logotipos deportivos sobre recubrimiento de color",
              },
              {
                src: "/Imagenes/Termo%20Dart%20Bader%20con%20fondo.jpeg",
                alt: "Termo con diseño grabado (Dart Bader) con fondo",
              },
              {
                src: "/Imagenes/Termo%20vaqueros%20con%20fondo.jpeg",
                alt: "Termo con diseño grabado de vaqueros con fondo",
              },
            ],
          },
          {
            title: "Tarjetas metálicas",
            images: [
              {
                src: "/Imagenes/bart.jpg",
                alt:
                  "Tarjeta metálica en proceso de grabado láser con diseño personalizado y texto grabado",
              },
              {
                src: "/Imagenes/BBVA%202.jpg",
                alt: "Tarjeta metálica dorada grabado láser con logos BBVA, Visa y diseño puntual láser visible",
              },
              {
                src: "/Imagenes/delicias.jpg",
                alt: "Tarjeta premium negra con grabado láser dorado marca Las Delicias y texto personalizado",
              },
              {
                src: "/Imagenes/JONA.jpg",
                alt: "Tarjeta metálica con grabado láser tipo producto marca o evento",
              },
              {
                src: "/Imagenes/Tarjeta%20Sergio.jpeg",
                alt: "Tarjeta metálica negra premium con grabado dorado estilo credencial",
              },
              {
                src: "/Imagenes/Tarjeta%20met%C3%A1lica%20As.jpg",
                alt: "Tarjeta metálica personalizada con grabado láser (As de espadas)",
              },
            ],
          },
          {
            title: "Cajas de acrílico",
            images: [
              { src: "/Imagenes/caja%201.jpg", alt: "Caja decorativa grabada láser sobre madera o material rígido" },
              { src: "/Imagenes/caja1.jpg", alt: "Caja personalizada con detalle cortado y grabado a láser" },
              { src: "/Imagenes/caja2.jpg", alt: "Caja de presentación en madera con acabados grabados láser" },
              {
                src: "/Imagenes/Caja%20Ashley.jpeg",
                alt: "Caja de acrílico espejo con tapa ranurada y texto grabado para celebración de XV años",
              },
              {
                src: "/Imagenes/Caja%20Gaby.jpeg",
                alt: "Caja buzón boda en acrílico oro espejo con monograma y fechas grabadas a láser",
              },
            ],
          },
          {
            title: "Reconocimientos",
            images: [
              {
                src: "/Imagenes/Reconocimiento.jpeg",
                alt: "Reconocimiento en acrílico con corte láser en forma de auto clásico, grabado «Best Classic Winner» y base de madera",
              },
              { src: "/Imagenes/reconocimiento%20redondo.png", alt: "Reconocimiento circular en acrílico grabado" },
              { src: "/Imagenes/reconocimientose.jpg", alt: "Placa o reconocimiento con grabado institucional" },
              { src: "/Imagenes/reconocimvis.jpg", alt: "Galardón en acrílico con texto grabado" },
              {
                src: "/Imagenes/Trofeos.jpeg",
                alt: "Trofeos en acrílico grabado con texto y siluetas para premiación",
              },
            ],
          },
          {
            title: "Cake topper",
            images: [
              { src: "/Imagenes/cktp.png", alt: "Topper sobre pastel con lettering y elementos cortados a láser" },
              {
                src: "/Imagenes/CKTP1.jpg",
                alt: "Pastel con topper de acrílico tipo espejo cortado a láser con nombre en caligrafía",
              },
              {
                src: "/Imagenes/Cake%20Tp%20coraz%C3%B3n.jpeg",
                alt: "Pastel nupcial con topper y corazones en acrílico dorado cortado y grabado a láser",
              },
            ],
          },
          {
            title: "Pizarrones",
            images: [
              {
                src: "/Imagenes/Pizarr%C3%B3n.jpeg",
                alt: "Pizarrón familiar en acrílico transparente con calendario y secciones grabadas a láser",
              },
            ],
          },
          {
            title: "Plumas",
            images: [
              {
                src: "/Imagenes/Pluma%20Pantalen%202.jpeg",
                alt: "Pluma negra con acabado plateado y grabado láser vertical: Tte. Cor. M.C. Jaime Jesús Wittman Pantaleón",
              },
              {
                src: "/Imagenes/Pluma%202.jpeg",
                alt: "Juego de plumas personalizadas con grabado script y presentación de regalo",
              },
              {
                src: "/Imagenes/Pluma%20Ingrid%203.jpeg",
                alt: "Pluma plateada en estuche con grabado láser a mano alzada: Lic. Ingrid Rocha",
              },
            ],
          },
          {
            title: "Esferas",
            images: [
              {
                src: "/Imagenes/Esferas%20Acr%C3%ADlico.jpg",
                alt: "Esferas navideñas personalizadas en acrílico con corte láser",
              },
              {
                src: "/Imagenes/Esferas%20MDF.jpg",
                alt: "Esferas navideñas personalizadas en MDF cortado a láser",
              },
            ],
          },
          {
            title: "Llaveros",
            images: [
              { src: "/Imagenes/llaveros%20grabados.jpg", alt: "Llaveros personalizados grabados con detalle" },
              {
                src: "/Imagenes/Llaveros.jpg",
                alt: "Llaveros personalizados con grabado láser sobre placas metálicas",
              },
            ],
          },
          {
            title: "Letreros",
            images: [
              {
                src: "/Imagenes/Letrero.jpeg",
                alt: "Letrero de bienvenida para boda en acrílico negro con nombres en relieve dorado cortado a láser",
              },
              {
                src: "/Imagenes/Letrero%20Gaby.jpeg",
                alt: "Letrero de bienvenida en acrílico oro con tipografía y monograma para evento",
              },
              {
                src: "/Imagenes/Letrero%20Dra.jpeg",
                alt: "Letrero para consultorio con nombre en acabado tipo metálico",
              },
              {
                src: "/Imagenes/Letrero%20Vero.jpg",
                alt: "Letrero luminoso circular personalizado para negocio",
              },
              {
                src: "/Imagenes/Rzr.jpeg",
                alt: "Rótulo mural tipo relieve con logo cortado a láser para barbería",
              },
              {
                src: "/Imagenes/MEVAK.png",
                alt: "Letrero o pieza de señalética grabada con marca MEVAK",
              },
              {
                src: "/Imagenes/numeromesa.png",
                alt: "Letrero de numeración de mesa cortado y grabado",
              },
            ],
          },
          {
            title: "Varios",
            images: [
              { src: "/Imagenes/usb.png", alt: "USB y caja de presentación en madera grabada" },
              { src: "/Imagenes/a1.jpg", alt: "Medallón tipo cadena con grabado láser sobre metal" },
              {
                src: "/Imagenes/Vela%20E%26C.jpeg",
                alt: "Tapa de madera para vela cuadrada con iniciales y fecha grabadas a láser",
              },
              {
                src: "/Imagenes/porta%202.jpg",
                alt: "Marco de madera con acrílico iluminado grabado láser texto y dibujo tipo aniversario",
              },
              {
                src: "/Imagenes/Mezclador.jpg",
                alt: "Accesorio personalizado para evento con corte láser",
              },
            ],
          },
        ],
      },
      {
        id: "galeria-vinil-corte",
        navLabel: "Vinil de corte",
        title: "Vinil de corte",
        description:
          "Calcomanías y rotulación de un solo color o capas, ideales para superficies lisas y señalética.",
        images: [
          { src: "/Imagenes/imperio7.png", alt: "Diseño aplicado con vinil de corte" },
          {
            src: "/Imagenes/GQ.png",
            alt:
              "Fachada acristalada con vinil de corte efecto vidrio arenado: logotipo, servicios y señalética de empresa",
          },
          {
            src: "/Imagenes/B%26BW.jpeg",
            alt:
              "Stand promocional retail con envolvente en vinil de gran formato, lettering blanco y decoración tipo copos de nieve",
          },
          {
            src: "/Imagenes/Pizarr%C3%B3n.jpeg",
            alt:
              "Pizarrón organizador en acrílico con calendario y texto en vinil de corte blanco sobre superficie transparente",
          },
          {
            src: "/Imagenes/Vasos%20Gaby.jpeg",
            alt: "Vasos o termos personalizados con monograma en vinil metálico dorado sobre acabado mate",
          },
          { src: "/Imagenes/Vinil%20Rosario.jpg", alt: "Vinil de corte aplicado en playeras (Rosario)" },
          { src: "/Imagenes/Vinil%20vasos.jpg", alt: "Vinil de corte aplicado en vasos (vasos personalizados)" },
        ],
      },
      {
        id: "galeria-vinil-textil",
        navLabel: "Vinil textil",
        title: "Vinil textil",
        description:
          "Textil con nombres, números y logotipos termotransferidos para uniformes y prendas.",
        images: [
          { src: "/Imagenes/playera.png", alt: "Playera con diseño en vinil textil" },
          { src: "/Imagenes/Botas%20vinil.jpg", alt: "Botas personalizadas con vinil textil" },
          { src: "/Imagenes/Emi%20vinil%20textil.jpg", alt: "Diseño personalizado en vinil textil (Emi)" },
          {
            src: "/Imagenes/Mochila%20con%20fondo.jpeg",
            alt: "Mochila personalizada con vinil textil",
          },
        ],
      },
      {
        id: "galeria-foil",
        navLabel: "Foil",
        title: "Foil",
        description:
          "Acabados metalizados con brillo elegante en papel, tarjetas o detalles en productos.",
        images: [
          {
            src: "/Imagenes/botella%201.jpg",
            alt: "Botella de vino rosado con etiqueta personalizada en foil oro rosa para San Valentín",
          },
          {
            src: "/Imagenes/botella%202.jpg",
            alt: "Botella de vino rosado con etiqueta en foil cobre y texto ‘I Love You’",
          },
          {
            src: "/Imagenes/botella%203.jpg",
            alt: "Botella de vino con etiqueta personalizada en foil rose gold tipo mensaje de San Valentín",
          },
          {
            src: "/Imagenes/botella%204.jpg",
            alt:
              "Botella de vino personalizada con etiqueta en foil dorado con mensaje de agradecimiento y moño de satín",
          },
          {
            src: "/Imagenes/Botella%20Pili%20y%20Martin.jpeg",
            alt:
              "Botella de vino en caja de madera con virutas, moño dorado y etiqueta de aniversario 30 con nombres Martin y Pily y mensaje de bendición",
          },
        ],
      },
      {
        id: "galeria-sublimado",
        navLabel: "Sublimado",
        title: "Sublimado",
        description:
          "Tazas y piezas cerámicas o poliéster claras con fotos y colores vivos que quedan integrados al material.",
        images: [
          { src: "/Imagenes/taza%202.jpg", alt: "Par de tazas sublimadas con diseño personalizado" },
          { src: "/Imagenes/taza%203.jpg", alt: "Taza sublimada con ilustración o texto" },
          { src: "/Imagenes/taza%204.jpg", alt: "Taza sublimada a color sobre cerámica blanca" },
          { src: "/Imagenes/taza%205.jpg", alt: "Taza sublimada para regalo o evento" },
          { src: "/Imagenes/taza2.jpg", alt: "Producto sublimado tipo taza personalizada" },
          { src: "/Imagenes/taza3.jpg", alt: "Taza con impresión por sublimación" },
          { src: "/Imagenes/Teem%20work.jpg", alt: "Producto sublimado con diseño (Teem work)" },
          { src: "/Imagenes/Taza%20MK.jpg", alt: "Taza sublimada personalizada (Taza MK)" },
        ],
      },
      {
        id: "galeria-dtf",
        navLabel: "DTF",
        /** Texto en el menú desplegable “Ver nuestro trabajo” (título largo va en `title`). */
        galleryNavParentLabel: "DTF",
        title: "DTF (Direct to Film)",
        description:
          "Transferencia con colores ilimitados y detalle fino sobre playeras, sudaderas y textiles; ideal para ilustraciones complejas.",
        images: [
          { src: "/Imagenes/Playera%20Super%20pap%C3%A1.jpg", alt: "Playera personalizada estilo Super papá (DTF)" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // QUIENES SOMOS (seccion dedicada; edita los parrafos aqui)
  // ─────────────────────────────────────────────
  whoWeAre: {
    heading: "¿Quiénes somos?",
    paragraphs: [
      "En ARDITEC, transformamos objetos ordinarios en piezas extraordinarias. Somos una empresa mexicana fundada en 2023, la cual nació con el fin de ofrecer soluciones integrales de personalización con los más altos estándares de calidad.",
      "Contamos con tecnología de vanguardia para ejecutar proyectos precisos y duraderos, utilizando técnicas como: Corte y grabado láser para detalles impecables, Sublimación y DTF para colores vibrantes, Vinil textil y de corte para diseños personalizados, Aplicación en Foil para un acabado premium.",
      "Nuestra experiencia técnica y pasión por el detalle nos convierten en el aliado estratégico que tu marca o evento necesita. Si lo puedes imaginar, lo podemos crear.",
    ],
  },

  // ─────────────────────────────────────────────
  // BENEFICIOS / FEATURES (seccion de caracteristicas)
  // ─────────────────────────────────────────────
  features: {
    heading: "Productos por técnica",
    subheading:
      "Un sólo lugar, la técnica correcta. Asesoramos y ejecutamos según tu proyecto, material y objetivo.",
    /** Texto del enlace a la galería por técnica (`/galeria#` + gallerySectionId de cada ítem). */
    galleryLinkLabel: "Ver nuestro trabajo",
    items: [
      {
        icon: "lightning",
        title: "Grabado y corte láser",
        gallerySectionId: "galeria-grabado-laser",
        image: "/Imagenes/Trofeos.jpeg",
        descriptionBlocks: [
          {
            label: "¿Qué es?",
            text:
              "Un rayo de luz de alta precisión que corta o quema superficies con detalle milimétrico.",
          },
          {
            label: "Ideal para:",
            text:
              "Madera, acrílico, piel y metales (grabado). Perfecto para reconocimientos, letreros calados o llaveros personalizados.",
          },
        ],
      },
      {
        icon: "mobile",
        title: "Sublimado",
        gallerySectionId: "galeria-sublimado",
        image: "/Imagenes/taza%202.jpg",
        descriptionBlocks: [
          {
            label: "¿Qué es?",
            text:
              "La tinta se gasifica con calor y se funde directamente con el material, volviéndose parte de él.",
          },
          {
            label: "Ideal para:",
            text:
              "Tazas, termos, gorras y prendas de poliéster blancas o claras. ¡Es imperceptible al tacto y no se borra nunca!",
          },
        ],
      },
      {
        icon: "settings",
        title: "Vinil Textil",
        gallerySectionId: "galeria-vinil-textil",
        image: "/Imagenes/playera.png",
        descriptionBlocks: [
          {
            label: "¿Qué es?",
            text:
              "Láminas delgadas de polímero que se cortan y se aplican sobre tela mediante calor, creando diseños duraderos y de acabado profesional.",
          },
          {
            label: "Ideal para:",
            text:
              "Números y nombres en uniformes deportivos, logotipos corporativos y cualquier personalización sobre tela.",
          },
        ],
      },
      {
        icon: "settings",
        title: "Vinil de Corte",
        gallerySectionId: "galeria-vinil-corte",
        image: "/Imagenes/Vasos%20Gaby.jpeg",
        descriptionBlocks: [
          {
            label: "¿Qué es?",
            text:
              "Calcomanías de un solo color cortadas con precisión que se adhieren fácilmente a superficies lisas, logrando un acabado limpio y profesional.",
          },
          {
            label: "Ideal para:",
            text:
              "Rotulación de vehículos, decoración de paredes, personalización de termos y señalética en oficinas o escuelas.",
          },
        ],
      },
      {
        icon: "settings",
        title: "DTF (Direct to Film)",
        gallerySectionId: "galeria-dtf",
        image: "/Imagenes/Playera%20Super%20pap%C3%A1.jpg",
        descriptionBlocks: [
          {
            label: "¿Qué es?",
            text:
              "Impresión digital de alta resolución que se transfiere directamente sobre la tela mediante calor, permitiendo diseños con colores ilimitados, degradados y detalles finos sin restricciones.",
          },
          {
            label: "Ideal para:",
            text:
              "Playeras, sudaderas, gorras y cualquier prenda de tela, especialmente cuando el diseño tiene muchos colores o ilustraciones detalladas.",
          },
        ],
      },
      {
        icon: "settings",
        title: "Foil",
        gallerySectionId: "galeria-foil",
        image: "/Imagenes/botella%202.jpg",
        descriptionBlocks: [
          {
            label: "¿Qué es?",
            text:
              "Un acabado metalizado de alto brillo que aporta elegancia y distinción a cualquier diseño, con un efecto visual impactante digno de las mejores marcas.",
          },
          {
            label: "Ideal para:",
            text:
              "Invitaciones especiales, tarjetas de presentación y detalles en prendas o productos que busquen destacar con el brillo del oro, la plata u otros acabados metálicos.",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PRECIOS (planes de pago)
  // ─────────────────────────────────────────────
  pricing: {
    heading: "Nuestras líneas de producto",
    subheading:
      "Elige la categoría que más se parece a tu proyecto y explora ejemplos reales.",
    plans: [
      {
        name: "Línea Promocional",
        price: "Termos",
        period: " y accesorios",
        description: "Identidad y regalo corporativo",
        features: [
          "Termos personalizados",
          "Plumas y llaveros",
          "Imanes promocionales",
          "Tazas para marca o evento",
        ],
        cta: "Ver imágenes",
        ctaHref: "/imagenes/linea-promocional",
        highlighted: false,
      },
      {
        name: "Línea Comercial",
        price: "Rotulado",
        period: " e imagen",
        description: "Visibilidad para tu negocio",
        features: [
          "Letreros de acrílico",
          "Rotulado de ventanas",
          "Rotulado de vehículos",
        ],
        cta: "Ver imágenes",
        ctaHref: "/imagenes/linea-comercial",
        highlighted: true,
      },
      {
        name: "Línea Textil",
        price: "Playeras",
        period: " y uniformes",
        description: "Para equipos y eventos",
        features: [
          "Vinil textil",
          "DTF",
          "Maletas y textiles",
          "Sudaderas",
        ],
        cta: "Ver imágenes",
        ctaHref: "/imagenes/linea-textil",
        highlighted: false,
      },
      {
        name: "Eventos sociales",
        price: "Detalles",
        period: " personalizados",
        description: "Para bodas, cumpleaños y celebraciones",
        features: [
          "Cajas de acrílico",
          "Reconocimientos",
          "Cake topper",
          "Letreros",
          "Vasos",
        ],
        cta: "Ver imágenes",
        ctaHref: "/imagenes/eventos-sociales",
        highlighted: true,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // IMAGENES POR LINEA DE PRODUCTO (/imagenes/[linea])
  // Referencia subgrupos o secciones de gallery.sections (sin duplicar rutas).
  // picks: { sectionId, groupTitle? } | { sectionId, displayTitle? } sección completa
  //        | { sectionId, displayTitle, imageSrcs[] } imágenes concretas de una sección plana
  // ─────────────────────────────────────────────
  productLines: {
    metadata: {
      titleSuffix: "Imágenes | ARDITEC",
      description:
        "Ejemplos reales de productos personalizados ARDITEC, organizados por línea de producto.",
    },
    galleryLinkLabel: "Ver galería completa por técnica",
    galleryHref: "/galeria",
    backToLinesLabel: "Volver a líneas de producto",
    backToLinesHref: "/#pricing",
    emptyMessage: "Pronto añadiremos más ejemplos en esta línea.",
    lines: [
      {
        id: "linea-promocional",
        name: "Línea Promocional",
        description: "Termos, plumas, llaveros y tazas para regalo corporativo o promocional.",
        picks: [
          { sectionId: "galeria-grabado-laser", groupTitle: "Termos" },
          { sectionId: "galeria-grabado-laser", groupTitle: "Plumas" },
          { sectionId: "galeria-grabado-laser", groupTitle: "Llaveros" },
          { sectionId: "galeria-sublimado", displayTitle: "Tazas para marca o evento" },
        ],
      },
      {
        id: "linea-comercial",
        name: "Línea Comercial",
        description: "Letreros, rotulado de ventanas y señalética para dar visibilidad a tu negocio.",
        picks: [
          { sectionId: "galeria-grabado-laser", groupTitle: "Letreros" },
          {
            sectionId: "galeria-vinil-corte",
            displayTitle: "Rotulado comercial",
            imageSrcs: [
              "/Imagenes/GQ.png",
              "/Imagenes/B%26BW.jpeg",
              "/Imagenes/imperio7.png",
            ],
          },
        ],
      },
      {
        id: "linea-textil",
        name: "Línea Textil",
        description: "Playeras, uniformes, maletas y sudaderas con vinil textil y DTF.",
        picks: [
          { sectionId: "galeria-vinil-textil", displayTitle: "Vinil textil y maletas" },
          { sectionId: "galeria-dtf", displayTitle: "DTF" },
        ],
      },
      {
        id: "eventos-sociales",
        name: "Eventos sociales",
        description: "Detalles personalizados para bodas, cumpleaños y celebraciones.",
        picks: [
          { sectionId: "galeria-grabado-laser", groupTitle: "Cajas de acrílico" },
          { sectionId: "galeria-grabado-laser", groupTitle: "Reconocimientos" },
          { sectionId: "galeria-grabado-laser", groupTitle: "Cake topper" },
          { sectionId: "galeria-grabado-laser", groupTitle: "Letreros" },
          {
            sectionId: "galeria-vinil-corte",
            displayTitle: "Vasos",
            imageSrcs: ["/Imagenes/Vasos%20Gaby.jpeg", "/Imagenes/Vinil%20vasos.jpg"],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // CATALOGOS (lamina visual + enlace a imagen en /public/Imagenes)
  // Usa %20 para espacios y %C3%A1 para acentos en rutas publicas.
  // ─────────────────────────────────────────────
  catalog: {
    metadata: {
      title: "Catálogos | ARDITEC",
      description:
        "Explora los catálogos de ARDITEC: termos, plumas, tarjetas metálicas, cajas acrílico, welcome sign y más.",
    },
    badge: "Catálogos",
    heading: "Explora nuestros catálogos",
    /** Texto debajo del título en /catalogos (vista ampliada al hacer clic). */
    thumbnailHint: "Pulsa cada imagen o catálogo PDF para verlo en grande.",
    items: [
      {
        id: "termos",
        title: "Termos personalizados",
        image: "/Imagenes/CAT%20Termos.jpeg",
      },
      {
        id: "plumas",
        title: "Plumas ARDITEC",
        image: "/Imagenes/CAT%20Plumas.png",
        pdf: "/Imagenes/CAT%20ARDI%20PLUMAS.pdf",
      },
      {
        id: "libretas-agendas-carpetas",
        title: "Libretas, agendas y carpetas",
        image: "/Imagenes/CAT%20Agendas.png",
        pdf: "/Imagenes/CAT%20libretas%2C%20agendas%20y%20carpetas.pdf",
      },
      {
        id: "vinos",
        title: "Vinos",
        image: "/Imagenes/CAT%20Agendas.png",
        pdf: "/Imagenes/CAT%20vinos.pdf",
      },
      {
        id: "catalogo-general",
        title: "Catálogo general",
        image: "/Imagenes/CAT%20Agendas.png",
        pdf: "/Imagenes/catalogo.pdf",
      },
      {
        id: "cajas-acrilico",
        title: "Cajas acrílico",
        image: "/Imagenes/CAJAS_ACRILICO_pagina1.png",
      },
      {
        id: "detalles-sociales",
        title: "Detalles sociales 2025",
        image: "/Imagenes/DETALLES_SOCIALES_25_pagina1.png",
      },
      {
        id: "welcome-sign",
        title: "Welcome sign",
        image: "/Imagenes/WELCOME_SIGN_pagina1.png",
        pdf: "/Imagenes/WELCOME%20SIGN.pdf",
      },
    ],
    /** Subsecciones con varias imágenes bajo un mismo título. */
    groups: [
      {
        id: "tarjetas-metalicas",
        title: "Tarjetas Metálicas",
        items: [
          {
            id: "tarjetas-1",
            title: "Dual Sim y acabados",
            image: "/Imagenes/Tarjetas%201.jpeg",
          },
          {
            id: "tarjetas-2",
            title: "Acabados cepillado y espejo",
            image: "/Imagenes/Tarjetas%202.jpeg",
          },
          {
            id: "tarjetas-3",
            title: "Diseños populares",
            image: "/Imagenes/Tarjetas%203.jpeg",
          },
          {
            id: "tarjetas-4",
            title: "Diseños logotipos",
            image: "/Imagenes/Tarjetas%204.jpeg",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PREGUNTAS FRECUENTES (FAQ)
  // ─────────────────────────────────────────────
  faq: {
    heading: "¿Por qué ARDITEC?",
    subheading: "Confianza",
    items: [
      {
        question: "Todo en un solo lugar",
        answer:
          "Grabado láser, sublimado, vinil de corte, vinil textil, foil, DTF e impresión bajo el mismo techo. Sin intermediarios, sin complicaciones. Tú describes lo que necesitas y nosotros lo resolvemos.",
      },
      {
        question: "Para ti, para tu empresa, para tu institución",
        answer:
          "Trabajamos con personas que buscan un regalo único, empresas que quieren artículos promocionales con impacto, instituciones educativas que buscan identidad y reconocimiento para su comunidad, y gobierno o instituciones con pedidos especiales. Nos adaptamos a ti, no al revés.",
      },
      {
        question: "Del concepto al objeto, sin perder tu esencia",
        answer:
          "No solo reproducimos un archivo. Te acompañamos en el proceso para que el resultado final sea exactamente lo que tenías en mente.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SECCION DE CONTACTO
  // ─────────────────────────────────────────────
  contact: {
    heading: "Cuéntanos tu idea",
    subheading:
      "Llena el formulario y te contactamos con una propuesta hecha a la medida de tu proyecto.",
    // URL para agendar una cita (Calendly o Google Calendar)
    // Si no tienes, deja el valor vacio: ""
    schedulingUrl: "",
    schedulingCta: "Agendar asesoría",
    whatsappNumber: "6143819928",
    /** Texto del enlace tel: (mismo número que WhatsApp, sin editar en dos sitios). */
    callCta: "Llamar",
    /** Etiqueta encima del botón de WhatsApp (sección contacto). */
    whatsappHelper: "¿Prefieres escribirnos directo?",
    /** Etiqueta encima del botón de llamada (mismo número que WhatsApp). */
    callHelper: "¿Prefieres llamarnos?",
    whatsappCta: "Contáctanos por WhatsApp",
    form: {
      nameLabel: "Nombre completo",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tucorreo@ejemplo.com",
      phoneLabel: "Teléfono / WhatsApp",
      // true = el visitante debe escribir telefono antes de enviar (validacion en el formulario).
      phonePlaceholder: "+52 555 000 0000",
      phoneRequired: true,
      /** Texto para lectores de pantalla en campos obligatorios (después del asterisco visual). */
      fieldRequiredNote: "obligatorio",
      servicePlaceholder: "Selecciona un servicio",
      serviceOptions: [
        "Grabado y corte láser",
        "Sublimado",
        "Vinil",
        "Vinil textil",
        "DTF",
        "Impresión",
      ],
      messagePlaceholder:
        "Cuéntanos qué tienes en mente, cantidades, fechas...",
      submitButton: "Enviar mi idea",
      sendingButton: "Enviando mi idea...",
      successMessage:
        "¡Recibimos tu idea! En menos de 24 horas nos pondremos en contacto contigo",
      errorMessage:
        "Ocurrió un error al enviar. Inténtalo de nuevo.",
    },
    // Datos de contacto opcionales para mostrar en el footer o sidebar
    email: "contacto@arditec.mx",
    phone: "(614) 000 0000",
    address: "Chihuahua, Chih., México",
  },

  /** Botón flotante de WhatsApp (esquina inferior derecha en la página principal). Usa el mismo número que contact.whatsappNumber. */
  floatingWhatsapp: {
    enabled: true,
    ariaLabel: "Escríbenos por WhatsApp",
  },
  /** Botón flotante de llamada (esquina inferior izquierda). Usa el mismo número que contact.whatsappNumber. */
  floatingCall: {
    enabled: true,
    ariaLabel: "Llámanos por teléfono",
    label: "¡Llámanos!",
  },

  // ─────────────────────────────────────────────
  // NAVEGACION
  // ─────────────────────────────────────────────
  nav: {
    links: [
      { label: "Inicio", href: "/#hero" },
      { label: "Productos por técnica", href: "/#features" },
      { label: "Nuestros productos", href: "/#pricing" },
      { label: "Ver nuestro trabajo", href: "/galeria", galleryNav: true },
      { label: "Catálogos", href: "/catalogos" },
      { label: "Contacto", href: "/#contact" },
    ],
  },

  search: {
    placeholder: "Buscar productos y servicios",
    emptyMessage: "Sin resultados. Prueba con: termos, vinil, sublimado, letreros.",
    items: [
      {
        label: "Ver nuestro trabajo",
        href: "/galeria",
        keywords: ["galería", "galeria", "fotos", "imágenes", "portfolio", "portafolio", "trabajos", "ejemplos", "trabajo"],
      },
      { label: "Grabado y corte láser", href: "/#features", keywords: ["láser", "laser", "grabado", "corte", "acrílico", "acrilico", "pizarrones", "plumas", "llaveros"] },
      { label: "Sublimado", href: "/#features", keywords: ["sublimado", "tazas", "placas", "imanes"] },
      {
        label: "Vinil Textil",
        href: "/#features",
        keywords: ["vinil", "vinil textil", "textil", "playeras", "maletas", "uniformes", "logo"],
      },
      {
        label: "Vinil de Corte",
        href: "/#features",
        keywords: [
          "vinil de corte",
          "calcomanía",
          "calcomanias",
          "rotulación",
          "rotulacion",
          "vehículos",
          "vehiculos",
          "paredes",
          "termos",
          "señalética",
          "senaletica",
          "oficinas",
          "escuelas",
        ],
      },
      {
        label: "DTF (Direct to Film)",
        href: "/#features",
        keywords: ["dtf", "direct to film", "transferencia", "digital", "degradados", "gorras"],
      },
      {
        label: "Foil",
        href: "/#features",
        keywords: [
          "foil",
          "metalizado",
          "metal",
          "oro",
          "plata",
          "invitaciones",
          "tarjetas",
          "brillo",
          "acabados",
        ],
      },
      { label: "Línea Promocional", href: "/#pricing", keywords: ["termos", "plumas", "llaveros", "imanes", "tazas"] },
      { label: "Línea Comercial", href: "/#pricing", keywords: ["rotulado", "ventanas", "vehículos", "vehiculos", "letreros"] },
      { label: "Línea Textil", href: "/#pricing", keywords: ["playeras", "uniformes", "textil", "dtf", "sudaderas"] },
      {
        label: "Eventos sociales",
        href: "/#pricing",
        keywords: [
          "eventos",
          "bodas",
          "cumpleaños",
          "cumpleanos",
          "cajas acrílico",
          "cajas acrilico",
          "reconocimientos",
          "cake topper",
          "letreros",
          "vasos",
        ],
      },
      { label: "Contacto", href: "/#contact", keywords: ["cotización", "cotizacion", "contacto", "mensaje", "asesoría", "asesoria"] },
      { label: "Nuestro valor agregado", href: "/por-que-arditec", keywords: ["valor", "faq", "preguntas", "tiempos", "empresas", "gobierno"] },
      {
        label: "¿Quiénes somos?",
        href: "/quienes-somos",
        keywords: ["quienes", "somos", "empresa", "arditec", "nosotros", "historia"],
      },
      {
        label: "Preguntas frecuentes",
        href: "/preguntas-frecuentes",
        keywords: [
          "preguntas",
          "frecuentes",
          "formato",
          "diseño",
          "diseno",
          "pdf",
          "ai",
          "cdr",
          "png",
          "dxf",
          "dwg",
          "archivo",
          "ideas",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // CÓDIGO DE ÉTICA (pagina exclusiva /codigo-de-etica)
  // ─────────────────────────────────────────────
  ethicsCode: {
    metadata: {
      title: "Código de ética | ARDITEC",
      description:
        "Misión, valores y principios éticos de ARDITEC: tratamiento del cliente, privacidad, integridad institucional y responsabilidad con el entorno.",
    },
    backHomeLabel: "Volver al inicio",
    heroEyebrow: "Ética institucional",
    heading: "CÓDIGO DE ÉTICA",
    logo: "/Imagenes/ARDITEC%20logo%20principal.jpeg",
    motto:
      "\"Imagínalo, nosotros lo hacemos posible\"",
    sections: [
      {
        roman: "I",
        title: "Misión y Propósito",
        paragraphs: [
          "En ARDITEC fusionamos el arte, el diseño y la tecnología para dar vida a las ideas de nuestros clientes. Nos comprometemos a entregar artículos personalizados que superen las expectativas, combinando precisión técnica con un trato cercano y humano.",
        ],
      },
      {
        roman: "II",
        title: "Nuestros Pilares",
        intro: "Arte • Diseño • Tecnología",
        items: [
          {
            heading: "Excelencia en el Arte",
            body:
              "Cuidamos la estética y los acabados en cada técnica que ofrecemos: Láser, Sublimación, DTF, Vinil y Foil.",
          },
          {
            heading: "Compromiso con el Diseño",
            body:
              "Respetamos la creatividad original de cada cliente y brindamos asesoría para lograr el mejor resultado visual posible.",
          },
          {
            heading: "Dominio de la Tecnología",
            body:
              "Operamos nuestras herramientas con responsabilidad, actualización constante y compromiso con la calidad.",
          },
        ],
      },
      {
        roman: "III",
        title: "Relación Ética con el Cliente",
        items: [
          {
            heading: "Honestidad Técnica",
            body:
              "Recomendamos siempre la técnica más adecuada para la durabilidad y apariencia del producto, priorizando el beneficio del cliente por encima del beneficio económico propio.",
          },
          {
            heading: "Transparencia en Precios",
            body:
              "Cada presupuesto será claro, detallado y respetado conforme a las condiciones acordadas, sin costos ocultos ni sorpresas.",
          },
          {
            heading: "Puntualidad y Compromiso",
            body:
              "Entendemos que detrás de cada pedido hay un evento, una empresa o un sueño. Cumplir en tiempo y forma no es solo una meta, es nuestra responsabilidad.",
          },
        ],
      },
      {
        roman: "IV",
        title: "Política de Privacidad y Redes Sociales",
        items: [
          {
            heading: "Autorización de Uso",
            body:
              "Nuestro trabajo es nuestro portafolio. Sin embargo, solicitaremos consentimiento antes de publicar fotografías de pedidos finales en nuestras plataformas.",
          },
          {
            heading: "Protección del Factor Sorpresa",
            body:
              "No publicaremos trabajos destinados a eventos específicos hasta que estos hayan concluido.",
          },
          {
            heading: "Privacidad de Datos",
            body:
              "Nunca expondremos información sensible del cliente —teléfonos, códigos privados o datos personales— en ninguna plataforma digital.",
          },
          {
            heading: "Derecho de Exclusión",
            body:
              "Si el cliente desea que su diseño permanezca privado, su decisión será respetada de manera absoluta y sin excepciones.",
          },
        ],
      },
      {
        roman: "V",
        title: "Integridad Institucional",
        items: [
          {
            heading: "Cero Tolerancia a la Corrupción",
            body:
              "En nuestras relaciones con instituciones gubernamentales, educativas y empresariales, actuamos bajo procesos estrictamente legales y transparentes.",
          },
          {
            heading: "Respeto de Marca",
            body:
              "Los logotipos institucionales o deportivos proporcionados por el cliente se utilizarán exclusivamente para el fin contratado, sin ningún otro uso.",
          },
        ],
      },
      {
        roman: "VI",
        title: "Responsabilidad con el Entorno",
        paragraphs: [
          "Optimizamos el uso de materiales en cada proceso para minimizar el desperdicio y contribuir a un entorno más sostenible.",
          "Mantenemos un taller seguro, limpio y ordenado para garantizar el bienestar e integridad de todo nuestro equipo de trabajo.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // AVISO DE PRIVACIDAD (página exclusiva /aviso-de-privacidad)
  // ─────────────────────────────────────────────
  privacyNotice: {
    metadata: {
      title: "Aviso de privacidad | ARDITEC",
      description:
        "Aviso integral de privacidad de ARDITEC: tratamiento de datos, finalidades, ARCO, transferencias y cookies conforme a la LFPDPPP.",
    },
    backHomeLabel: "Volver al inicio",
    heroEyebrow: "Transparencia y derechos",
    heading: "AVISO DE PRIVACIDAD",
    subtitle: "ARDITEC — Arte, Diseño y Tecnología",
    logo: "/Imagenes/ARDITEC%20logo%20principal.jpeg",
    motto:
      "\"Imagínalo, nosotros lo hacemos posible\"",
    sections: [
      {
        roman: "1",
        title: "Responsable del Tratamiento de Datos",
        paragraphs: [
          "ARDITEC (Arte, Diseño y Tecnología), con domicilio en Calle Paracaidistas #365, Col. Villa, Chihuahua, Chih., es el responsable del tratamiento, uso y protección de sus datos personales, en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
        ],
      },
      {
        roman: "2",
        title: "Datos Personales que Recolectamos",
        paragraphs: [
          "Para la prestación de nuestros servicios de personalización, grabado láser y técnicas afines, podemos solicitar los siguientes datos:",
        ],
        items: [
          {
            heading: "Identificación",
            body: "Nombre completo del contacto y razón social de la empresa.",
          },
          {
            heading: "Contacto",
            body: "Correo electrónico, número telefónico y dirección de entrega.",
          },
          {
            heading: "Archivos técnicos",
            body: "Logotipos, vectores y diseños gráficos propiedad del cliente.",
          },
          {
            heading: "Facturación",
            body: "Datos fiscales necesarios para la emisión de comprobantes fiscales digitales (CFDI).",
          },
        ],
      },
      {
        roman: "3",
        title: "Finalidad del Uso de Datos",
        paragraphs: [
          "Los datos recabados se utilizarán exclusivamente para los siguientes fines:",
        ],
        items: [
          {
            heading: "Procesamiento",
            body:
              "Procesar pedidos de corte, grabado láser, sublimación, DTF, vinil, foil y demás técnicas de personalización.",
          },
          {
            heading: "Cotizaciones",
            body: "Elaborar cotizaciones y dar seguimiento a proyectos.",
          },
          {
            heading: "Entrega y postventa",
            body:
              "Coordinar la entrega de mercancía y brindar servicio postventa.",
          },
          {
            heading: "Facturación",
            body: "Gestionar facturación y cobranza.",
          },
          {
            heading: "Promociones",
            body:
              "Enviar actualizaciones, novedades o promociones de ARDITEC, únicamente con autorización previa del titular.",
          },
        ],
      },
      {
        roman: "4",
        title: "Protección de Propiedad Intelectual y Archivos",
        paragraphs: [
          "En ARDITEC reconocemos el valor estratégico de su marca e identidad visual. Por ello, nos comprometemos a:",
        ],
        items: [
          {
            heading: "Uso limitado del material",
            body:
              "Utilizar sus logotipos y archivos gráficos únicamente para la elaboración de los trabajos contratados.",
          },
          {
            heading: "Confidencialidad",
            body:
              "No transferir, vender, reproducir ni compartir sus archivos con terceros sin autorización expresa y por escrito.",
          },
          {
            heading: "Seguridad de la información",
            body:
              "Resguardar su información en sistemas con acceso restringido y uso exclusivo del personal autorizado.",
          },
        ],
      },
      {
        roman: "5",
        title: "Transferencia de Datos a Terceros",
        paragraphs: [
          "ARDITEC no realiza transferencias de datos personales a terceros con fines comerciales. Las únicas excepciones son:",
        ],
        items: [
          {
            heading: "Cumplimiento legal",
            body:
              "El cumplimiento de obligaciones legales ante autoridades competentes.",
          },
          {
            heading: "Mensajería y paquetería",
            body:
              "La gestión logística de envíos a través de proveedores externos de mensajería, quienes reciben únicamente los datos estrictamente necesarios para la entrega.",
          },
        ],
      },
      {
        roman: "6",
        title: "Derechos ARCO",
        paragraphs: [
          "Como titular de sus datos personales, usted tiene derecho a:",
        ],
        items: [
          {
            heading: "Acceder",
            body: "Acceder a sus datos en nuestro poder.",
          },
          {
            heading: "Rectificar",
            body: "Rectificar información inexacta o incompleta.",
          },
          {
            heading: "Cancelar",
            body: "Cancelar sus datos cuando considere que no son necesarios.",
          },
          {
            heading: "Oponerse",
            body:
              "Oponerse al uso de sus datos para fines específicos.",
          },
        ],
        trailParagraphs: [
          "Para ejercer cualquiera de estos derechos, envíe su solicitud al siguiente correo electrónico: arditec.cuu@gmail.com",
          "Daremos respuesta en un plazo máximo de 20 días hábiles, conforme a lo establecido por la LFPDPPP.",
        ],
      },
      {
        roman: "7",
        title: "Uso de Cookies y Tecnologías de Rastreo",
        paragraphs: [
          "ARDITEC puede utilizar cookies y tecnologías similares en su sitio web con el fin de mejorar la experiencia de navegación y analizar el comportamiento de los usuarios.",
          "¿Qué son las cookies?",
          "Son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar un sitio web, permitiendo recordar preferencias y hábitos de navegación.",
          "Tipos de cookies que utilizamos:",
        ],
        items: [
          {
            heading: "Cookies esenciales",
            body:
              "Necesarias para el funcionamiento básico del sitio web. Sin ellas, algunas funciones no estarán disponibles.",
          },
          {
            heading: "Cookies analíticas",
            body:
              "Nos permiten conocer cómo los visitantes interactúan con nuestro sitio (páginas visitadas, tiempo de navegación, origen del tráfico), con el fin exclusivo de mejorar nuestros contenidos y servicios.",
          },
          {
            heading: "Cookies de preferencias",
            body:
              "Recuerdan las configuraciones del usuario, como idioma o región, para personalizar la experiencia de navegación.",
          },
          {
            heading: "Cookies de marketing",
            body:
              "Utilizadas para mostrar contenido relevante y promociones de ARDITEC. Solo se activarán con el consentimiento previo del usuario, quien podrá revocarlo en cualquier momento.",
          },
        ],
        trailParagraphs: [
          "Control de cookies: usted tiene el derecho de aceptar, rechazar o eliminar las cookies en cualquier momento. Puede gestionar sus preferencias directamente desde la configuración de su navegador:",
          "Google Chrome: Configuración → Privacidad y seguridad → Cookies.",
          "Mozilla Firefox: Opciones → Privacidad y seguridad.",
          "Safari: Preferencias → Privacidad.",
          "Microsoft Edge: Configuración → Privacidad, búsqueda y servicios.",
          "Tenga en cuenta que deshabilitar las cookies puede afectar el funcionamiento de algunas secciones del sitio web.",
          "Cookies de terceros: nuestro sitio puede incluir herramientas de terceros como Google Analytics o redes sociales (Facebook, Instagram), las cuales pueden instalar sus propias cookies conforme a sus propias políticas de privacidad, sobre las cuales ARDITEC no tiene control directo.",
        ],
      },
      {
        roman: "8",
        title: "Modificaciones al Aviso de Privacidad",
        paragraphs: [
          "ARDITEC se reserva el derecho de actualizar o modificar el presente aviso en cualquier momento. Cualquier cambio será notificado a través de nuestra página web o mediante correo electrónico dirigido a los titulares registrados.",
          "Última actualización: Mayo 2026",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────
  footer: {
    tagline: "Arte, Diseño y Tecnología aplicada a productos personalizados.",
    sections: [
      {
        title: "NAVEGACIÓN.",
        links: [
          { label: "Inicio", href: "/#hero" },
          { label: "Servicios", href: "/#features" },
          { label: "Ver nuestro trabajo", href: "/galeria" },
          { label: "Nuestros productos", href: "/#pricing" },
          { label: "Catálogos", href: "/catalogos" },
          { label: "Contacto", href: "/#contact" },
        ],
      },
      {
        title: "INFORMACIÓN.",
        links: [
          { label: "Aviso de privacidad", href: "/aviso-de-privacidad" },
          { label: "Código de ética", href: "/codigo-de-etica" },
          { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
        ],
      },
      {
        title: "ACERCA DE NOSOTROS",
        links: [{ label: "¿Quiénes somos?", href: "/quienes-somos" }],
      },
      {
        title: "SÍGUENOS.",
        links: [
          {
            label: "Facebook",
            href: "https://www.facebook.com/Arditecuu",
            external: true,
            icon: "facebook",
          },
          {
            label: "Instagram",
            href: "https://www.instagram.com/_arditec",
            external: true,
            icon: "instagram",
          },
          {
            label: "WhatsApp",
            href: "https://wa.me/526143819928",
            external: true,
            icon: "whatsapp",
          },
        ],
      },
    ],
    copyright: "Todos los derechos reservados.",
  },

  // ─────────────────────────────────────────────
  // EMAIL (notificaciones automaticas al recibir un contacto)
  // ─────────────────────────────────────────────
  email: {
    subject: "Recibimos tu solicitud en ARDITEC",
    teamSignature: "Equipo ARDITEC",
    // El remitente del email. Debe coincidir con tu dominio verificado en Resend.
    from: "onboarding@resend.dev",
    /** Aviso interno: dónde recibe el equipo el formulario (Resend `to`). */
    notificationTo: "arditec.cuu@gmail.com",
    /** Asunto del correo interno (no el de confirmación al visitante). */
    notificationSubject: "Nuevo contacto desde la web — ARDITEC",
  },

  // ─────────────────────────────────────────────
  // COLORES PRINCIPALES (referencia para personalizar globals.css)
  // ─────────────────────────────────────────────
  // Estos valores son documentacion. Para cambiar colores en Tailwind v4,
  // edita el archivo src/app/globals.css y modifica las variables CSS.
  colors: {
    primary: "blue-800",      // Color principal (botones, acentos)
    secondary: "slate-800",   // Color de textos principales
    accent: "slate-100",      // Fondos suaves y badges
    background: "white",      // Fondo general
  },

  // ─────────────────────────────────────────────
  // BOTON DE PAGO (PayPal)
  // ─────────────────────────────────────────────
  payment: {
    // Cambia enabled a true cuando tengas tu cuenta de PayPal lista
    enabled: false,
    // Enlace completo al que lleva el botón (clic = abrir PayPal.me)
    paypalMeUrl: "https://paypal.me/Arditec",
    // Tu nombre de usuario de PayPal.me (solo se usa si paypalMeUrl está vacío)
    // Para obtenerlo: ve a paypal.com > Perfil > Configura tu link PayPal.me
    // Ejemplo: si tu link es paypal.me/juanperez, escribe "juanperez"
    paypalMeUsername: "Arditec",
    // Monto sugerido en dolares. Pon 0 para que el comprador elija cuanto pagar.
    defaultAmount: 0,
    currency: "USD",
    buttonText: "Pagar anticipo con PayPal",
  },

  // ─────────────────────────────────────────────
  // METADATOS SEO (lo que aparece en Google y redes sociales)
  // ─────────────────────────────────────────────
  metadata: {
    title: "ARDITEC | Productos personalizados en Chihuahua",
    description:
      "ARDITEC crea productos personalizados con grabado láser, sublimación, vinil, vinil textil, DTF, foil e impresión para personas y empresas.",
  },
};
