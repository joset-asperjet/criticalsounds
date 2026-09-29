export type Cabin = {
  id: string
  name: string
  subtitle: string
  setup: string[]
  prices: {
    schedule: string
    practica: string
    audio: string
    audioVideo: string
  }[]
  discounts: string[]
}

export const cabins: Cabin[] = [
  {
    id: 'basica',
    name: 'CABINA BÁSICA',
    subtitle: 'Todo lo que necesitas para practicar y preparar tus sets.',
    setup: [
      'Pioneer DJ XDJ-XZ',
      '2 × Pioneer CDJ-2000 NXS',
      '2 × Pioneer PLX-500',
      '4 × DJI Action 5 Pro',
      'Blackmagic ATEM ISO',
      'Sennheiser HD25',
      'Micrófono inalámbrico',
      'Cronómetro',
      'Aire acondicionado'
    ],
    prices: [
      { schedule: 'Lun–Vie · 8 AM–12 PM', practica: '$60.000', audio: '$68.000', audioVideo: '$85.000' },
      { schedule: 'Lun–Vie · 12 PM–11 PM', practica: '$70.000', audio: '$80.000', audioVideo: '$100.000' },
      { schedule: 'Sábado', practica: '$63.000', audio: '$72.000', audioVideo: '$90.000' },
      { schedule: 'Domingo*', practica: '$90.000', audio: '$100.000', audioVideo: '$120.000' }
    ],
    discounts: ['Lunes a viernes de 8 AM a 12 PM → 15% OFF', 'Sábados → 10% OFF']
  },
  {
    id: 'pro',
    name: 'CABINA PRO',
    subtitle: 'Para entrenar con una configuración de club (DJM-A9 + 4 decks + RMX-1000).',
    setup: [
      'Pioneer DJM-A9',
      '2 × Pioneer CDJ-3000',
      '2 × Pioneer CDJ-2000 NXS2',
      '2 × Pioneer PLX-1000',
      'Pioneer RMX-1000',
      '4 × DJI Action 5 Pro',
      'Blackmagic ATEM ISO',
      'Sennheiser HD25L',
      'Micrófono inalámbrico',
      'Cronómetro',
      'Aire acondicionado'
    ],
    prices: [
      { schedule: 'Lun–Vie · 8 AM–12 PM', practica: '$77.000', audio: '$85.000', audioVideo: '$102.000' },
      { schedule: 'Lun–Vie · 12 PM–11 PM', practica: '$90.000', audio: '$100.000', audioVideo: '$120.000' },
      { schedule: 'Sábado', practica: '$81.000', audio: '$90.000', audioVideo: '$108.000' },
      { schedule: 'Domingo*', practica: '$110.000', audio: '$120.000', audioVideo: '$140.000' }
    ],
    discounts: ['Lunes a viernes de 8 AM a 12 PM → 15% OFF', 'Sábados → 10% OFF']
  },
  {
    id: 'pro-v10',
    name: 'CABINA PRO V10',
    subtitle: 'La configuración para quienes quieren llevar el performance al límite.',
    setup: [
      'Pioneer DJM-V10',
      '2 × Pioneer CDJ-3000',
      '2 × Pioneer CDJ-2000 NXS2',
      '2 × Pioneer PLX-1000',
      'Pioneer RMX-1000',
      '4 × DJI Action 5 Pro',
      'Blackmagic ATEM ISO',
      'Sennheiser HD25L',
      'Micrófono inalámbrico',
      'Cronómetro',
      'Aire acondicionado'
    ],
    prices: [
      { schedule: 'Lun–Vie · 8 AM–12 PM', practica: '$85.000', audio: '$94.000', audioVideo: '$111.000' },
      { schedule: 'Lun–Vie · 12 PM–11 PM', practica: '$100.000', audio: '$110.000', audioVideo: '$130.000' },
      { schedule: 'Sábado', practica: '$90.000', audio: '$99.000', audioVideo: '$117.000' },
      { schedule: 'Domingo*', practica: '$120.000', audio: '$130.000', audioVideo: '$150.000' }
    ],
    discounts: ['Lunes a viernes de 8 AM a 12 PM → 15% OFF', 'Sábados → 10% OFF']
  }
]
