"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
    Calendar,
    Clock,
    MapPin,
    Users,
    Heart,
    Sparkles,
    Phone,
    Send,
} from "lucide-react"

const activities = [
    "Exercícios sistêmicos",
    "Práticas inspiradas na constelação sistêmica",
    "Escuta restaurativa e linguagem cuidadora",
    "Escrita Reparadora",
    "Movimentos corporais e dança circular, de forma leve e respeitosa",
]

const forWhom = [
    "Homens e mulheres que cuidam de pessoas com comprometimentos motores ou mentais",
    "Pessoas que se sentem sozinhas ou cansadas",
    "Quem simplesmente queira partilhar momentos de leveza e alegria",
]

const forWhat = [
    "Ter um momento de liberdade e leveza",
    "Descansar e se sentir",
    "Compartilhar com quem entende",
    "Lembrar quem é…",
]

const how = [
    "Escuta e Escrita coletiva",
    "Exercícios sistêmicos",
    "Música e movimentos",
    "Tempo e Ressignificação",
]

const WHATSAPP_NUMBER = "5531999707866"

function buildWhatsAppMsg(name: string, phone: string) {
    return encodeURIComponent(
        `Olá! Meu nome é ${name} e telefone é ${phone}. Tenho interesse em participar do 1º Encontro do Círculo Sistêmico: Cuidando de Quem Cuida (07/03/2026). Poderia me dar mais informações?`
    )
}

export default function EventosPage() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const msg = buildWhatsAppMsg(name.trim(), phone.trim())
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank")
        setSubmitted(true)
    }

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-secondary">
                    <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center lg:py-28">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                            <Sparkles className="h-4 w-4" />
                            1º Encontro
                        </span>
                        <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance max-w-3xl">
                            Círculo Sistêmico:<br />
                            <span className="text-primary">Cuidando de Quem Cuida</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
                            Se você cuida de alguém — de um filho, de um idoso, de um familiar adoecido,
                            ou sustenta pessoas e processos de cuidado todos os dias —
                            <strong className="text-foreground"> este círculo é para você.</strong>
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#inscricao"
                                className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                Quero Me Inscrever
                            </a>
                            <a
                                href="#detalhes"
                                className="rounded-lg border-2 border-primary px-8 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-primary/10"
                            >
                                Ver Detalhes
                            </a>
                        </div>
                    </div>

                    {/* Decorative blobs */}
                    <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-10 -left-20 h-64 w-64 rounded-full bg-accent/8 blur-3xl" />
                </section>

                {/* Invitation quote */}
                <section className="bg-background py-16">
                    <div className="mx-auto max-w-3xl px-6 text-center">
                        <p className="font-serif text-xl leading-relaxed text-muted-foreground italic text-pretty">
                            &ldquo;Um espaço seguro para parar, respirar e ser cuidado.
                            Aqui, você não precisa ser forte, nem dar conta.
                            Pode apenas <strong className="text-foreground not-italic">chegar.</strong>&rdquo;
                        </p>
                    </div>
                </section>

                {/* Event Info Cards */}
                <section id="detalhes" className="bg-secondary py-16 lg:py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-primary">
                            Informações do Evento
                        </p>
                        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">
                            Quando, onde e como?
                        </h2>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    icon: Calendar,
                                    label: "Data",
                                    value: "07 de março de 2026",
                                    sub: "Sábado",
                                },
                                {
                                    icon: Clock,
                                    label: "Horário",
                                    value: "16h30 às 19h",
                                    sub: "Duração: 2h30",
                                },
                                {
                                    icon: MapPin,
                                    label: "Local",
                                    value: "Presencial",
                                    sub: "Belo Horizonte / MG",
                                },
                                {
                                    icon: Users,
                                    label: "Vagas",
                                    value: "Apenas 20 vagas",
                                    sub: "Troca: R$ 85,00",
                                },
                            ].map(({ icon: Icon, label, value, sub }) => (
                                <div
                                    key={label}
                                    className="flex flex-col items-center rounded-2xl bg-card p-6 text-center shadow-sm border border-border"
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        {label}
                                    </p>
                                    <p className="mt-1 font-serif text-lg font-bold text-foreground">{value}</p>
                                    <p className="mt-0.5 text-sm text-muted-foreground">{sub}</p>
                                </div>
                            ))}
                        </div>

                        {/* Sorteio note */}
                        <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                <span className="font-semibold text-accent">💫 Bônus especial:</span>{" "}
                                Durante o encontro, será sorteada uma constelação sistêmica,
                                a serviço do campo coletivo, a ser realizada em outro dia.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Activities */}
                <section className="bg-background py-16 lg:py-20">
                    <div className="mx-auto max-w-5xl px-6">
                        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-primary">
                            O que vamos vivenciar
                        </p>
                        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">
                            Em formato de círculo
                        </h2>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {activities.map((act) => (
                                <li
                                    key={act}
                                    className="flex items-start gap-3 rounded-xl bg-card p-5 shadow-sm border border-border"
                                >
                                    <span className="mt-0.5 text-lg">✨</span>
                                    <span className="text-sm leading-relaxed text-foreground">{act}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* For whom / For what / How */}
                <section className="bg-secondary py-16 lg:py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-primary">
                            Este espaço é feito para você
                        </p>
                        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">
                            Saiba mais sobre o encontro
                        </h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {/* Para quem */}
                            <div className="rounded-2xl bg-card p-7 shadow-sm border border-border">
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                                    <Heart className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Para quem?</h3>
                                <ul className="space-y-3">
                                    {forWhom.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Para que */}
                            <div className="rounded-2xl bg-card p-7 shadow-sm border border-border">
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                                    <Sparkles className="h-5 w-5 text-accent" />
                                </div>
                                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Para que?</h3>
                                <ul className="space-y-3">
                                    {forWhat.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Como */}
                            <div className="rounded-2xl bg-card p-7 shadow-sm border border-border">
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                                    <Users className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Como?</h3>
                                <p className="mb-3 text-sm text-muted-foreground">Unindo:</p>
                                <ul className="space-y-3">
                                    {how.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Facilitadora */}
                <section className="bg-background py-16 lg:py-20">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="flex flex-col items-center gap-10 rounded-2xl bg-card p-8 shadow-sm border border-border md:flex-row md:p-12">
                            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                <Image
                                    src="/images/logo.jpeg"
                                    alt="Cris Santhana"
                                    width={112}
                                    height={112}
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-primary">
                                    Com quem?
                                </p>
                                <h3 className="font-serif text-2xl font-bold text-foreground">Cris Santhana</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    Fonoaudióloga · Terapeuta de processos coletivos · Reikiana ·
                                    Consteladora sistêmica · Facilitadora de Círculos ·
                                    Focalizadora de Dança Circular e Escrita Reparadora.
                                </p>
                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                                >
                                    <Phone className="h-4 w-4" />
                                    31 99970.7866
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Registration Form */}
                <section id="inscricao" className="bg-secondary py-16 lg:py-24">
                    <div className="mx-auto max-w-xl px-6">
                        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-primary">
                            Vagas Limitadas
                        </p>
                        <h2 className="mb-2 text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">
                            Garanta sua vaga
                        </h2>
                        <p className="mb-10 text-center text-base text-muted-foreground">
                            Preencha seus dados e você será direcionado(a) para o WhatsApp para confirmar a inscrição. 🌱
                        </p>

                        {submitted ? (
                            <div className="rounded-2xl bg-card p-10 text-center shadow-sm border border-border">
                                <div className="mb-4 flex justify-center">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                        <Heart className="h-7 w-7 text-primary" />
                                    </div>
                                </div>
                                <h3 className="font-serif text-xl font-bold text-foreground">
                                    Que bom te ver por aqui! 🌱
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    Uma janela do WhatsApp foi aberta para você finalizar a inscrição com a Cris.
                                    Se não abriu, acesse diretamente:{" "}
                                    <a
                                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium text-primary hover:underline"
                                    >
                                        wa.me/{WHATSAPP_NUMBER}
                                    </a>
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="rounded-2xl bg-card p-8 shadow-sm border border-border"
                            >
                                <div className="mb-5">
                                    <label
                                        htmlFor="evt-name"
                                        className="mb-2 block text-sm font-medium text-foreground"
                                    >
                                        Nome completo
                                    </label>
                                    <input
                                        id="evt-name"
                                        type="text"
                                        required
                                        placeholder="Seu nome"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                                    />
                                </div>
                                <div className="mb-7">
                                    <label
                                        htmlFor="evt-phone"
                                        className="mb-2 block text-sm font-medium text-foreground"
                                    >
                                        Telefone / WhatsApp
                                    </label>
                                    <input
                                        id="evt-phone"
                                        type="tel"
                                        required
                                        placeholder="(31) 99999-9999"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                                >
                                    <Send className="h-4 w-4" />
                                    Quero Me Inscrever via WhatsApp
                                </button>
                                <p className="mt-4 text-center text-xs text-muted-foreground">
                                    Apenas 20 vagas disponíveis · Troca: R$ 85,00
                                </p>
                            </form>
                        )}
                    </div>
                </section>

                {/* Share CTA */}
                <section className="bg-background py-14">
                    <div className="mx-auto max-w-2xl px-6 text-center">
                        <p className="font-serif text-lg leading-relaxed text-muted-foreground italic">
                            &ldquo;Envie para aquele amigo que você sabe que precisa de cuidado também!&rdquo; 🌱
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
                            {["#cuidandodequemcuida", "#cuidadores", "#alzheimer", "#Autismo", "#idoso"].map((tag) => (
                                <span key={tag} className="rounded-full bg-secondary px-3 py-1.5 font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
