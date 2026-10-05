export type CourseCategory = 'cero' | 'combo' | 'masterclass'

export type CourseLevelItem = {
  title: string
  topics: string
}

export interface EquipmentItem {
  name: string
  image: string
}

export const EQUIPMENT_IMAGES: Record<string, string> = {
  'Pioneer XDJ-XZ': '/multimedia/images/critical-academy/equip/critical-sounds-pioneer-xdj-xz.png',
  'Pioneer CDJ-2000 Nexus': '/multimedia/images/critical-academy/equip/critical-sounds-pioneer-2000-nexus.png',
  'Pioneer CDJ-2000 Nexus 2': '/multimedia/images/critical-academy/equip/critical-sounds-pioneer-cdj-2000-nexus-2.png',
  'Pioneer CDJ-3000': '/multimedia/images/critical-academy/equip/critical-sounds-pioneer-cdj-3000.png',
  'Pioneer DJM-A9': '/multimedia/images/critical-academy/equip/critical-sounds-pioneer-dj-a9.png',
  'Pioneer DJM-V10': '/multimedia/images/critical-academy/equip/critical-sounds-pioneer-djm-v-10.png',
  'Pioneer PLX-1000': '/multimedia/images/critical-academy/equip/critical-sounds-pioneer-plx-1000.png',
  'Pioneer PLX-500': '/multimedia/images/critical-academy/equip/critical-sounds-pioneer-plx-500.png',
  'RMX-1000': '/multimedia/images/critical-academy/equip/critical-sounds-pioneer-rmx-1000.png',
  'Pioneer RMX-1000': '/multimedia/images/critical-academy/equip/critical-sounds-pioneer-rmx-1000.png',
}

export const getEquipmentImage = (name: string): string => {
  return EQUIPMENT_IMAGES[name] || ''
}

export type Course = {
  id: string
  slug: string
  name: string
  subtitle?: string
  price: string
  oldPrice?: string
  duration: string
  modality?: string
  level: string
  tag: string
  tone: string
  category: CourseCategory
  image: string
  description: string
  extendedDescription?: string
  learning: string[]
  syllabusLevels: CourseLevelItem[]
  outcomes?: string[]
  equipment: string[]
  ctaText?: string
}

export const courses: Course[] = [
  {
    id: '01',
    slug: 'social-dj',
    name: 'Social DJ',
    subtitle: 'Aprende a tocar para fiestas, fincas y eventos privados.',
    price: '$1.599.000',
    duration: '32 h · 2 meses',
    modality: '3 horas de práctica + 1 hora de teoría semanal',
    level: 'Cero',
    tag: 'Para empezar',
    tone: 'cyan',
    category: 'cero',
    image: '/multimedia/images/educational/critical-sounds-dj-social-dj.webp',
    description: 'Aprende a tocar para fiestas, fincas y eventos privados con seguridad.',
    extendedDescription: 'Una formación diseñada para quienes quieren empezar desde cero y aprender a desenvolverse con seguridad en eventos sociales y privados. Durante el curso desarrollarás fundamentos de mezcla, manejo de equipos Pioneer, ecualización, sincronización, efectos, Hot Cues, RekordBox y construcción de sets.',
    learning: [
      'Ritmo, tonalidad, géneros musicales y manejo de controladoras Pioneer',
      'Ecualización, sincronización y técnicas básicas de mezcla',
      'Loops, FX, mezcla armónica con Camelot y Hot Cues',
      'RekordBox, creación de playlists y mezcla en 3 decks',
      'Conexión de equipos, mashups, construcción de sets profesionales y sesiones B2B'
    ],
    syllabusLevels: [
      {
        title: 'Nivel 1 · Fundamentos',
        topics: 'Ritmo, tonalidad, géneros musicales, manejo de controladoras Pioneer, ecualización, sincronización y técnicas básicas de mezcla.'
      },
      {
        title: 'Nivel 2 · Mezcla profesional',
        topics: 'Loops, FX, mezcla armónica con Camelot, Hot Cues, RekordBox y creación de playlists.'
      },
      {
        title: 'Nivel 3 · Escenario real',
        topics: 'Mezcla en 3 decks, conexión de equipos, mashups, construcción de sets profesionales y sesiones B2B.'
      }
    ],
    outcomes: [
      'Mezclar en eventos sociales y privados.',
      'Crear tus propios sets.',
      'Presentarte con mayor seguridad.',
      'Dominar equipos reales de cabina.'
    ],
    equipment: ['Pioneer XDJ-XZ', 'Pioneer CDJ-2000 Nexus'],
    ctaText: 'Quiero aprender Social DJ'
  },
  {
    id: '02',
    slug: 'club-dj',
    name: 'Club DJ',
    subtitle: 'Prepárate para clubs, festivales y grandes escenarios.',
    price: '$1.799.000',
    duration: '32 h · 2 meses',
    modality: '3 horas de práctica + 1 hora de teoría semanal',
    level: 'Cero',
    tag: 'Más elegido',
    tone: 'lime',
    category: 'cero',
    image: '/multimedia/images/educational/critical-sounds-dj.webp',
    description: 'Prepárate para clubs, festivales y grandes escenarios con equipos PRO.',
    extendedDescription: 'Da el siguiente paso y aprende las técnicas necesarias para desenvolverte en cabinas profesionales, clubs, festivales y eventos públicos. Trabajarás con sistemas Pioneer de nivel profesional y desarrollarás habilidades de mezcla, efectos, performance y construcción de sets.',
    learning: [
      'Ritmo, tonalidad, géneros y manejo de equipos Pioneer avanzados',
      'Ecualización precisa, sincronización y técnicas de mezcla',
      'Loops, sampling, FX, mezcla armónica Camelot, Hot Cues y RekordBox',
      'Mezcla en 3 y 4 decks y manejo del procesador de efectos RMX-1000',
      'Mashups, sets profesionales, sesiones B2B y etiqueta DJ en cabina'
    ],
    syllabusLevels: [
      {
        title: 'Nivel 1 · Fundamentos',
        topics: 'Ritmo, tonalidad, géneros, manejo de equipos Pioneer, ecualización, sincronización y técnicas de mezcla.'
      },
      {
        title: 'Nivel 2 · Mezcla profesional',
        topics: 'Loops, sampling, FX, mezcla armónica con Camelot, Hot Cues, RekordBox y construcción de playlists.'
      },
      {
        title: 'Nivel 3 · Nivel PRO',
        topics: 'Mezcla en 3 y 4 decks, RMX-1000, efectos avanzados, mashups, sets profesionales, B2B y etiqueta DJ.'
      }
    ],
    outcomes: [
      'Mezclar en clubs, festivales y eventos públicos.',
      'Crear sets adaptados a diferentes audiencias.',
      'Utilizar técnicas avanzadas de mezcla.',
      'Dominar cabinas profesionales.'
    ],
    equipment: ['Pioneer DJM-A9', 'Pioneer DJM-V10', 'Pioneer CDJ-2000 Nexus 2', 'Pioneer CDJ-3000', 'RMX-1000'],
    ctaText: 'Quiero aprender Club DJ'
  },
  {
    id: '03',
    slug: 'vinyl-dj',
    name: 'Vinyl DJ',
    subtitle: 'Domina el arte de mezclar en vinilo.',
    price: '$1.999.000',
    duration: '32 h · 2 meses',
    modality: '3 horas de práctica + 1 hora de teoría semanal',
    level: 'Cero',
    tag: 'Analógico',
    tone: 'violet',
    category: 'cero',
    image: '/multimedia/images/educational/critical-sounds-vinyl-dj.webp',
    description: 'Domina el arte de mezclar en vinilo combinando precisión y herramientas digitales.',
    extendedDescription: 'Una formación especializada para quienes quieren desarrollar la técnica del DJing en formato análogo, combinando la precisión del vinilo con herramientas digitales y técnicas avanzadas.',
    learning: [
      'Manejo digital-análogo y mantenimiento de vinilos y agujas',
      'Sincronización análogo-análogo y análogo-digital',
      'Mezcla armónica, mezcla en clave (MIK) y Groove Reading',
      'Efectos aplicados al vinilo y técnicas Wet/Dry',
      'Mashups híbridos, turntablismo, scratching, chirping, sets, B2B y etiqueta DJ'
    ],
    syllabusLevels: [
      {
        title: 'Nivel 1 · Fundamentos',
        topics: 'Ritmo, tonalidad, géneros, manejo digital-análogo, ecualización, sincronización análogo-análogo y análogo-digital, además de mantenimiento de vinilos y agujas.'
      },
      {
        title: 'Nivel 2 · Mezcla profesional',
        topics: 'Sincronización avanzada, mezcla armónica, mezcla en clave (MIK), Groove Reading y efectos aplicados al vinilo.'
      },
      {
        title: 'Nivel 3 · Nivel PRO',
        topics: 'Técnicas de vinilo wet/dry, mashups análogo-análogo y análogo-digital, turntablismo, scratching, chirping, construcción de sets, B2B y etiqueta DJ.'
      }
    ],
    outcomes: [
      'Mezclar en clubs y festivales utilizando vinilos.',
      'Construir sets enfocados en formato análogo.',
      'Combinar equipos digitales y análogos.',
      'Dominar cabinas básicas y profesionales.'
    ],
    equipment: ['Pioneer PLX-1000', 'Pioneer PLX-500', 'Pioneer CDJ-3000', 'Pioneer CDJ-2000 Nexus', 'Pioneer DJM-A9', 'Pioneer DJM-V10', 'Pioneer XDJ-XZ'],
    ctaText: 'Quiero aprender Vinyl DJ'
  },
  {
    id: '04',
    slug: 'digital-dj',
    name: 'DJ Completo — Digital',
    subtitle: 'Social DJ + Club DJ · Domina el DJing digital desde eventos privados hasta clubs y festivales.',
    price: '$2.969.000',
    duration: '64 h · 4 meses',
    level: 'Cero',
    tag: 'Social DJ + Club DJ',
    tone: 'orange',
    category: 'combo',
    image: '/multimedia/images/educational/critical-sounds-dj-completo.webp',
    description: 'Ruta integral que combina Social DJ y Club DJ. Desarrolla fundamentos, técnicas avanzadas y manejo de cabinas digitales de nivel básico y profesional.',
    extendedDescription: 'Domina el DJing digital desde los eventos privados hasta clubs y festivales. Una ruta integral para desarrollar fundamentos, técnicas avanzadas y manejo de cabinas digitales de nivel básico y profesional.',
    learning: [
      'Mezclar en eventos privados, clubs y festivales',
      'Crear sets adaptados para diferentes públicos',
      'Utilizar técnicas avanzadas de mezcla y transiciones',
      'Dominar equipos Pioneer en diversas configuraciones',
      'Trabajar con soltura en 3 y 4 decks',
      'Utilizar efectos y herramientas profesionales como RMX-1000'
    ],
    syllabusLevels: [
      {
        title: 'Etapa 1 · Social DJ (Fundamentos & Eventos)',
        topics: 'Ritmo, tonalidad, géneros, controladoras Pioneer, ecualización, sincronización, loops, FX, mezcla armónica con Camelot, Hot Cues, RekordBox y conexión de equipos.'
      },
      {
        title: 'Etapa 2 · Club DJ (Nivel PRO & Escenarios)',
        topics: 'Sistemas Pioneer de alta gama (DJM-A9, CDJ-3000), mezcla avanzada en 3 y 4 decks, procesador RMX-1000, mashups en vivo, construcción de sets de club, B2B y etiqueta DJ.'
      }
    ],
    outcomes: [
      'Mezclar en eventos privados, clubs y festivales.',
      'Crear sets para diferentes públicos.',
      'Utilizar técnicas avanzadas de mezcla.',
      'Dominar equipos Pioneer de diferentes configuraciones.',
      'Trabajar con 3 y 4 decks.',
      'Utilizar efectos y herramientas profesionales.'
    ],
    equipment: ['Pioneer XDJ-XZ', 'Pioneer DJM-A9', 'Pioneer DJM-V10', 'Pioneer CDJ-2000 Nexus 2', 'Pioneer CDJ-3000', 'RMX-1000'],
    ctaText: 'Quiero el programa Digital'
  },
  {
    id: '05',
    slug: '360-dj',
    name: 'DJ Completo — Digital & Vinyl',
    subtitle: 'Social DJ + Club DJ + Vinyl DJ · De cero a profesional, sin límites entre lo digital y lo análogo.',
    price: '$4.799.000',
    duration: '96 h · 6 meses',
    level: 'Cero',
    tag: 'Social DJ + Club DJ + Vinyl DJ',
    tone: 'pink',
    category: 'combo',
    image: '/multimedia/images/educational/critical-sounds-dj-digital-and-vinyl.webp',
    description: 'De cero a profesional total: incluye Social DJ, Club DJ y Vinyl DJ. La ruta más completa y definitiva sin límites.',
    extendedDescription: 'La ruta más completa de formación de Critical Sounds Academy & Studios. Combina tres programas para desarrollar una formación integral en DJing digital y vinilo, desde los fundamentos hasta las técnicas profesionales.',
    learning: [
      'Mezclar en eventos privados, clubs y festivales',
      'Crear sets digitales de vanguardia y sets 100% en vinilo',
      'Combinar sistemas análogos y digitales con fluidez en tiempo real',
      'Trabajar en cabinas básicas y de nivel festival profesional',
      'Desarrollar técnicas avanzadas de mezcla en 3 y 4 decks',
      'Incorporar efectos y herramientas profesionales (RMX-1000, V10)',
      'Prepararte con seguridad para cualquier formato de presentación'
    ],
    syllabusLevels: [
      {
        title: 'Etapa 1 · Social DJ (Fundamentos & Eventos)',
        topics: 'Ritmo, tonalidad, géneros, controladoras Pioneer, ecualización, sincronización, loops, FX, Camelot, Hot Cues, RekordBox y conexión de equipos.'
      },
      {
        title: 'Etapa 2 · Club DJ (Nivel PRO & Festivales)',
        topics: 'Cabinas profesionales completas, mezcla en 3 y 4 decks, procesador de efectos RMX-1000, DJM-A9 / DJM-V10, sets profesionales y sesiones B2B.'
      },
      {
        title: 'Etapa 3 · Vinyl DJ (Turntablismo & Formato Análogo)',
        topics: 'Manejo digital-análogo (PLX-1000/500), sincronización manual a oído, Groove Reading, técnicas wet/dry en vinilo, scratching, chirping y sets híbridos.'
      }
    ],
    outcomes: [
      'Mezclar en eventos privados, clubs y festivales.',
      'Crear sets digitales y en vinilo.',
      'Combinar sistemas análogos y digitales.',
      'Trabajar con cabinas básicas y profesionales.',
      'Desarrollar técnicas avanzadas de mezcla.',
      'Trabajar con 3 y 4 decks.',
      'Incorporar efectos y herramientas profesionales.',
      'Prepararte para diferentes formatos de presentación.'
    ],
    equipment: ['Pioneer XDJ-XZ', 'Pioneer DJM-A9', 'Pioneer DJM-V10', 'Pioneer CDJ-2000 Nexus', 'Pioneer CDJ-2000 Nexus 2', 'Pioneer CDJ-3000', 'Pioneer PLX-1000', 'Pioneer PLX-500', 'RMX-1000'],
    ctaText: 'Quiero el programa Completo'
  },
  {
    id: '06',
    slug: 'master-dj',
    name: 'Master DJ',
    subtitle: 'Perfecciona tu técnica y desarrolla un sonido profesional.',
    price: '$1.899.000',
    duration: '32 h · 2 meses',
    modality: '3 horas de práctica + 1 hora de teoría semanal',
    level: 'Avanzado',
    tag: 'Especialización',
    tone: 'blue',
    category: 'masterclass',
    image: '/multimedia/images/educational/critical-sounds-master-dj.webp',
    description: 'Perfecciona tu técnica y desarrolla un sonido profesional. Para DJs con bases.',
    extendedDescription: 'Una formación avanzada para DJs que quieren llevar su mezcla, performance y manejo de cabina a un nivel superior.',
    learning: [
      'Ecualización avanzada y técnicas de fader',
      'Efectos de color y ritmo, filtrado y combinación de efectos',
      'RMX-1000 y técnicas Wet/Dry',
      'Mezcla armónica avanzada con Camelot y MIK',
      'Mezcla en 3 y 4 decks, mashups en vivo',
      'RekordBox + Pioneer Pro DJ Link, B2B y etiqueta profesional del DJ'
    ],
    syllabusLevels: [
      {
        title: 'Nivel 1 · Control y Dinámica Sonora',
        topics: 'Ecualización avanzada, técnicas de fader de alta precisión, efectos de color y ritmo, filtrado dinámico y combinación armónica de efectos.'
      },
      {
        title: 'Nivel 2 · Performance y Multideck',
        topics: 'RMX-1000 con técnicas Wet/Dry, mezcla armónica avanzada con Camelot y Mixed In Key (MIK), y mezcla continua en 3 y 4 decks.'
      },
      {
        title: 'Nivel 3 · Escenarios de Élite',
        topics: 'Mashups en vivo, ecosistema RekordBox + Pioneer Pro DJ Link, sesiones B2B de alto rendimiento y etiqueta profesional del DJ en cabinas de festival.'
      }
    ],
    outcomes: [
      'Crear sets utilizando técnicas avanzadas.',
      'Dominar equipos profesionales de cabina.',
      'Desarrollar una mayor precisión y control durante la mezcla.',
      'Presentarte con mayor seguridad en eventos y festivales.'
    ],
    equipment: ['Pioneer DJM-A9', 'Pioneer DJM-V10', 'Pioneer XDJ-XZ', 'Pioneer CDJ-2000 Nexus 2', 'Pioneer CDJ-3000', 'RMX-1000'],
    ctaText: 'Quiero hacer Master DJ'
  },
  {
    id: '07',
    slug: 'master-efx-dj',
    name: 'Master EFX DJ',
    subtitle: 'Domina los efectos como un DJ profesional.',
    price: '$649.000',
    duration: '10 h',
    modality: '8 horas de práctica + 1 hora de teoría',
    level: 'Avanzado',
    tag: 'Intensivo',
    tone: 'red',
    category: 'masterclass',
    image: '/multimedia/images/educational/critical-sounds-dj-fx.webp',
    description: 'Formación especializada para convertir los efectos en una herramienta creativa.',
    extendedDescription: 'Una formación intensiva y especializada para quienes quieren convertir los efectos en una herramienta creativa dentro de sus sets.',
    learning: [
      'Técnicas de efectos de color',
      'Combinaciones con RMX-1000',
      'Técnicas Wet/Dry con DJM-V10',
      'Mezcla en 3 y 4 decks con efectos',
      'Uso simultáneo de múltiples efectos y ruteos SEND/RECEIVE',
      'Integración de KORG Kaoss Pad 3 y Kaossilator 3'
    ],
    syllabusLevels: [
      {
        title: 'Nivel 1 · Fundamentos Creativos de FX',
        topics: 'Técnicas de efectos de color, combinaciones dinámicas con RMX-1000 y técnicas Wet/Dry avanzadas con mixer DJM-V10.'
      },
      {
        title: 'Nivel 2 · Mezcla Compleja y Ruteos',
        topics: 'Mezcla en 3 y 4 decks con aplicación de efectos, uso simultáneo de múltiples capas de efectos y gestión de ruteos SEND/RECEIVE.'
      },
      {
        title: 'Nivel 3 · Integración de Hardware Externo',
        topics: 'Conexión y manipulación en vivo de KORG Kaoss Pad 3 y Kaossilator 3 integrados a la cabina Pioneer para transiciones y texturas únicas.'
      }
    ],
    outcomes: [
      'Incorporar efectos de manera musical a tus sets.',
      'Crear transiciones y momentos de mayor impacto.',
      'Utilizar configuraciones avanzadas de efectos.',
      'Trabajar con cabinas profesionales.'
    ],
    equipment: ['Pioneer DJM-A9', 'Pioneer DJM-V10', 'Pioneer XDJ-XZ', 'Pioneer CDJ-2000 Nexus', 'Pioneer CDJ-2000 Nexus 2', 'Pioneer CDJ-3000', 'RMX-1000'],
    ctaText: 'Quiero hacer Master EFX DJ'
  }
]
