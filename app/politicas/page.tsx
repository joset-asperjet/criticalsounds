export default function PoliticasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f3ef] text-[#0d0d0e]">
      <section className="py-24 px-8 lg:px-[8vw] border-b border-[#ddd]">
        <div className="text-[10px] tracking-widest uppercase text-[#777] mb-12">LEGAL</div>
        <div className="max-w-2xl">
          <h1 className="text-[clamp(40px,5.7vw,82px)] leading-[0.92] font-light tracking-tight mb-8">
            Políticas de <span className="text-[#7c7d78]">Reserva</span>
          </h1>
          <p className="text-[#666] text-[17px] leading-relaxed mb-8">
            Para garantizar una buena experiencia para todos nuestros estudiantes, artistas y visitantes, aplicamos las siguientes políticas.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 lg:px-[8vw] max-w-4xl">
        <div className="space-y-16">
          <div>
            <h2 className="text-[24px] font-medium mb-4 flex items-center gap-3">
              <span className="text-[32px]">⏰</span> Llegada
            </h2>
            <p className="text-[#555] leading-relaxed">
              Te recomendamos llegar <b>15 minutos antes</b>. El tiempo de retraso se descuenta de la sesión, sin excepciones.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-medium mb-4 flex items-center gap-3">
              <span className="text-[32px]">🔁</span> Reprogramaciones
            </h2>
            <p className="text-[#555] leading-relaxed">
              Puedes reprogramar o ceder tu reserva con un mínimo de <b>2 horas de anticipación</b>.<br/><br/>
              La reserva puede reprogramarse <b>una sola vez</b>, con un plazo máximo de <b>30 días</b>.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-medium mb-4 flex items-center gap-3">
              <span className="text-[32px]">🚫</span> Cancelaciones tardías / No show
            </h2>
            <p className="text-[#555] leading-relaxed">
              Si cancelas con menos de 2 horas de anticipación o no te presentas (no show), <b>pierdes la reserva y el anticipo</b>.
            </p>
          </div>
          
          <div className="pt-12 border-t border-[#ccc]">
            <h2 className="text-[24px] font-medium mb-4">Formas de Pago</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Aceptamos: Bre-B, PSE, Nequi, Mercado Pago, Tarjeta débito/crédito y Transferencia bancaria.<br/>
              <b>No aceptamos efectivo.</b>
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Pagos con tarjeta o Mercado Pago aplican una comisión del <b>5,3%</b>.
            </p>
            <p className="text-[#555] leading-relaxed">
              Para confirmar tu reserva debes realizar un <b>anticipo del 50%</b> y enviar el comprobante por WhatsApp. El saldo restante se paga al finalizar la sesión. <b>El anticipo no es reembolsable.</b>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
