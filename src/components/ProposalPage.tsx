import { CheckCircle, Clock, ExternalLink, MessageCircle, Shield, Sparkles, Zap } from 'lucide-react'

type NicheProposal = {
  service: string
  price: string
  plazo: string
  incluye: string[]
  problema: string
  beneficio: string
}

function detectProposal(niche: string): NicheProposal {
  const n = niche.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

  if (n.includes('barber') || n.includes('salon') || n.includes('belleza') || n.includes('nail') || n.includes('estetica') || n.includes('micropigment')) {
    return {
      service: 'Link Bio Vivo + Kit WhatsApp Business',
      price: 'desde $350',
      plazo: '3 – 5 días hábiles',
      incluye: [
        'Mini landing mobile-first para Instagram',
        'Galería de trabajos con identidad de marca',
        'Botón directo a WhatsApp para reservas',
        'Horario, servicios y ubicación',
        'Optimización del Kit WhatsApp Business',
      ],
      problema: 'Sus clientes potenciales llegan al perfil de Instagram y no encuentran fácil cómo agendar o contactar. Se pierden reservas todos los días.',
      beneficio: 'Una presencia digital ordenada que convierte visitantes en clientes reales desde el primer clic — sin depender de que el prospecto busque el número.',
    }
  }

  if (n.includes('restaur') || n.includes('soda') || n.includes('cafe') || n.includes('pizza') || n.includes('comida') || n.includes('heladeria') || n.includes('panaderia') || n.includes('sushi') || n.includes('gastronom')) {
    return {
      service: 'Menú Digital QR + Link Bio',
      price: 'desde $300',
      plazo: '3 – 5 días hábiles',
      incluye: [
        'Menú digital responsive adaptado al celular',
        'Categorías, fotos y precios actualizables',
        'Botón de WhatsApp para pedidos directos',
        'QR de alta resolución para imprimir',
        'Link Bio con horario, servicios y ubicación',
      ],
      problema: 'Los clientes piden el menú por WhatsApp y reciben una foto borrosa que no da buena imagen. Se pierden pedidos y la presentación no está a la altura del negocio.',
      beneficio: 'Un menú profesional que pueden compartir por WhatsApp, redes y Google Maps para captar más pedidos y proyectar una imagen premium.',
    }
  }

  if (n.includes('gimnasio') || n.includes('crossfit') || n.includes('yoga') || n.includes('pilates') || n.includes('fitness') || n.includes('gym')) {
    return {
      service: 'Landing Page de Ventas',
      price: 'desde $400',
      plazo: '5 – 7 días hábiles',
      incluye: [
        'Página de ventas enfocada en conversión',
        'Sección de planes, precios y horarios',
        'Galería de instalaciones y transformaciones',
        'Formulario de inscripción o botón WhatsApp',
        'SEO básico para búsquedas locales',
      ],
      problema: 'Las personas buscan "gimnasio en [ciudad]" en Google y no los encuentran porque solo tienen Instagram. Los competidores con web se llevan esos clientes.',
      beneficio: 'Una landing optimizada que aparece en Google y convierte búsquedas en inscripciones, sin depender únicamente de redes sociales.',
    }
  }

  if (n.includes('dental') || n.includes('odont') || n.includes('medic') || n.includes('clinic') || n.includes('psicol') || n.includes('nutri') || n.includes('fisio') || n.includes('veterinar') || n.includes('optica')) {
    return {
      service: 'Sitio Web Profesional',
      price: 'desde $500',
      plazo: '7 – 14 días hábiles',
      incluye: [
        'Sitio web de 5 páginas: inicio, servicios, equipo, contacto y citas',
        'Formulario de citas o consultas',
        'Integración con Google Maps',
        'Responsive, rápido y seguro (Lighthouse 90+)',
        'SEO básico para búsquedas locales',
      ],
      problema: 'Los pacientes buscan servicios de salud en Google y prefieren clínicas con sitio web serio. Sin uno, proyectan menos confianza que la competencia.',
      beneficio: 'Un sitio que transmite confianza profesional, es fácil de encontrar en Google y facilita agendar citas sin llamadas.',
    }
  }

  if (n.includes('abogad') || n.includes('contad') || n.includes('notari') || n.includes('consultor') || n.includes('asesor') || n.includes('bienes raices') || n.includes('inmobili') || n.includes('seguro')) {
    return {
      service: 'Tarjeta Digital + Sitio Web',
      price: 'desde $450',
      plazo: '5 – 10 días hábiles',
      incluye: [
        'Tarjeta digital profesional compartible por WhatsApp',
        'Sitio web de 3-5 páginas',
        'Sección de servicios y áreas de especialidad',
        'Formulario de contacto y consulta inicial',
        'Diseño que comunica formalidad y confianza',
      ],
      problema: 'En servicios profesionales, la primera impresión digital lo es todo. Sin presencia digital seria, muchos clientes potenciales descartan antes de hacer contacto.',
      beneficio: 'Una imagen digital que genera confianza inmediata y facilita el primer contacto formal — más clientes que llegan decididos a contratar.',
    }
  }

  if (n.includes('ropa') || n.includes('tienda') || n.includes('cosmet') || n.includes('joyeria') || n.includes('muebleria') || n.includes('floristeria')) {
    return {
      service: 'Catálogo Digital Express',
      price: 'desde $350',
      plazo: '5 – 7 días hábiles',
      incluye: [
        'Catálogo digital responsive con categorías',
        'Productos con foto, nombre, precio y descripción',
        'Botón de WhatsApp en cada producto',
        'Filtros y búsqueda básica',
        'Compartible por WhatsApp y redes sociales',
      ],
      problema: 'Mostrar el inventario por fotos de WhatsApp o stories no da buena imagen, no organiza bien y hace perder tiempo respondiendo las mismas preguntas.',
      beneficio: 'Un catálogo que los clientes pueden revisar solos, encontrar lo que buscan y escribir directo al WhatsApp para comprar — menos preguntas, más ventas.',
    }
  }

  if (n.includes('hotel') || n.includes('hostal') || n.includes('tour') || n.includes('alquiler') || n.includes('turismo')) {
    return {
      service: 'Sitio Web Premium',
      price: 'desde $600',
      plazo: '10 – 14 días hábiles',
      incluye: [
        'Sitio web con galería de fotos profesional',
        'Sección de habitaciones, tarifas y paquetes',
        'Formulario de reserva o consulta',
        'Integración con Google Maps',
        'SEO para turistas locales e internacionales',
      ],
      problema: 'Los turistas buscan alojamiento en Google y reservan donde ven el sitio más completo y confiable. Sin web propia, dependen de plataformas que cobran comisión.',
      beneficio: 'Un sitio que atrae viajeros directamente, sin comisiones de Booking o Airbnb, con una imagen que genera confianza desde el primer vistazo.',
    }
  }

  return {
    service: 'Landing Page de Ventas',
    price: 'desde $250',
    plazo: '3 – 5 días hábiles',
    incluye: [
      'Página de ventas enfocada en conversión',
      'Propuesta de valor clara y directa',
      'Botón de WhatsApp visible en todo momento',
      'Galería de fotos y descripción de servicios',
      'Adaptado a celular y carga rápida',
    ],
    problema: 'Sus clientes potenciales buscan el negocio en Google y encuentran primero a los competidores que sí tienen sitio web propio.',
    beneficio: 'Una página profesional que los posiciona mejor, transmite más confianza y convierte búsquedas en consultas reales por WhatsApp.',
  }
}

function waLink(text: string): string {
  const msg = encodeURIComponent(`Hola, vi la propuesta de NUVRO ENGINEER y me interesa avanzar con ${text}. ¿Podemos hablar?`)
  return `https://wa.me/50662001772?text=${msg}`
}

export function ProposalPage() {
  const params = new URLSearchParams(window.location.search)
  const businessName = params.get('n') ?? 'su negocio'
  const niche       = params.get('c') ?? ''
  const ciudad      = params.get('ciudad') ?? ''

  const proposal = detectProposal(niche)

  return (
    <div
      className="min-h-dvh text-white"
      style={{ background: 'linear-gradient(160deg, #060610 0%, #080816 40%, #05050F 100%)' }}
    >
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.7), transparent 70%)' }} />
        <div className="absolute -bottom-20 right-0 h-64 w-[500px] opacity-8" style={{ background: 'radial-gradient(ellipse, rgba(0,80,220,0.5), transparent 70%)' }} />
      </div>

      <div className="relative mx-auto max-w-2xl px-5 py-10 sm:px-8 sm:py-16">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div
            className="inline-flex items-center gap-2 rounded-xl border border-[#0066FF]/35 px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.15em] text-[#4d94ff]"
            style={{ background: 'linear-gradient(135deg, rgba(0,71,184,0.25), rgba(0,102,255,0.10))' }}
          >
            <Sparkles className="size-3.5" />
            NUVRO ENGINEER
          </div>
          <a
            href="https://www.nuvroenginer.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/40 transition hover:text-white/70"
          >
            Ver portafolio
            <ExternalLink className="size-3.5" />
          </a>
        </div>

        {/* Hero */}
        <div
          className="mb-6 overflow-hidden rounded-2xl border border-white/[0.08] p-8"
          style={{ background: 'linear-gradient(135deg, rgba(0,20,60,0.95), rgba(8,8,20,0.98))' }}
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF]/70">Propuesta exclusiva</p>
          <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl">
            {businessName}
          </h1>
          {(niche || ciudad) && (
            <p className="mt-2 text-sm text-white/40">
              {[niche, ciudad].filter(Boolean).join(' · ')}
            </p>
          )}
        </div>

        {/* Problem */}
        <div className="mb-4 rounded-2xl border border-amber-500/20 bg-amber-500/[0.05] p-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-amber-400/80">Lo que detectamos</p>
          <p className="text-sm leading-6 text-white/75">{proposal.problema}</p>
        </div>

        {/* Solution */}
        <div
          className="mb-4 overflow-hidden rounded-2xl border border-[#0066FF]/30 p-6"
          style={{ background: 'linear-gradient(135deg, rgba(0,71,184,0.18), rgba(0,102,255,0.07))' }}
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-[#4d94ff]/80">Nuestra propuesta</p>
              <h2 className="text-xl font-black text-white">{proposal.service}</h2>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-2xl font-black text-white">{proposal.price}</p>
              <div className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-bold text-white/50">
                <Clock className="size-3" />
                {proposal.plazo}
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-white/40">Incluye</p>
            <ul className="space-y-2.5">
              {proposal.incluye.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                  <span className="text-sm leading-5 text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.07] p-4">
            <div className="flex items-start gap-3">
              <Zap className="mt-0.5 size-4 shrink-0 text-emerald-400" />
              <p className="text-sm leading-5 text-white/70">{proposal.beneficio}</p>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          {[
            { icon: Shield, label: '30 días', sub: 'soporte post-entrega' },
            { icon: CheckCircle, label: 'Formal', sub: 'factura electrónica' },
            { icon: Zap, label: 'Express', sub: 'entrega garantizada' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 text-center">
              <Icon className="mx-auto mb-2 size-5 text-[#4d94ff]" />
              <p className="text-sm font-black text-white">{label}</p>
              <p className="text-[10px] font-semibold text-white/35">{sub}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <a
            href={waLink(businessName)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-base font-black text-white shadow-lg transition active:scale-95"
            style={{ background: 'linear-gradient(135deg, #0047B8, #0066FF)' }}
          >
            <MessageCircle className="size-5" />
            Quiero esto — contactar ahora
          </a>
          <a
            href="https://www.nuvroenginer.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] py-4 text-sm font-bold text-white/65 transition hover:border-white/20 hover:text-white"
          >
            <ExternalLink className="size-4" />
            Ver portafolio completo
          </a>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-white/25">NUVRO ENGINEER · Palmares, Alajuela, Costa Rica</p>
          <p className="mt-1 text-xs text-white/20">Negocio formal inscrito ante Hacienda · Factura electrónica incluida</p>
        </div>

      </div>
    </div>
  )
}
