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
  // Etiqueta de disponibilidad; pon '' para ocultarla
  badge: 'Disponible para prácticas · 300 h financiadas',
  cta: { projects: 'Ver proyectos', contact: 'Contactar' },
};

export const about = {
  title: 'Sobre mí',
  photo: '/avatar.jpg',
  photoAlt: 'Foto de Nelson',
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
    { label: 'Tecnologías', value: 'Java · Kotlin · JavaScript · Python · MySQL · Git · GitHub' },
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
      items: ['Windows y macOS', 'Instalación y mantenimiento', 'Resolución de incidencias', 'Copias de seguridad'],
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
      text: 'Trabajé bajo procedimientos y estándares exigentes, además de formar al equipo.',
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
      name: 'La Mafia',
      description:
        'App Android para el sector restauración, pensada para el restaurante La Mafia: carta digital, categorías de platos, reservas de mesa y acceso a plataformas de delivery (Glovo, Uber Eats, Just Eat).',
      tags: ['Java', 'Android Studio', 'Android'],
      code: 'https://github.com/maikolcho/La-Mafia',
      demo: '', // deja vacío si no hay demo
    },
    {
      name: 'RecipeIA',
      description:
        'App iOS en SwiftUI que busca recetas a partir de los ingredientes disponibles usando una API de IA. Incluye filtros por categoría, recetas guardadas y creación de recetas propias.',
      tags: ['Swift', 'SwiftUI', 'iOS', 'IA'],
      // Capturas: sube imágenes a public/proyectos/ y añade aquí { src, alt }
      images: [
        { src: '/proyectos/recipeia-1.jpg', alt: 'RecipeIA: pantalla de búsqueda por ingredientes' },
        { src: '/proyectos/recipeia-2.jpg', alt: 'RecipeIA: pantalla de categorías' },
      ],
      code: 'https://github.com/maikolcho/RecipeIA',
      demo: '',
    },
    {
      // TODO: revisa la descripción y las etiquetas, y añade el vídeo en demo
      name: 'Agente IA para abogados',
      description:
        'Agente de inteligencia artificial que atiende consultas por WhatsApp para despachos de abogados, automatizado con flujos de n8n.',
      tags: ['IA', 'n8n', 'WhatsApp', 'Node.js'],
      code: '',
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
