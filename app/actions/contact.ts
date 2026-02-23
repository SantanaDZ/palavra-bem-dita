"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
    name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("E-mail inválido"),
    subject: z.string().min(1, "Selecione um assunto"),
    message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
})

export async function sendEmail(prevState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Por favor, corrija os erros no formulário.",
        }
    }

    const { name, email, subject, message } = validatedFields.data

    try {
        const { data, error } = await resend.emails.send({
            from: "Instituto Palavra Bem Dita <onboarding@resend.dev>",
            to: ["contatopalavrabemdita1@gmail.com"], // E-mail destinatário final
            subject: `Novo Contato: ${subject}`,
            replyTo: email,
            html: `
        <h1>Novo contato do site</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
        })

        if (error) {
            console.error("Resend Error:", error)
            return {
                success: false,
                message: `Erro do Resend: ${error.name} - ${error.message}`,
            }
        }

        return {
            success: true,
            message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        }
    } catch (err) {
        console.error("Action Error:", err)
        return {
            success: false,
            message: "Erro inesperado. Tente novamente.",
        }
    }
}
