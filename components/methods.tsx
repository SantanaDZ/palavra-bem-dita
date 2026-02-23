import Image from "next/image"
import { Sparkles, Music, UsersRound, MessageCircleHeart, Clock, Ear, Handshake, RefreshCcw, ShieldCheck } from "lucide-react"

const fluirFeatures = [
  { icon: Sparkles, text: "Estimulação da linguagem infantil (autistas ou não)" },
  { icon: UsersRound, text: "Abordagem em grupo com pais e filhos" },
  { icon: Music, text: "Brincadeiras, estimulações sensoriais e músicas" },
  { icon: MessageCircleHeart, text: "Formato em círculo e mentoria profissional" },
]

const teiarSteps = [
  { icon: Clock, letter: "T", word: "Tempo", description: "Tempo dedicado ao cuidado coletivo" },
  { icon: Ear, letter: "E", word: "Escuta", description: "Escuta ativa e acolhedora" },
  { icon: Handshake, letter: "I", word: "Interação", description: "Interação genuína entre equipes" },
  { icon: ShieldCheck, letter: "A", word: "Alinhamento", description: "Alinhamento de expectativas e metas" },
  { icon: RefreshCcw, letter: "R", word: "Ressignificação", description: "Ressignificação das relações de trabalho" },
]

export function Methods() {
  return (
    <section id="metodos" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Nossos Métodos
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Abordagens exclusivas para transformar a comunicação
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            Dois métodos desenvolvidos para atender diferentes necessidades:
            o cuidado terapêutico individual e familiar, e o fortalecimento das relações no ambiente corporativo.
          </p>
        </div>

        {/* FLUIR Method */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-card shadow-sm border border-border">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-5/12">
              <Image
                src="/images/fluir-method.jpg"
                alt="Método FLUIR - Grupo terapêutico com pais e crianças"
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex w-full flex-col justify-center p-8 lg:w-7/12 lg:p-12">
              <div className="mb-4 inline-flex w-fit items-center rounded-full bg-primary/10 px-4 py-1.5">
                <span className="text-sm font-semibold text-primary">Terapêutico & Clínico</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                {'Método FLUIR'}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                Foco em linguagem e interação, com estimulação da linguagem
                infantil para crianças autistas ou não. Uma abordagem acolhedora
                que envolve toda a família no processo terapêutico.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {fluirFeatures.map((feature) => (
                  <div key={feature.text} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TEIAR Method */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-card shadow-sm border border-border">
          <div className="flex flex-col lg:flex-row-reverse">
            <div className="w-full lg:w-5/12">
              <Image
                src="/images/teiar-method.jpg"
                alt="Método TEIAR - Equipe corporativa em diálogo"
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex w-full flex-col justify-center p-8 lg:w-7/12 lg:p-12">
              <div className="mb-4 inline-flex w-fit items-center rounded-full bg-accent/10 px-4 py-1.5">
                <span className="text-sm font-semibold text-accent">Corporativo & Educacional</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                {'Método TEIAR'}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                Abordagem de cuidado psicossocial que promove saúde mental
                coletiva no trabalho, fortalecendo equipes da saúde e da
                educação e prevenindo riscos psicossociais conforme a NR1.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {teiarSteps.map((step) => (
                  <div key={step.letter} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <span className="text-lg font-bold text-accent">{step.letter}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">{step.word}</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        {'— '}{step.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
