import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";
import fotoAsset from "@/assets/foto-ana.jpeg.asset.json";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5511954688793&text&type=phone_number&app_absent=0";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ana Messielle — Advocacia" },
      {
        name: "description",
        content:
          "Advocacia dedicada e personalizada. Dra. Ana Messielle oferece atendimento jurídico humanizado e técnico.",
      },
      { property: "og:title", content: "Ana Messielle — Advocacia" },
      {
        property: "og:description",
        content:
          "Advocacia dedicada e personalizada. Atendimento jurídico humanizado e técnico.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <img
              src={logoAsset.url}
              alt="Logotipo Ana Messielle Advocacia"
              className="w-40 md:w-52"
            />
            <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-primary">
              Advocacia
            </span>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Defesa de seus direitos com{" "}
              <span className="text-gold-gradient">dedicação</span> e{" "}
              <span className="text-gold-gradient">técnica</span>.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Atuação jurídica personalizada, com escuta atenta e respaldo
              técnico para conduzir a sua causa com segurança.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Agende uma consulta
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border px-7 py-3 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 -z-10 mx-auto h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img
                src={fotoAsset.url}
                alt="Dra. Ana Messielle, advogada"
                className="h-full max-h-[560px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3 md:py-20">
          {[
            {
              title: "Atendimento humanizado",
              text: "Escuta atenta e próxima, explicando cada etapa do processo com clareza.",
            },
            {
              title: "Base técnica sólida",
              text: "Análise jurídica aprofundada para sustentar a melhor estratégia para a sua causa.",
            },
            {
              title: "Compromisso e ética",
              text: "Sigilo, transparência e dedicação em cada caso conduzido.",
            },
          ].map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center">
              <div className="mb-4 h-10 w-10 rounded-full border border-primary" />
              <h3 className="font-serif text-xl text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <div className="hairline-gold mb-10" />
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Vamos conversar sobre o seu caso?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Tire suas dúvidas e receba uma orientação inicial pelo WhatsApp ou
            agende uma consulta.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Entrar em contato
          </Link>
        </div>
      </section>
    </>
  );
}
