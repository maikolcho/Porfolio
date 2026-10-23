// Todos los datos del portfolio. Edita este archivo para cambiar el contenido.

export const site = {
  name: 'Nelson',
  fullName: 'Nelson Villalba Vergara',
  title: 'Nelson | Portfolio',
  description:
    'Portfolio de Nelson: programador, operador de PC y estudiante de ciberseguridad.',
  email: 'nelson_ariel@hotmail.es',
};

export const nav = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Skills', href: '#skills' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export const hero = {
  greeting: 'Hola, soy',
  // Frases que se escriben en bucle en la portada
  roles: ['Programador', 'Operador de PC', 'Estudiante de ciberseguridad'],
  intro:
    'Construyo aplicaciones, resuelvo problemas de sistemas y aprendo a proteger lo que otros construyen.',
  profiles: [
    { icon: '</>', label: 'Programador' },
    { icon: '▣', label: 'Operador de PC' },
    { icon: '⚿', label: 'Ciberseguridad' },
  ],
  photo: '/avatar.png',
  photoAlt: 'Foto de Nelson Villalba',
  location: 'Córdoba, España',
  // Etiqueta de disponibilidad; pon '' para ocultarla
  badge: 'Disponible para prácticas · 300 h financiadas',
  cta: { projects: 'Ver proyectos', contact: 'Contactar', cv: 'Descargar CV' },
};

export const about = {
  title: 'Sobre mí',
  // Usa **texto** para resaltar en negrita
  paragraphs: [
    'Soy Nelson, desarrollador de software formado en **Programación de Aplicaciones Multiplataforma en MasterD**, con interés en el desarrollo de aplicaciones móviles, la inteligencia artificial y la innovación tecnológica.',
    'Durante mi formación he trabajado con tecnologías como Java, Kotlin, JavaScript y Python, además de bases de datos MySQL y herramientas como Git y GitHub. Me gusta llevar los conocimientos a la práctica mediante proyectos que me permitan experimentar, resolver problemas y desarrollar nuevas habilidades.',
    'Actualmente continúo formándome en **Ethical Hacking y ciberseguridad**, ampliando mi visión del mundo tecnológico y aprendiendo sobre la seguridad de sistemas, redes y aplicaciones.',
    'Me considero una persona curiosa, autodidacta y comprometida con la mejora continua. Disfruto investigando nuevas tecnologías, explorando ideas y convirtiéndolas en proyectos funcionales. Mi objetivo es seguir creciendo como profesional, participar en proyectos reales y combinar el desarrollo de software con las posibilidades que ofrecen la inteligencia artificial y la ciberseguridad.',
  ],
  facts: [
    { label: 'Ubicación', value: 'Córdoba, España' },
    { label: 'Enfoque', value: 'Desarrollo de software · Inteligencia artificial · Ciberseguridad' },
    { label: 'Tecnologías', value: 'Java · Kotlin · JavaScript · Python · MySQL · Linux · Git · GitHub' },
    { label: 'Formación actual', value: 'Ethical Hacking y ciberseguridad' },
    { label: 'Idiomas', value: 'Español (nativo) · Inglés A2 · Portugués A2' },
  ],
};

export const skills = {
  title: 'Tecnologías y habilidades',
  groups: [
    {
      name: 'Programación',
      icon: '</>',
      items: ['Java', 'Kotlin', 'JavaScript', 'Python', 'Swift y SwiftUI', 'MySQL', 'Node.js', 'n8n', 'Git y GitHub'],
    },
    {
      name: 'Ciberseguridad',
      icon: '⚿',
      items: ['Ethical Hacking (en formación)', 'Seguridad de sistemas', 'Seguridad de redes', 'Seguridad de aplicaciones'],
    },
    {
      name: 'Soporte de PC',
      icon: '▣',
      items: ['Windows, macOS y Linux', 'Instalación y mantenimiento', 'Resolución de incidencias', 'Copias de seguridad'],
    },
  ],
};

export const education = {
  title: 'Formación y experiencia',
  items: [
    {
      date: '2025 – En curso',
      title: 'Curso Superior en Ethical Hacking',
      place: 'MasterD',
      text: 'Ciberseguridad, análisis de vulnerabilidades, fundamentos de redes, sistemas operativos y metodologías de seguridad ofensiva en entornos controlados.',
    },
    {
      date: '2022 – 2025',
      title: 'Curso Superior en Programación de Aplicaciones para Dispositivos Móviles',
      place: 'MasterD · 975 horas',
      text: 'Desarrollo de aplicaciones móviles con Java, Kotlin y bases de datos MySQL. Lógica de programación, control de versiones con Git y proyectos prácticos.',
    },
    {
      date: '2014 – abril 2026',
      title: 'Jefe de cocina y formador interno',
      place: 'Restaurante La Mafia, Córdoba',
      text: 'Dirigí la cocina trabajando bajo procedimientos y estándares de calidad exigentes, y formé al equipo y a las nuevas incorporaciones. Doce años de responsabilidad, trabajo bajo presión y trato con personas.',
    },
    {
      date: '2014 – abril 2026',
      title: 'Responsable de informática y soporte técnico',
      place: 'Restaurante La Mafia, Córdoba · junto a mi puesto en cocina',
      text: 'Me encargaba de toda la parte tecnológica del local: mantenimiento de ordenadores y equipos, configuración y revisión de la red, y resolución de las incidencias técnicas del día a día para que el negocio no se parara.',
    },
    {
      date: '2008 – 2014',
      title: 'Ayudante de cocina',
      place: 'Sociedad Plateros',
      text: 'Seis años en cocina trabajando bajo procedimientos y estándares exigentes, la base de la disciplina y el trabajo en equipo que llevé después a La Mafia.',
    },
    {
      date: '2006 – 2007',
      title: 'Prácticas de soporte técnico e informática',
      place: 'Un año',
      text: 'Prácticas orientadas al soporte técnico, la gestión básica de sistemas y la resolución de incidencias en entornos controlados.',
    },
    {
      date: '2005',
      title: 'Curso de Operador de PC',
      place: '300 horas',
      text: 'Base en soporte técnico, gestión de sistemas y resolución de incidencias.',
    },
  ],
  note: 'Dispongo de 300 horas de prácticas formativas financiadas íntegramente por la academia, sin coste para la empresa.',
};

export const projects = {
  title: 'Proyectos',
  items: [
    {
      name: 'RecipeIA',
      description:
        'App iOS en SwiftUI con arquitectura MVVM que genera recetas con IA (API de Gemini) a partir de los ingredientes que tienes en casa. Permite guardar favoritas, crear recetas propias y organizarlas en categorías editables, con los datos guardados en el dispositivo.',
      tags: ['Swift', 'SwiftUI', 'MVVM', 'IA', 'API REST', 'iOS'],
      // Capturas: sube imágenes a public/proyectos/ y añade aquí { src, alt }
      images: [
        { src: '/proyectos/recipeia-1.jpg', alt: 'RecipeIA: recetas generadas con IA a partir de los ingredientes' },
        { src: '/proyectos/recipeia-2.jpg', alt: 'RecipeIA: receta con ingredientes y pasos numerados' },
        { src: '/proyectos/recipeia-3.jpg', alt: 'RecipeIA: pantalla de recetas favoritas' },
        { src: '/proyectos/recipeia-4.jpg', alt: 'RecipeIA: categorías editables' },
      ],
      code: 'https://github.com/maikolcho/RecipeIA',
      demo: '',
    },
    {
      name: 'La Mafia',
      description:
        'App nativa Android para el restaurante italiano La Mafia (Córdoba), hecha con Java y Kotlin. Incluye vídeo de bienvenida, reserva de mesa, pedidos a domicilio (Glovo, Just Eat, Uber Eats), carta digital, menús especiales, galería de fotos del local y llamada directa al restaurante. La navegación usa una barra inferior con fragments.',
      tags: ['Java', 'Kotlin', 'Android', 'Material Components', 'Glide', 'Google Maps'],
      images: [
        { src: '/proyectos/lamafia-1.jpg', alt: 'La Mafia: pantalla de inicio con reserva y pedidos online' },
        { src: '/proyectos/lamafia-2.jpg', alt: 'La Mafia: información del restaurante' },
        { src: '/proyectos/lamafia-3.jpg', alt: 'La Mafia: menús especiales para compartir' },
        { src: '/proyectos/lamafia-4.jpg', alt: 'La Mafia: galería de fotos del local' },
      ],
      code: 'https://github.com/maikolcho/la-mafia-app',
      demo: '', // deja vacío si no hay demo
    },
    {
      name: 'La Famiglia',
      description:
        'App Flutter multiplataforma (Android/iOS) para un restaurante italiano de Córdoba, con arquitectura por pantallas y widgets reutilizables. Incluye reserva de mesa, pedidos a domicilio (Glovo, Uber Eats, Just Eat), carta digital con fotos de los platos, programa de fidelización por niveles, tarjeta regalo, sección de franquicias, blog y mapa de ubicación con Google Maps. Proyecto personal para practicar desarrollo multiplataforma, complementario a la app nativa Android La Mafia.',
      tags: ['Flutter', 'Dart', 'Android', 'iOS', 'Google Maps', 'Material Design'],
      images: [
        { src: '/proyectos/lafamiglia-1.jpg', alt: 'La Famiglia: pantalla de inicio con reserva y pedidos online' },
        { src: '/proyectos/lafamiglia-2.jpg', alt: 'La Famiglia: carta digital con fotos de los platos' },
        { src: '/proyectos/lafamiglia-3.jpg', alt: 'La Famiglia: programa de fidelización Il Club' },
        { src: '/proyectos/lafamiglia-4.jpg', alt: 'La Famiglia: información del restaurante' },
      ],
      code: 'https://github.com/maikolcho/la-famiglia-app-',
      demo: '',
    },
    {
      name: 'Agente automatizado para despachos de abogados',
      description:
        'Sistema que atiende a los clientes de un despacho por WhatsApp: pide su consentimiento RGPD, ofrece huecos libres de Google Calendar, cobra la consulta con Stripe y confirma la cita. Diseñado con enfoque de ciberseguridad: firmas HMAC en los webhooks, filtro que elimina datos personales antes de guardar nada, logs estructurados para un SIEM y panel de administración. Backend en Node.js orquestado con n8n.',
      tags: ['Node.js', 'n8n', 'WhatsApp API', 'Stripe', 'Google Calendar', 'RGPD', 'Ciberseguridad'],
      images: [
        { src: '/proyectos/agente-whatsapp.jpg', alt: 'Agente para abogados: conversación de WhatsApp con consentimiento RGPD, reserva de cita y pago' },
      ],
      gallery: [
        { src: '/proyectos/agente-citas.jpg', alt: 'Panel de administración: citas agendadas y estado de pagos' },
        { src: '/proyectos/agente-logs.jpg', alt: 'Consola de logs de seguridad en tiempo real, con un webhook de firma falsa rechazado' },
        { src: '/proyectos/agente-rgpd.jpg', alt: 'Filtro RGPD: elimina DNI, email, teléfono y nombre antes de guardar o procesar' },
      ],
      caption: 'Capturas de la demo con datos ficticios, Stripe en modo test.',
      code: 'https://github.com/maikolcho/agente-abogados',
      demo: '',
    },
  ],
  labels: { code: 'Código', demo: 'Demo' },
};

export const contact = {
  title: 'Contacto',
  text: '¿Tienes un proyecto, una oferta o quieres charlar? Escríbeme.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/maikolcho' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nelson-villalba-vergara' },
  ],
};

export const footer = {
  text: `© ${new Date().getFullYear()} Nelson. Hecho con Astro.`,
};
