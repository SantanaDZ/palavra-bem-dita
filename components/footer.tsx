import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="Logo Instituto Palavra Bem Dita"
              width={44}
              height={44}
              className="rounded-full"
            />
            <span className="font-serif text-lg font-bold text-foreground">
              Instituto Palavra Bem Dita
            </span>
          </a>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Ouvimos seus projetos, damos voz aos seus sonhos. Dedicados ao
            aprimoramento da comunicação humana.
          </p>
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#metodos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Métodos
            </a>
            <a href="#servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
          <div className="h-px w-full max-w-xs bg-border" />
          <p className="text-xs text-muted-foreground">
            {'© 2026 Instituto Palavra Bem Dita. Todos os direitos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
