import Image from "next/image"
import { Heart, Users, Building2, Brain } from "lucide-react"

const pillars = [
  {
    icon: Heart,
    title: "Comunicação Humana",
    description: "Aprimoramento da comunicação para todas as pessoas, incluindo autistas.",
  },
  {
    icon: Users,
    title: "Grupos Sistêmicos",
    description: "Atendimentos pontuais e processos terapêuticos em grupo.",
  },
  {
    icon: Building2,
    title: "Comunicação Corporativa",
    description: "Fortalecimento da comunicação entre equipes e setores nas empresas.",
  },
  {
    icon: Brain,
    title: "Saúde Mental (NR1)",
    description: "Implementação de estratégias de saúde mental conforme a NR1.",
  },
]

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Image */}
          <div className="w-full lg:w-5/12">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/about-illustration.jpg"
                alt="Ilustração sobre comunicação e conexão humana"
                width={600}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-7/12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Quem Somos
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Dedicados ao aprimoramento da comunicação humana
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              O Instituto Palavra Bem Dita atua com grupos sistêmicos para
              atendimentos pontuais e processos terapêuticos, além de apoiar
              empresas no fortalecimento da comunicação entre equipes e setores
              e na implementação de estratégias de saúde mental conforme a NR1.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex gap-4 rounded-xl bg-card p-5 shadow-sm border border-border"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <pillar.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
