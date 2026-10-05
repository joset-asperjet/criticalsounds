export type TeamMember = {
  id: string
  name: string
  role: string
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
  {
    id: 'pablo-anon',
    name: 'Pablo Anon',
    role: 'CEO',
    description: 'La música ha sido su pasión profesional desde 2004. Su versatilidad y maestría combinan géneros de trance, abriendo conciertos para <b>Ferry Corsten</b>, <b>Markus Schulz</b> y en los escenarios más importantes del mundo.',
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
    image: '/multimedia/images/critical-academy/critical-sound-founders-pablo-anon.jpg',
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
  {
    id: 'steve-dekay',
    name: 'Steve Dekay',
    role: 'Productor, DJ y Actual A&R de Critical Sounds',
    description: 'Prodigio de la música trance con colaboraciones en <b>Armada Music</b>, <b>Vandit Records</b> y <b>FSOE</b>. Colaborador de Paul van Dyk y confirmado en <b>EDC 2026</b>.',
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
    image: '/multimedia/images/critical-academy/critical-sound-founders-steve-dekay.jpg',
    logos: [
      { name: 'Armada Music', src: '/multimedia/images/critical-academy/critical-academy-armada-music.png' },
      { name: 'FSOE', src: '/multimedia/images/critical-academy/critical-academy-fsoe.png' },
      { name: 'Vandit', src: '/multimedia/images/critical-academy/critical-academy-vandit.png' },
      { name: 'Critical Academy', src: '/multimedia/images/critical-academy/critical-academy-logo.png' },
    ],
    socials: {
      spotify: 'https://open.spotify.com/intl-es/artist/7lF2WmukgrCZa5pxW6q1IE',
      beatport: 'https://www.beatport.com/es/artist/steve-dekay/305612',
      instagram: 'https://www.instagram.com/steve_dekay/?hl=es',
    }
  },
  {
    id: 'galeneo',
    name: 'Galeneo',
    role: 'Profesor',
    description: 'DJ y productor de Medellín con trayectoria desde 2014 en Techno y sonidos contundentes. Director de <b>Feeling 1</b> y presentador de <b>Drop TV</b> España.',
    fullBio: [
      'DJ y productor colombiano. Nacido en la ciudad de Medellín, tuvo sus inicios en el año 2014, marcando una tendencia alrededor del Techno, la cual ha evolucionado a través de los años, llevándolo a estar en tarimas a nivel internacional como Aruba, Argentina y España.',
      'Se caracteriza por sonidos contundentes, con armonías progresivas que hacen de un ambiente especial para los amantes de la buena música.',
      'A nivel nacional ha visitado diversos clubes en las ciudades de Bogotá, Cartagena y Cali, marcando una experiencia sin igual.',
      'Director del programa de música electrónica Feeling 1 y actualmente uno de los presentadores del programa Drop TV, conectado desde España.',
      'Ha tenido interacción con DJs internacionales por medio de programas como Drop TV y Feeling, y en ocasiones con artistas como Fernanda Martins, Lexlay, Anna Tur, The YellowHeads, Cristian Varela, entre otros.',
      'Actualmente se desempeña como profesor de la Academia enfocándose en el área mezcla para los cursos Social DJ y Club DJ.'
    ],
    gradient: 'from-[#714a32] to-[#cac4a1]',
    image: '/multimedia/images/critical-academy/critical-sound-founders-galeneo.jpg',
    logos: [
      { name: 'Critical Academy', src: '/multimedia/images/critical-academy/critical-academy-logo.png' },
    ],
    socials: {
      instagram: 'https://www.instagram.com/galeneo_dj/',
    }
  }
]
