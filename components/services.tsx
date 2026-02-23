import { Baby, Building2, GraduationCap, HeartHandshake, Megaphone, Shield } from "lucide-react"

const services = [
  {
    icon: Baby,
    title: "Estimulação de Linguagem",
    description:
      "Atendimento para crianças com atraso de fala e dificuldades de interação, com abordagem lúdica e familiar.",
  },
  {
    icon: HeartHandshake,
    title: "Grupos Sistêmicos",
    description:
      "Atendimentos pontuais e processos terapêuticos em grupo para fortalecer vínculos e comunicação.",
  },
  {
    icon: GraduationCap,
    title: "Mentoria Profissional",
    description:
      "Orientação especializada para profissionais que atuam com atraso de fala e dificuldades de interação.",
  },
  {
    icon: Building2,
    title: "Comunicação Corporativa",
    description:
      "Fortalecimento da comunicação entre equipes e setores para melhorar o clima organizacional.",
  },
  {
    icon: Shield,
    title: "Saúde Mental — NR1",
    description:
      "Implementação de estratégias de cuidado psicossocial e prevenção de riscos conforme a NR1.",
  },
  {
    icon: Megaphone,
    title: "Palestras e Workshops",
    description:
      "Eventos formativos sobre comunicação, linguagem infantil e saúde mental no trabalho.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Serviços
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Como podemos ajudar você
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            Oferecemos soluções para famílias, profissionais e empresas que
            buscam aprimorar a comunicação e o bem-estar.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
