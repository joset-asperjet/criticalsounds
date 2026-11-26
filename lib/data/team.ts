export type TeamMemberCategory = 'founders' | 'instructors' | 'management'

export type TeamMember = {
  id: string
  name: string
  role: string
  category?: TeamMemberCategory | TeamMemberCategory[]
  description: string
  fullBio: string[]
  gradient: string
  image?: string
  logos?: { name: string; src: string }[]
  socials?: {
    instagram?: string
    beatport?: string
    spotify?: string
  }
}

export const team: TeamMember[] = [
  // 1. Pablo Anon (Founder)
  {
    id: 'pablo-anon',
    name: 'Pablo Anon',
    role: 'CEO & Founder · Master DJ',
    category: 'founders',
    description: '30 años de experiencia profesional en el circuito internacional, desde residencias en superclubs hasta festivales globales.',
    fullBio: [
      'La música ha sido su pasión profesional desde 2004. Su talento innato y su técnica impecable constituyen la base de su carrera como artista de música electrónica. La versatilidad y la maestría musical se combinan en todas sus presentaciones, abarcando diversos géneros de trance.',
      'Pablo siempre ha visualizado la fusión de disciplinas trance, orquestando temas musicales opuestos, eufóricos y su opuesto. Esta estructura distintiva apareció por primera vez en la escena en 2015, consolidando el éxito de Pablo con su sonido único con Andromeda (Discover) y No Regrets (Universal Nation) soportado por pesos pesados del trance: John Askew, Sean Tyas, Woody Van Hayden, Binary Finary, Bryan Kearney, John O’Callaghan, Photographer y Alex M.O.R.P.H.',
      'Su nuevo estilo sonoro expandió exponencialmente la lista de artistas contratados por Pablo Anon, comenzando con una modesta gira por Estados Unidos en 2013 (que incluyó WMC, Los Ángeles y el Medio Oeste); y sumando Nueva Zelanda, México, Colombia, Argentina y Alemania para los lanzamientos de los sellos Critical State y Universal Nation entre 2016 y 2017. Además de su exitosa carrera local, Pablo ha tocado en algunos de los mejores clubes y eventos más importantes, como Earthcore, GAS, Plastic, Transmission, Digital Therapy y Voodoo @ Home Sydney, teloneando a artistas de trance reconocidos y consolidados como Ferry Corsten, Cosmic Gate, Paul van Dyk, Coming Soon!!! e Infected Mushroom.',
      '2017 trajo consigo un nuevo resurgimiento de presentaciones y lanzamientos, mostrando su sonido personal a través de los sellos Critical State, Critical Overload y Critical Uprising de Komplex Sounds (KSX) Label Group y Perfecto Fluoro. En diciembre de 2017, Pablo participó en las etapas de Colombia, Australia y México de la gira Critical State - Past, Present & Future Album 2017/18, cuyo doble CD llegó a las tiendas en formato físico incluyendo sus dos mayores lanzamientos: «War & Peace» y la colaboración con Talla 2XLC en el prestigioso sello Critical State.',
      'Para 2018, Pablo Anon se había establecido en Medellín, Colombia. Con sus sonidos psicodélicos fusionados, ya era un nombre reconocido en Brasil, Europa (Ozora) y Australia (Earthcore), y había colaborado con sellos como Blue Tunes, Perfecto Fluoro y Critical Overload. Alcanzó la cima de su carrera psicodélica en 2021, cuando inició una nueva etapa en su trayectoria como productor, fusionando sus influencias trance, psicodélicas y techno en un nuevo crisol de techno progresivo, melódico y eufórico.',
      'Para 2023, la última etapa y transformación de Pablo Anon se había consolidado. Su nuevo sonido le brindó grandes oportunidades para abrir conciertos de artistas como PROFF (2023), Ferry Corsten (2025) y Estiva (2025). Pablo Anon presentó sus sonidos icónicos en ASOT 1169 con su lanzamiento original "Chasing Shadows" y el remix oficial de "Sweet Dreams", que arrasó en las listas de Beatport y Main Techno, además de recibir el apoyo del público, incluyendo a artistas como Bobina, Cristian Varela, Oscar Romero, Paco Osuna, Rank 1 y Giuseppe Ottaviani. Sus continuos lanzamientos en las listas de Beatport lo posicionaron entre los 150 artistas de Melodic Techno más vendidos de la plataforma durante 2024 y 2025, y finalmente captó la atención de Markus Schulz, quien firmó varios lanzamientos con Coldharbour y In Search of Sunrise en 2026.',
      'Tras su debut en España en 2024, Pablo Anon regresó al Reino Unido y Europa en 2025, actuando en Genesis (Bristol), ADE y Madrid para Critical Sounds, bajo la mentoría y gestión de Luminary-Artists, con sede en Los Ángeles, después de haber sido telonero de Ferry Corsten en Paradise Events ese mismo año.',
      'El sonido de Pablo Anon actualmente se caracteriza por melodías más progresivas y melódicas trance, que en sus últimos lanzamientos se refleja con un sonido perfecto para artistas del género trance y progressive. Con su más reciente lanzamiento Call Of Destiny en Coldharbour, el sello de Markus Schulz.',
      'Actualmente se desempeña como Director de la Academia y profesor de las clases de Master DJ, Master FX y Vinyl DJ.'
    ],
    gradient: 'from-[#174f55] to-[#13292d]',
    image: '/multimedia/images/critical-academy/team/critical-sound-founders-pablo-anon.jpg',
    logos: [
      { name: 'Blue Soho', src: '/multimedia/images/critical-academy/critical-academy-blue-soho-logo.png' },
      { name: 'Critical Academy', src: '/multimedia/images/critical-academy/critical-academy-logo.png' },
      { name: 'Perfecto Fluoro', src: '/multimedia/images/critical-academy/critical-academy-perfecto-fluoro.png' },
    ],
    socials: {
      spotify: 'https://open.spotify.com/intl-es/artist/5R7uOPFafwSZOLRd2xJR50',
      beatport: 'https://www.beatport.com/es/artist/pablo-anon/418100',
      instagram: 'https://www.instagram.com/pabloanonmusic/?hl=es-la',
    }
  },

  // 2. Steve Dekay (Founder & Profesor)
  {
    id: 'steve-dekay',
    name: 'Steve Dekay',
    role: 'Co-Founder · Productor, DJ & Profesor',
    category: ['founders', 'instructors'],
    description: 'Su trayectoria como productor y DJ cuenta con una de las hojas de vida más impresionantes que ha dado Colombia.',
    fullBio: [
      'Originario de Colombia, Steve Dekay es un prodigio de la música trance cuyos ritmos y melodías han resonado por todo el mundo. Su prestigiosa reputación en la industria musical se ve reforzada por sus colaboraciones con importantes sellos discográficos, como Armada Music, Vandit Records, FSOE, Black Hole y Coldharbour, entre otros.',
      'Uno de los momentos clave en la carrera de Steve ha sido su colaboración con la leyenda del trance Paul van Dyk. Juntos crearon el tema «Aurora», incluido en el álbum «Music Rescues Me» de Paul, y «Impact», que formó parte del álbum «Guiding Light». Actualmente, las melodiosas producciones de Steve se publican principalmente bajo los sellos Armada, Vandit Records y FSOE Recordings.',
      'El magnetismo de la música de Steve reside en su atractivo universal. Iconos musicales como Aly & Fila, Armin van Buuren, Paul van Dyk, Solarstone, Giuseppe Ottaviani, Marco V y Ferry Corsten, entre otros, han tocado sus temas con regularidad. Este reconocimiento internacional ha llevado algunas de sus obras a lo más alto de las listas de Beatport en múltiples ocasiones.',
      'Como DJ, el dinamismo de Steve es innegable. Ha brillado en escenarios junto a leyendas como Paul van Dyk, Aly & Fila, Alex M.O.R.P.H, Cosmic Gate, Sander van Doorn, Sunnery James & Ryan Marciano, Sean Tyas, Will Atkinson y Solarstone. Entre los momentos más memorables de su trayectoria destacan su actuación hipnotizante en Shine Ibiza junto a Paul van Dyk, su energía en el icónico Street Parade de Zúrich y su cautivadora presencia en diversos recintos europeos, además de su participación en el programa de radio «A State Of Trance» de Armin van Buuren.',
      'La excelencia constante de Steve no ha pasado desapercibida. Entre sus logros destacan el puesto número 48 en la lista Top 101 Producers 2020, un meritorio puesto número 72 en 2021 y el galardón al Mejor Productor en los Premios CDA de 2019. Steve Dekay, con su pasión incansable y su talento innato, continúa dando forma y redefiniendo el panorama de la música trance.',
      'Entre otros logros también destaca el remix oficial para Armin van Buuren de su track “Blue Fear” lanzada en el compilado anual de Armin llamado ASOT Ibiza 2025.',
      'Este 2026 la colaboración con Mauro Picotto - I Feel Love, lanzada bajo el sello de Armin van Buuren “Armada Music” ya cuenta con más de un millón de streams en Spotify, sumado a su lanzamiento «Feel the love».',
      'Este año, participará en la primera edición del famoso festival EDC (Electric Daisy Carnival) que por primera vez este 2026 celebrará su edición en Colombia en el escenario Stereo Bloom y que contará con la participación de los artistas top mundiales.',
      'Actualmente se desempeña como A&R del label y profesor de la Academia enfocándose en el área mezcla de trance, progressive y techno.'
    ],
    gradient: 'from-[#283c49] to-[#9bb0ae]',
    image: '/multimedia/images/critical-academy/team/critical-sound-founders-steve-dekay.jpg',
    logos: [
      { name: 'Armada Music', src: '/multimedia/images/critical-academy/critical-academy-armada-music.png' },
      { name: 'FSOE', src: '/multimedia/images/critical-academy/critical-academy-fsoe.png' },
      { name: 'Vandit', src: '/multimedia/images/critical-academy/critical-academy-vandit.png' },
      { name: 'Dreamstate', src: '/multimedia/images/critical-academy/critical-academy-dreamstate.png' },
      { name: 'Critical Academy', src: '/multimedia/images/critical-academy/critical-academy-logo.png' },
    ],
    socials: {
      spotify: 'https://open.spotify.com/intl-es/artist/7lF2WmukgrCZa5pxW6q1IE',
      beatport: 'https://www.beatport.com/es/artist/steve-dekay/305612',
      instagram: 'https://www.instagram.com/steve_dekay/?hl=es',
    }
  },

  // 3. Esteban Rengifo (Founder)
  {
    id: 'esteban-rengifo',
    name: 'Esteban Rengifo',
    role: 'Co-Founder & Business Development Manager',
    category: 'founders',
    description: 'Más de 12 años de experiencia en producción de eventos, comunicaciones corporativas, distribución musical y alianzas estratégicas internacionales.',
    fullBio: [
      'Esteban Rengifo es Co-Founder & Business Development Manager de Critical Sounds y Tecnólogo en Organización de Eventos, con más de 12 años de experiencia en producción de eventos, comunicaciones corporativas y marketing digital.',
      'Ha conceptualizado y producido eventos propios con aforos de hasta 800 personas, conciertos y ferias del sector, además de coordinar eventos corporativos para grupos empresariales como Grupo Argos, Grupo Nutresa y EPM.',
      'Fundó Bacon Agency, agencias de marketing digital que han trabajado con marcas gastronómicas, cerveceras y de servicios. Su recorrido incluye la distribución digital de música en LaMúsica.fm, XpaceMusic y formación en producción musical en Berklee College of Music.',
      'Desde Critical Sounds impulsa alianzas, patrocinios y el crecimiento internacional de la industria electrónica en Latinoamérica y el mundo.'
    ],
    gradient: 'from-[#1c2c36] to-[#0d161c]',
    image: '/multimedia/images/critical-academy/team/esteban-Business-development-manager.webp',
    logos: [
      { name: 'Critical Academy', src: '/multimedia/images/critical-academy/critical-academy-logo.png' },
    ],
    socials: {
      instagram: 'https://www.instagram.com/criticalsounds/',
    }
  },

  // 4. Galeneo (Profesor - Primero de la lista de profesores)
  {
    id: 'galeneo',
    name: 'Galeneo',
    role: 'Director de Academia · Profesor DJ',
    category: 'instructors',
    description: 'Director de Academia con estudios en Barcelona, España y más de 5 años formando a la nueva generación de DJs en Colombia.',
    fullBio: [
      'DJ y productor colombiano nacido en la ciudad de Medellín. Tuvo sus inicios en el año 2014 marcando una tendencia alrededor del Techno, la cual ha evolucionado a través de los años, llevándolo a estar en tarimas a nivel internacional en Aruba, Argentina y España.',
      'Se caracteriza por sonidos contundentes y armonías progresivas que crean un ambiente especial e inmersivo para los amantes de la buena música.',
      'A nivel nacional ha visitado diversos clubes de referencia en las ciudades de Bogotá, Cartagena y Cali, marcando una experiencia sin igual.',
      'Director del programa de música electrónica Feeling y actualmente uno de los presentadores del programa Drop TV, conectado desde España.',
      'Ha compartido e interactuado con DJs internacionales por medio de programas como Drop TV y Feeling, y en ocasiones especiales con artistas como Fernanda Martins, Lexlay, Anna Tur, The YellowHeads y Cristian Varela, entre otros.',
      'Actualmente se desempeña como profesor de la Academia enfocándose en el área de mezcla para los cursos Social DJ y Club DJ.'
    ],
    gradient: 'from-[#714a32] to-[#cac4a1]',
    image: '/multimedia/images/critical-academy/team/critical-sound-founders-galeneo.jpg',
    logos: [
      { name: 'Critical Academy', src: '/multimedia/images/critical-academy/critical-academy-logo.png' },
    ],
    socials: {
      instagram: 'https://www.instagram.com/galeneo_dj/',
    }
  },

  // 5. Kashwell (Profesor)
  {
    id: 'kashwell',
    name: 'Kashwell',
    role: 'Profesor DJ & Productor',
    category: 'instructors',
    description: 'DJ y productor de Medellín con 16 años de trayectoria. Melodic Techno, Progressive y Trance, con shows en Tomorrowland CORE, EDC Colombia y Ritvales.',
    fullBio: [
      'Santiago Zapata Sáenz, conocido artísticamente como Kashwell, es DJ y productor musical de Medellín con 16 años de trayectoria en la escena electrónica.',
      'Su propuesta sonora se centra en el sonido del Trance clásico de los 90s fusionado con Acid y Techno Peak Time, manteniendo versatilidad en géneros como Melodic Techno y Progressive House. Se caracteriza por sets narrativos, cargados de energía, tensión y evolución en pista.',
      'Ha compartido escenario con artistas internacionales de la talla de Paul van Dyk, Ferry Corsten, Markus Schulz, Mauro Picotto, Thomas Schumacher, Alex Stein, Agents Of Time, Argy, Cassian, Giuseppe Ottaviani, Andrew Rayel y Will Atkinson.',
      'Ha pisado escenarios icónicos como Tomorrowland CORE, EDC Colombia, Festival MedaYoung y Ritvales. Su discografía incluye lanzamientos en Dragon Records, 4Music, Code Label Group, Denar Records y su aclamado álbum Connection (2024). Además, es el creador del concepto CONNECTIONS, con exitosas ediciones en Medellín, Bogotá, Manizales, Bucaramanga y Pasto.',
      'En Critical Sounds Academy enseña estructuración narrativa de sets, ecualización avanzada y producción musical.'
    ],
    gradient: 'from-[#1b2d38] to-[#0c161d]',
    image: '/multimedia/images/critical-academy/team/kashwell-profesor-dj.webp',
    socials: {
      instagram: 'https://www.instagram.com/criticalsounds/',
    }
  },

  // 6. Verolila (Profesora)
  {
    id: 'verolila',
    name: 'Verolila',
    role: 'Profesora DJ',
    category: 'instructors',
    description: 'DJ y productora colombiana de Melodic Techno, Progressive House e Indie Dance. Con lanzamientos en Jeahmon, Eleven Records y Freegrant Music, y warm-ups para Above & Beyond y Vintage Culture.',
    fullBio: [
      'DJ y productora colombiana cuya propuesta fluye con elegancia entre el Melodic Techno, el Progressive House y el Indie Dance, con sets hipnóticos, emocionales y minuciosamente concebidos para la pista.',
      'Ha lanzado música en sellos internacionales como Jeahmon, Eleven Records y Freegrant Music, y ha llevado su sonido a escenarios de renombre en Tulum, Ciudad de México, Monterrey y varias ciudades de Colombia.',
      'Ha abierto shows para gigantes de la industria como Above & Beyond, Vintage Culture, Nora En Pure, Jan Blomqvist y Max Styler.',
      'En la academia enseña a leer la pista, la técnica de ecualización y la construcción de un set con narrativa de principio a fin.'
    ],
    gradient: 'from-[#3b1d2e] to-[#180b13]',
    image: '/multimedia/images/critical-academy/team/verorila-profesora-dj.webp',
    socials: {
      instagram: 'https://www.instagram.com/criticalsounds/',
    }
  },

  // 7. Nabrian DJ (Profesor)
  {
    id: 'nabrian-dj',
    name: 'Nabrian DJ',
    role: 'Profesor DJ',
    category: 'instructors',
    description: 'DJ colombiano con más de 8 años de trayectoria en Reggaeton, Afrobeat, Dancehall y Rancha, especialista en perreo. Reconocido por mezclar sin audífonos con precisión y por su energía en cabina.',
    fullBio: [
      'Nabrian DJ es un artista y selector colombiano con más de 8 años de trayectoria profesional ininterrumpida desde su primera presentación en octubre de 2016. Se especializa en géneros como Reggaeton, Afrobeat, Dancehall y Rancha, teniendo el perreo como estampa inconfundible.',
      'Ha desarrollado un estilo único, ampliamente reconocido por su técnica para mezclar sin audífonos con precisión y por contagiar al público con su energía en cada show.',
      'Ha recorrido escenarios en diversas ciudades del país como Cali, Bogotá, Bucaramanga, Mocoa y Medellín (donde reside actualmente), presentándose en lugares destacados como Vintrash, Primitivo, Selina, Somos de Calle, El Deck, Casa de la Luna y El Faro C13.',
      'Domina Rekordbox y tiene experiencia en consolas de todo tipo. En la academia enseña el arte de la mezcla urbana, versatilidad en formatos crossover y el manejo de pista para eventos de alto impacto.'
    ],
    gradient: 'from-[#2d2919] to-[#14120a]',
    image: '/multimedia/images/critical-academy/team/nabrian-profesor-dj.webp',
    socials: {
      instagram: 'https://www.instagram.com/criticalsounds/',
    }
  },

  // 8. Servel (Profesor)
  {
    id: 'servel',
    name: 'Servel',
    role: 'Profesor DJ · Hard Trance & Dance',
    category: 'instructors',
    description: 'Favorito del público de Medellín, ha actuado en algunos de los espectáculos más importantes de la ciudad y aporta una perspectiva fresca y potente.',
    fullBio: [
      'Servel se ha consagrado como uno de los grandes favoritos del público de Medellín gracias a la potencia y velocidad de sus sets en géneros como Hard Trance y Dance.',
      'Ha actuado en algunos de los escenarios y eventos más trascendentales de la ciudad, aportando siempre una perspectiva sonora fresca, moderna y cargada de adrenalina.',
      'Su técnica destaca por la rapidez en las transiciones, el manejo de BPMs elevados con precisión métrica y una lectura infalible del momento cúspide de la fiesta.',
      'Como instructor en Critical Sounds Academy, guía a los estudiantes en técnicas de mezcla rápida, performance para festivales y ecualización de frecuencias intensas.'
    ],
    gradient: 'from-[#172d42] to-[#0a1622]',
    image: '/multimedia/images/critical-academy/team/severl-profesor-dj.webp',
    socials: {
      instagram: 'https://www.instagram.com/criticalsounds/',
    }
  },

  // 9. Blackswan DJ (Profesora)
  {
    id: 'blackswan-dj',
    name: 'Blackswan DJ',
    role: 'Profesora DJ · Melodic Techno & Progressive',
    category: 'instructors',
    description: 'Figura de la noche de Medellín en La Rock, Rosa Negra e Inzolente Rooftop, con eventos para marcas como Fórmula 1 y Zona Fit.',
    fullBio: [
      'Blackswan DJ es una de las figuras más destacadas de la escena nocturna y exclusiva de Medellín, con residencias y presentaciones en La Rock, Rosa Negra e Inzolente Rooftop.',
      'Su prestigio la ha llevado a encabezar la musicalización de eventos de élite para marcas de talla mundial como Fórmula 1 y Zona Fit, además de festivales y clubes de alta gama.',
      'Su línea sonora se distingue por una exquisita curaduría de Melodic Techno, Organic House y Progressive, caracterizada por texturas elegantes y grooves envolventes.',
      'En la academia enseña curaduría musical para clubes premium, manejo de marca personal y desarrollo de una identidad sonora cautivadora.'
    ],
    gradient: 'from-[#2d1b3b] to-[#140b1b]',
    image: '/multimedia/images/critical-academy/team/black-swan-dj-profesora.webp',
    socials: {
      instagram: 'https://www.instagram.com/criticalsounds/',
    }
  },

  // 10. Wakken (Director Visual)
  {
    id: 'wakken',
    name: 'Wakken',
    role: 'Director Visual',
    category: 'management',
    description: 'Director visual y especialista en diseño de escenarios, iluminación, visuales reactivos y producción multimedia para espectáculos en vivo.',
    fullBio: [
      'Wakken lidera la dirección visual y de arte en Critical Sounds, diseñando experiencias escénicas inmersivas, iluminación sincronizada y conceptualización multimedia para festivales, clubes y producciones audiovisuales.',
      'Su enfoque multidisciplinario abarca la creación de contenido gráfico en tiempo real, identidad escénica para DJs y producción técnica de eventos.',
      'En la academia colabora con el ecosistema de formación para que los artistas comprendan el impacto del componente visual, la estética escénica y el show audiovisual en su carrera.'
    ],
    gradient: 'from-[#251f33] to-[#100d17]',
    image: '/multimedia/images/critical-academy/team/wakken-director-visual.webp',
    socials: {
      instagram: 'https://www.instagram.com/criticalsounds/',
    }
  },

  // 11. Nancy Herrera (Finanzas & Marketing)
  {
    id: 'nancy-herrera',
    name: 'Nancy Herrera',
    role: 'Administración, Finanzas & Marketing Digital',
    category: 'management',
    description: 'Administradora de Empresas y Finanzas, especialista en marketing digital, pauta publicitaria y gestión de tráfico pago para artistas y marcas.',
    fullBio: [
      'Nancy Herrera es Administradora de Empresas y Finanzas, con sólida experiencia en atención al cliente, gestión comercial, ventas y estrategias de marketing digital.',
      'Se especializa en la creación y gestión de contenido para redes sociales, publicidad digital, gestión de campañas publicitarias y tráfico pago, orientados a aumentar la visibilidad de las marcas, atraer clientes potenciales y generar más ventas.',
      'En la academia comparte cómo los artistas pueden usar el marketing digital para construir su marca personal, proyectar su música y llegar a más público en la industria electrónica.'
    ],
    gradient: 'from-[#2a1d35] to-[#130d1a]',
    image: '/multimedia/images/critical-academy/team/nancy-herrera-secretaria-traffiquerj.webp',
    socials: {
      instagram: 'https://www.instagram.com/criticalsounds/',
    }
  },

  // 12. María Alejandra Torres (Psicóloga)
  {
    id: 'maria-alejandra-torres',
    name: 'María Alejandra Torres',
    role: 'Psicóloga · Bienestar & Acompañamiento',
    category: 'management',
    description: 'Psicóloga con formación y experiencia en acompañamiento psicosocial, orientación, fortalecimiento de habilidades socioemocionales y bienestar.',
    fullBio: [
      'María Alejandra Torres es psicóloga con formación y experiencia en acompañamiento psicosocial, procesos de orientación y bienestar integral.',
      'Ha diseñado y desarrollado estrategias de intervención para fortalecer habilidades socioemocionales, comunicación asertiva y vínculos interpersonales en personas y grupos.',
      'Complementó su formación con el Diplomado en Psicología Clínica y de la Salud del Tecnológico de Antioquia, seminarios en Equipos Reflexivos con Familias y Parejas, formación en Rutas de Actuación y Protección en Atención Psicosocial Laboral y certificación en primeros auxilios psicológicos.',
      'Su interés profesional se centra en el bienestar emocional, las relaciones interpersonales y las estrategias que favorecen el aprendizaje y el crecimiento personal. Se caracteriza por una mirada empática y ética que reconoce las particularidades de cada persona y promueve espacios de escucha y reflexión.'
    ],
    gradient: 'from-[#192f2b] to-[#0c1816]',
    image: '/multimedia/images/critical-academy/team/maria-alejandra-torres-psicologa.webp',
    socials: {
      instagram: 'https://www.instagram.com/criticalsounds/',
    }
  }
]
