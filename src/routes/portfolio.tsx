import { createFileRoute, Link } from "@tanstack/react-router";

const AREAS = [
  {
    title: "Direito de Família",
    text: "Divórcio, guarda, pensão e regulamentação de visitas, com sensibilidade e firmeza.",
  },
  {
    title: "Direito Civil",
    text: "Contratos, responsabilidade civil, indenizações e questões patrimoniais.",
  },
  {
    title: "Direito do Consumidor",
    text: "Defesa do consumidor frente a abusos, cobranças indevidas e vícios de produto.",
  },
  {
    title: "Direito Trabalhista",
    text: "Reconhecimento de vínculo, verbas rescisórias e direitos do trabalhador.",
  },
  {
    title: "Direito Sucessório",
    text: "Inventários, testamentos e planejamento sucessório com segurança jurídica.",
  },
  {
    title: "Consultoria Jurídica",
    text: "Análise preventiva de contratos e orientação para evitar litígios futuros.",
  },
];

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5511954688793&text&type=phone_number&app_absent=0";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — Ana Messielle Advocacia" },
      {
        name: "description",
        content:
          "Áreas de atuação da Dra. Ana Messielle: Direito de Família, Civil, Consumidor, Trabalhista e Sucessório.",
      },
      { property: "og:title", content: "Portfólio — Ana Messielle Advocacia" },
      {
        property: "og:description",
        content:
          "Áreas de atuação da Dra. Ana Messielle: Família, Civil, Consumidor, Trabalhista e Sucessório.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <span className="text-xs uppercase tracking-[0.4em] text-primary">
            Portfólio
          </span>
          <h1 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
            Áreas de Atuação
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Atuação em diferentes áreas do Direito, sempre com dedicação e
            estratégia personalizadas para cada caso.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area) => (
              <article
                key={area.title}
                className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary"
              >
                <div className="mb-5 h-8 w-8 rounded-full border border-primary transition-transform group-hover:scale-110" />
                <h2 className="font-serif text-xl text-foreground">
                  {area.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {area.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <div className="hairline-gold mb-10" />
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Não encontrou a área do seu caso?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Entre em contato. Mesmo fora das áreas listadas, é possível orientar
            ou encaminhar o seu caso.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Entrar em contato
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border px-7 py-3 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
