"use client"

import { useActionState, useEffect } from "react"
import { Mail, MapPin, Phone, Loader2 } from "lucide-react"
import { sendEmail } from "@/app/actions/contact"
import { toast } from "sonner"

const initialState = {
  success: false,
  message: "",
  errors: {} as Record<string, string[]>,
}

export function Contact() {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState)

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message)
      } else if (!state.errors) {
        toast.error(state.message)
      }
    }
  }, [state])

  return (
    <section id="contato" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Info */}
          <div className="w-full lg:w-5/12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Contato
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Vamos conversar?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Estamos prontos para ouvir seus projetos e dar voz aos seus
              sonhos. Entre em contato e descubra como podemos ajudar.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone / WhatsApp</p>
                  <p className="font-semibold text-foreground">(31) 99970-7866</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-semibold text-foreground">palavrabemditainstituto@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="font-semibold text-foreground">Belo Horizonte - MG </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-7/12">
            <form
              action={formAction}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  {state.errors?.name && (
                    <p className="text-xs text-destructive">{state.errors.name[0]}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  {state.errors?.email && (
                    <p className="text-xs text-destructive">{state.errors.email[0]}</p>
                  )}
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione um assunto
                  </option>
                  <option value="fluir">Método FLUIR</option>
                  <option value="teiar">Método TEIAR</option>
                  <option value="corporativo">Comunicação Corporativa</option>
                  <option value="mentoria">Mentoria Profissional</option>
                  <option value="outro">Outro</option>
                </select>
                {state.errors?.subject && (
                  <p className="text-xs text-destructive">{state.errors.subject[0]}</p>
                )}
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Conte-nos como podemos ajudar..."
                  className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                {state.errors?.message && (
                  <p className="text-xs text-destructive">{state.errors.message[0]}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensagem"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
