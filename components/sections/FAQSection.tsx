'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: React.ReactNode
}

const faqs: FAQItem[] = [
  {
    question: '¿Cómo puedo confirmar una reserva de una sala de práctica?',
    answer: 'Para confirmar tu reserva debes realizar un anticipo del 50% y enviar el comprobante por WhatsApp. El anticipo no es reembolsable y el saldo restante se paga al finalizar la sesión.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer: 'Aceptamos Bre-B, PSE, Nequi, Mercado Pago, tarjetas débito/crédito y transferencia bancaria. No aceptamos efectivo. Los pagos con tarjeta o Mercado Pago tienen una comisión del 5,3%.',
  },
  {
    question: '¿Cuál es la política de reprogramación y cancelación?',
    answer: 'Puedes reprogramar o ceder tu reserva con un mínimo de 2 horas de anticipación. La reserva solo se puede reprogramar una vez, con un plazo máximo de 30 días. Si cancelas con menos de 2 horas de anticipación o no te presentas (no show), pierdes la reserva y el anticipo.',
  },
  {
    question: '¿Con cuánto tiempo de anticipación debo llegar?',
    answer: 'Se recomienda llegar 15 minutos antes. El tiempo de retraso se descuenta directamente de tu sesión.',
  },
  {
    question: '¿Si quiero grabar la sesión, en qué formato recibiré mi DJ set?',
    answer: (
      <>
        En video de alta definición. Normalmente lo alojamos en nuestro canal de YouTube, pero eres libre de escoger si deseas guardarlo para ti o compartirlo desde nuestro canal de{' '}
        <a
          href="https://www.youtube.com/@CriticalSounds"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#d7ff54] underline hover:opacity-80 transition-opacity"
        >
          @CriticalSounds
        </a>{' '}
        en YouTube.
      </>
    ),
  },
  {
    question: '¿Puedo traer invitados a mi sesión?',
    answer: 'Sí, puedes venir acompañado. El primer invitado está incluido; a partir del segundo hay un costo adicional (+$10.000 por el segundo, +$20.000 por el tercero y +$30.000 por el cuarto). El límite es de máximo 4 personas por sala.',
  },
  {
    question: '¿Se permiten sesiones B2B?',
    answer: 'Sí, las sesiones B2B (dos DJs en una cabina) están permitidas con un valor adicional de +$10.000/h.',
  },
  {
    question: '¿Qué incluyen las cabinas de práctica?',
    answer: 'Dependiendo de la cabina elegida (Básica, Pro o Pro V10), incluyen equipos Pioneer de última generación, audífonos Sennheiser HD25, micrófono inalámbrico, aire acondicionado, tratamiento acústico y la opción de grabación de audio y video en Full HD con cámaras DJI.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-[8vw] bg-[#0d0d0e] text-[#f5f3ef] border-t border-[#242428]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14 text-center sm:text-left">
          <h2 className="text-[clamp(36px,5vw,64px)] leading-[0.95] font-light tracking-tight mb-4">
            Preguntas <span className="text-[#d7ff54]">Frecuentes</span>
          </h2>
          <p className="text-[#999] text-[15px] sm:text-[16px]">
            Todo lo que necesitas saber antes de reservar o asistir a tu sesión de práctica.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="border border-[#26262a] rounded-none overflow-hidden bg-[#141416] transition-colors hover:border-[#38383e]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <span className="text-[16px] sm:text-[17px] font-medium text-white tracking-wide">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-[#333] flex items-center justify-center text-[#d7ff54] text-lg font-light transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-[#d7ff54]/10 border-[#d7ff54]/30' : 'bg-[#1a1a1c]'
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#222225] text-[#bbb] text-[14px] sm:text-[15px] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
