import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center lg:py-32">
        <Image
          src="/images/logo.jpeg"
          alt="Logo Instituto Palavra Bem Dita"
          width={160}
          height={160}
          className="mb-8 rounded-full shadow-lg"
          priority
        />
        <p className="mb-3 text-xl font-semibold uppercase tracking-widest text-primary">
          Instituto
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Palavra Bem Dita
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Ouvimos seus projetos, damos voz aos seus sonhos. Dedicados ao aprimoramento
          da comunicação humana, incluindo a comunicação de pessoas autistas.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#metodos"
            className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Conheça Nossos Métodos
          </a>
          <a
            href="#contato"
            className="rounded-lg border-2 border-primary px-8 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            Entre em Contato
          </a>
        </div>
      </div>

      {/* Decorative banner */}
      <div className="relative mx-auto max-w-5xl px-6 pb-16">
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/banner.jpeg"
            alt="Banner Instituto Palavra Bem Dita - Ouvimos seus projetos, damos voz aos seus sonhos"
            width={1200}
            height={400}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
