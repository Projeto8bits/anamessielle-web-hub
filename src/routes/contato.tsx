import { createFileRoute } from "@tanstack/react-router";

const INSTAGRAM_URL = "https://www.instagram.com/dra.anamessielle/";
const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5511954688793&text&type=phone_number&app_absent=0";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Ana Messielle Advocacia" },
      {
        name: "description",
        content:
          "Fale com a Dra. Ana Messielle pelo WhatsApp ou Instagram e agende uma consulta.",
      },
      { property: "og:title", content: "Contato — Ana Messielle Advocacia" },
      {
        property: "og:description",
        content:
          "Fale com a Dra. Ana Messielle pelo WhatsApp ou Instagram e agende uma consulta.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contato,
});

function ContactChannel({
  label,
  value,
  href,
  description,
}: {
  label: string;
  value: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary"
    >
      <span className="text-xs uppercase tracking-[0.3em] text-primary">
        {label}
      </span>
      <span className="mt-3 font-serif text-2xl text-foreground">{value}</span>
      <span className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </span>
      <span className="mt-6 inline-flex items-center text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
        Falar agora →
      </span>
    </a>
  );
}

function Contato() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <span className="text-xs uppercase tracking-[0.4em] text-primary">
            Contato
          </span>
          <h1 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
            Vamos conversar
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Escolha o canal de sua preferência. Respondemos com atenção e sigilo
            a cada mensagem.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <ContactChannel
              label="WhatsApp"
              value="(11) 95468-8793"
              href={WHATSAPP_URL}
              description="Atendimento rápido e direto. Tire dúvidas e receba uma orientação inicial."
            />
            <ContactChannel
              label="Instagram"
              value="@dra.anamessielle"
              href={INSTAGRAM_URL}
              description="Acompanhe conteúdos e fale com a gente pelas mensagens diretas."
            />
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <h2 className="font-serif text-2xl text-foreground">
              Atendimento por consulta
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Para casos que exigem análise aprofundada, agende uma consulta. O
              atendimento é personalizado e sigiloso, conduzido com a dedicação
              que a sua causa merece.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Agendar pelo WhatsApp
            </a>
          </div>

          <div className="hairline-gold mt-16" />
          <p className="mt-6 text-center text-xs text-muted-foreground">
            O envio de mensagem não configura relação de advogado e cliente até
            a formalização do contrato de honorários.
          </p>
        </div>
      </section>
    </>
  );
}
