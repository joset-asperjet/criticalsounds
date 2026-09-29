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
    role: 'CEO · Director de Academia · DJ & Productor',
    description: 'Con más de 15 años de trayectoria, Pablo ha orquestado la fusión de disciplinas trance y ha llevado sus sonidos a <b>ASOT</b> y los escenarios más importantes del mundo.',
    fullBio: [
      'La música ha sido su pasión profesional desde 2004. Su talento innato y su técnica impecable constituyen la base de su carrera como artista de música electrónica. La versatilidad y la maestría musical se combinan en todas sus presentaciones, abarcando diversos géneros de trance.',
      'Pablo siempre ha visualizado la fusión de disciplinas trance, orquestando temas musicales opuestos, eufóricos y su opuesto. Esta estructura distintiva apareció por primera vez en la escena en 2015, consolidando el éxito de Pablo con su sonido único con Andromeda (Discover) y No Regrets (Universal Nation) soportado por pesos pesados del trance: John Askew, Sean Tyas, Woody Van Hayden, Binary Finary, Bryan Kearney, John O’Callaghan, Photographer y Alex M.O.R.P.H.',
      'Su nuevo estilo sonoro expandió exponencialmente la lista de presentaciones contratadas, comenzando con una modesta gira por Estados Unidos en 2013 (que incluyó WMC, Los Ángeles y el Medio Oeste); y sumando Nueva Zelanda, México, Colombia, Argentina y Alemania para los lanzamientos de los sellos Critical State y Universal Nation entre 2016 y 2017. Además, Pablo ha tocado en algunos de los mejores clubes y eventos como Earthcore, GAS, Plastic, Transmission, Digital Therapy y Voodoo @ Home Sydney, teloneando a Ferry Corsten, Cosmic Gate, Paul van Dyk, Coming Soon!!! e Infected Mushroom.',
      '2017 trajo consigo un nuevo resurgimiento de presentaciones y lanzamientos, mostrando su sonido personal a través de los sellos Critical State, Critical Overload y Critical Uprising de Komplex Sounds (KSX) Label Group y Perfecto Fluoro, incluyendo sus mayores lanzamientos: «War & Peace» y la colaboración con Talla 2XLC.',
      'Para 2018, Pablo Anon se estableció en Medellín, Colombia. Con sus sonidos psicodélicos fusionados, ya era un nombre reconocido en Brasil, Europa (Ozora) y Australia (Earthcore). Alcanzó la cima de su etapa psicodélica en 2021, cuando inició una nueva faceta fusionando trance, psicodelia y techno melódico y eufórico.',
      'Para 2023, su transformación se consolidó abriendo conciertos para PROFF (2023), Ferry Corsten (2025) y Estiva (2025). Presentó sus sonidos icónicos en ASOT 1169 con su track original "Chasing Shadows" y el remix oficial de "Sweet Dreams", que arrasó en las listas de Beatport y Main Techno, con soporte de Cristian Varela, Oscar Romero, Paco Osuna, Rank 1 y Giuseppe Ottaviani. Esto lo posicionó en el Top 150 Melodic Techno de Beatport durante 2024 y 2025, captando la atención de Markus Schulz con firmas para Coldharbour y In Search of Sunrise.',
      'Tras su debut en España en 2024, regresó a Reino Unido y Europa en 2025 actuando en Genesis (Bristol), ADE y Madrid para Critical Sounds, gestionado por Luminary-Artists (Los Ángeles). Su sonido actual destaca por melodías progresivas y trance melódico, reflejado en Call Of Destiny en Coldharbour.',
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
    role: 'A&R · Productor · DJ · Profesor de mezcla',
    description: 'Prodigio de la música trance con colaboraciones en <b>Armada Music</b>, <b>Vandit Records</b> y <b>FSOE</b>. Ha compartido escenario con leyendas como Paul van Dyk.',
    fullBio: [
      'Originario de Colombia, Steve Dekay es un prodigio de la música trance cuyos ritmos y melodías han resonado por todo el mundo. Su prestigiosa reputación en la industria musical se ve reforzada por sus colaboraciones con importantes sellos discográficos como Armada Music, Vandit Records, FSOE, Black Hole y Coldharbour, entre otros.',
      'Uno de los momentos clave en la carrera de Steve ha sido su estrecha colaboración con la leyenda Paul van Dyk. Juntos crearon el tema «Aurora», incluido en el álbum «Music Rescues Me» de Paul, y «Impact», que formó parte del álbum «Guiding Light». Sus producciones se publican con regularidad bajo Armada, Vandit Records y FSOE Recordings.',
      'El magnetismo de la música de Steve cuenta con soporte constante de íconos mundiales como Aly & Fila, Armin van Buuren, Paul van Dyk, Solarstone, Giuseppe Ottaviani, Marco V y Ferry Corsten, posicionando múltiples producciones en la cima de Beatport.',
      'Como DJ, ha brillado en escenarios junto a Paul van Dyk, Aly & Fila, Alex M.O.R.P.H, Cosmic Gate, Sander van Doorn, Sunnery James & Ryan Marciano, Sean Tyas, Will Atkinson y Solarstone. Destacan su actuación en Shine Ibiza junto a Paul van Dyk, el icónico Street Parade de Zúrich y transmisiones en el radio show A State Of Trance de Armin van Buuren.',
      'Entre sus reconocimientos destacan el puesto #48 en el Top 101 Producers 2020, el puesto #72 en 2021 y el galardón al Mejor Productor en los Premios CDA 2019. También destaca el remix oficial para Armin van Buuren de su clásico “Blue Fear” para el compilado anual ASOT Ibiza 2025.',
      'En 2026, su colaboración con Mauro Picotto «I Feel Love» bajo Armada Music superó el millón de reproducciones en Spotify, sumado al lanzamiento de «Feel the Love». Este año participa en el festival EDC (Electric Daisy Carnival) en su primera edición en Colombia en el escenario Stereo Bloom junto a los máximos exponentes mundiales.',
      'Actualmente se desempeña como A&R de Critical Sounds y profesor de la Academia enfocándose en el área de mezcla de trance, progressive y techno.'
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
    role: 'DJ · Productor · Profesor Social & Club DJ',
    description: 'Director del programa <b>Feeling 1</b>, con sonidos contundentes y armonías progresivas que han hecho vibrar clubes a nivel nacional e internacional.',
    fullBio: [
      'DJ y productor colombiano nacido en la ciudad de Medellín. Tuvo sus inicios en el año 2014, marcando una sólida tendencia alrededor del Techno que ha evolucionado a través de los años, llevándolo a pisar tarimas a nivel internacional en países como Aruba, Argentina y España.',
      'Se caracteriza por sonidos contundentes, con armonías progresivas que crean una atmósfera envolvente para los amantes de la música de club refinada.',
      'A nivel nacional ha recorrido los principales clubes de Bogotá, Cartagena y Cali, brindando sesiones de alto calibre en pista.',
      'Es Director del programa de música electrónica Feeling 1 y actualmente uno de los presentadores del programa Drop TV, conectado desde España. Ha compartido cabina y entrevistas con figuras internacionales como Fernanda Martins, Lexlay, Anna Tur, The YellowHeads y Cristian Varela.',
      'Actualmente se desempeña como profesor de la Academia liderando el área de mezcla práctica para los programas Social DJ y Club DJ.'
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
