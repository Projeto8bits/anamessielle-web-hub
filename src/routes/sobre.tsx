import { createFileRoute, Link } from "@tanstack/react-router";
import fotoAsset from "@/assets/foto-ana.jpeg.asset.json";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5511954688793&text&type=phone_number&app_absent=0";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Ana Messielle Advocacia" },
      {
        name: "description",
        content:
          "Conheça a Dra. Ana Messielle, advogada dedicada a um atendimento jurídico humanizado e tecnicamente fundamentado.",
      },
      { property: "og:title", content: "Sobre — Ana Messielle Advocacia" },
      {
        property: "og:description",
        content:
          "Conheça a Dra. Ana Messielle e sua forma de atuar: dedicada, técnica e humana.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <span className="text-xs uppercase tracking-[0.4em] text-primary">
            Sobre
          </span>
          <h1 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
            Dra. Ana Messielle
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Advogada
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={fotoAsset.url}
                alt="Dra. Ana Messielle, advogada"
                className="max-h-[560px] w-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="hairline-gold mb-8 w-24" />
            <p className="text-lg leading-relaxed text-foreground">
              Dra. Ana Messielle é advogada, comprometida com uma atuação
              jurídica que une técnica e humanidade.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Acredita que cada caso é único e merece atenção individual — desde
              a primeira conversa até a conclusão da causa. Seu trabalho se
              baseia na escuta atenta, na análise cuidadosa de cada detalhe e na
              construção de uma estratégia clara e fundamentada.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Atua com transparência e ética, mantendo os clientes informados em
              todas as etapas, para que cada decisão seja tomada com segurança e
              consciência.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <p className="font-serif text-3xl text-gold-gradient">
                  Atendimento
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Personalizado e próximo a cada cliente.
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold-gradient">Ética</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sigilo, transparência e responsabilidade.
                </p>
              </div>
            </div>

            <Link
              to="/contato"
              className="mt-10 inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Falar com a advogada
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Pronta para te ouvir
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Conte o seu caso e receba uma orientação inicial. O primeiro passo
            para a defesa dos seus direitos começa com uma conversa.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-md border border-primary px-7 py-3 text-sm font-medium uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Conversar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
