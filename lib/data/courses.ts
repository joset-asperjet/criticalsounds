export type Course = {
  id: string
  slug: string
  name: string
  price: string
  oldPrice?: string
  duration: string
  level: string
  tag: string
  tone: string
  description: string
  learning: string[]
  equipment: string[]
}

export const courses: Course[] = [
  {
    id: '01',
    slug: 'social-dj',
    name: 'Social DJ',
    price: '$1.699.000',
    oldPrice: '$1.899.000',
    duration: '32 h · 2 meses',
    level: 'Cero',
    tag: 'Para empezar',
    tone: 'cyan',
    description: 'Aprende a tocar para fiestas, fincas y eventos privados con seguridad.',
    learning: [
      'Ritmo, tonalidad y géneros',
      'Ecualización y sincronización',
      'Loops, FX y Hot Cues',
      'Mezcla armónica (Camelot)'
    ],
    equipment: ['Pioneer XDJ-XZ', 'Pioneer CDJ-2000 Nexus']
  },
  {
    id: '02',
    slug: 'club-dj',
    name: 'Club DJ',
    price: '$1.899.000',
    oldPrice: '$1.999.000',
    duration: '32 h · 2 meses',
    level: 'Cero',
    tag: 'Más elegido',
    tone: 'lime',
    description: 'Prepárate para clubs, festivales y grandes escenarios con equipos PRO.',
    learning: [
      'Mezcla profesional en 3 y 4 decks',
      'Efectos avanzados y RMX-1000',
      'Mashups y sesiones B2B',
      'Etiqueta DJ en cabina'
    ],
    equipment: ['Pioneer DJM-A9', 'Pioneer CDJ-3000', 'RMX-1000']
  },
  {
    id: '03',
    slug: 'vinyl-dj',
    name: 'Vinyl DJ',
    price: '$1.999.000',
    duration: '32 h · 2 meses',
    level: 'Cero',
    tag: 'Analógico',
    tone: 'violet',
    description: 'Domina el arte de mezclar en vinilo combinando precisión y herramientas digitales.',
    learning: [
      'Manejo digital-análogo',
      'Mantenimiento de vinilos y agujas',
      'Groove Reading',
      'Turntablismo y scratching'
    ],
    equipment: ['Pioneer PLX-1000', 'Pioneer PLX-500']
  },
  {
    id: '04',
    slug: 'digital-dj',
    name: 'DJ Completo — Digital',
    price: '$3.199.000',
    duration: '64 h · 4 meses',
    level: 'Cero',
    tag: 'Combo (Social + Club)',
    tone: 'orange',
    description: 'Una ruta integral para desarrollar fundamentos y manejo de cabinas digitales de nivel básico a profesional.',
    learning: [
      'Todo lo incluido en Social DJ',
      'Todo lo incluido en Club DJ',
      'Trabajo con 3 y 4 decks',
      'Herramientas profesionales'
    ],
    equipment: ['XDJ-XZ', 'DJM-A9', 'CDJ-3000', 'RMX-1000']
  },
  {
    id: '05',
    slug: '360-dj',
    name: 'DJ Completo — Digital & Vinyl',
    price: '$4.799.000',
    duration: '96 h · 6 meses',
    level: 'Cero',
    tag: 'Mayor ahorro',
    tone: 'pink',
    description: 'De cero a profesional, sin límites entre digital y análogo. La ruta más completa.',
    learning: [
      'Sets digitales y en vinilo',
      'Combinación de sistemas análogos y digitales',
      'Técnicas avanzadas',
      'Diferentes formatos de presentación'
    ],
    equipment: ['XDJ-XZ', 'DJM-A9', 'CDJ-3000', 'PLX-1000', 'PLX-500']
  },
  {
    id: '06',
    slug: 'master-dj',
    name: 'Master DJ',
    price: '$1.999.000',
    duration: '32 h · 2 meses',
    level: 'Avanzado',
    tag: 'Especialización',
    tone: 'blue',
    description: 'Perfecciona tu técnica y desarrolla un sonido profesional. Para DJs con bases.',
    learning: [
      'Ecualización avanzada',
      'Técnicas de fader y filtrado',
      'Wet/Dry',
      'Mezcla en 3 y 4 decks'
    ],
    equipment: ['DJM-A9', 'DJM-V10', 'CDJ-3000', 'XDJ-XZ']
  },
  {
    id: '07',
    slug: 'master-efx-dj',
    name: 'Master EFX DJ',
    price: '$599.000',
    duration: '10 h · 4 sesiones',
    level: 'Avanzado',
    tag: 'Intensivo',
    tone: 'red',
    description: 'Formación especializada para convertir los efectos en una herramienta creativa.',
    learning: [
      'Técnicas de efectos de color',
      'Combinaciones con RMX-1000',
      'Uso simultáneo de múltiples efectos',
      'Integración KORG Kaoss Pad'
    ],
    equipment: ['DJM-V10', 'CDJ-3000', 'RMX-1000']
  }
]
