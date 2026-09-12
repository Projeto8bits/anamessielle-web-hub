import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Instagram,
  Check,
  Star,
  Quote,
  Clock,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5511954688793&text&type=phone_number&app_absent=0";
const INSTAGRAM_URL = "https://www.instagram.com/dra.anamessielle/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Ana Messielle — Advogada" },
      {
        name: "description",
        content:
          "Dra. Ana Messielle — Advogada. Atendimento dedicado e confidencial. Fale comigo pelo WhatsApp ou Instagram.",
      },
      { property: "og:title", content: "Dra. Ana Messielle — Advogada" },
      {
        property: "og:description",
        content:
          "Atendimento ético, dedicado e personalizado para proteger seus direitos com segurança e confiança.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
      {children}
    </p>
  );
}

function LogoCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-3 shadow-[0_0_70px_-10px_oklch(0.82_0.13_84/35%)] ${className}`}
    >
      <img
        src={logoAsset.url}
        alt="Logotipo Dra. Ana Messielle — Advogada"
        className="w-full rounded-xl"
      />
    </div>
  );
}

const TESTIMONIALS = [
  {
    text: "“Excelente profissional! Atendimento atencioso e muito competente. Me senti segura e bem orientada em todos os momentos do processo.”",
    name: "Mariana S.",
  },
  {
    text: "“Profissional dedicada e muito atenciosa. Explicou todo o procedimento com clareza e resolveu meu caso com agilidade e eficiência.”",
    name: "Carlos A.",
  },
  {
    text: "“Atendimento impecável do início ao fim. Sempre disponível para esclarecer dúvidas. Recomendo de olhos fechados!”",
    name: "Juliana R.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section
        id="inicio"
        className="relative flex min-h-[88vh] items-center overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/4 size-[38rem] rounded-full bg-primary/10 blur-[140px]"
        />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-border bg-primary/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-primary">
              Advocacia com excelência
            </span>
            <h1 className="mt-8 font-serif text-6xl leading-[0.95] text-gold-gradient md:text-7xl">
              Ana
              <br />
              Messielle
            </h1>
            <p className="mt-6 text-sm uppercase tracking-[0.45em] text-muted-foreground">
              Advogada
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Atendimento ético, dedicado e personalizado para proteger seus
              direitos com segurança e confiança.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-4" />
                Agendar consulta
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="size-4" />
                Instagram
              </a>
            </div>
          </div>
          <LogoCard />
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="scroll-mt-20 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <div>
            <LogoCard />
            <div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-card px-6 py-7 text-center">
              {[
                { v: "+10", l: "Anos de experiência" },
                { v: "+500", l: "Casos atendidos" },
                { v: "100%", l: "Dedicação ao cliente" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-xl text-gold-gradient">{s.v}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Sobre</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Compromisso com você e com o Direito
            </h2>
            <div className="mt-6 h-px w-16 bg-primary" />
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Sou a <strong className="text-foreground">Dra. Ana Messielle</strong>,
              advogada dedicada a oferecer um atendimento próximo, ético e
              transparente. Acredito que cada caso é único e merece atenção
              individual, estratégia cuidadosa e acompanhamento constante.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Minha atuação é guiada pela escuta atenta das necessidades de cada
              cliente e pelo compromisso de encontrar a melhor solução jurídica
              para cada situação, sempre com total sigilo e responsabilidade.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Escuta atenta e atendimento humanizado",
                "Estratégia jurídica sólida para cada caso",
                "Comunicação transparente em todas as etapas",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-primary/50">
                    <Check className="size-3 text-primary" />
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        <div className="hairline-gold" />
      </div>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <SectionLabel>Portfólio</SectionLabel>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Avaliações de quem confiou no meu trabalho
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-border" />
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card px-6 py-8 shadow-[0_0_60px_-20px_oklch(0.82_0.13_84/35%)] sm:flex-row">
            <p className="font-serif text-4xl text-gold-gradient">5,0</p>
            <div>
              <Stars />
              <p className="mt-1 text-sm text-muted-foreground">
                Nota média baseada em avaliações do Google
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <Quote className="size-6 text-primary/70" />
                <Stars className="mt-5" />
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  {t.text}
                </p>
                <div className="mt-7 border-t border-border pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-primary">{t.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="flex size-5 items-center justify-center rounded-full bg-secondary text-[10px] text-foreground">
                        G
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        Avaliação no Google
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <SectionLabel>Contato</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              Vamos conversar sobre o seu caso?
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-border" />
            <p className="mt-6 text-muted-foreground">
              Estou à disposição para atender você com sigilo, atenção e
              agilidade.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp",
                desc: "Fale diretamente comigo. Respondo com agilidade no horário comercial.",
                cta: "Chamar no WhatsApp",
                href: WHATSAPP_URL,
              },
              {
                icon: Instagram,
                title: "Instagram",
                desc: "Acompanhe conteúdos e novidades no meu perfil profissional.",
                cta: "Seguir no Instagram",
                href: INSTAGRAM_URL,
              },
            ].map((c) => (
              <div
                key={c.title}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
                  <c.icon className="size-5 text-primary" />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {c.cta}
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            ))}

            <div className="rounded-2xl border border-border bg-card p-8 shadow-[0_0_60px_-20px_oklch(0.82_0.13_84/30%)]">
              <h3 className="font-serif text-2xl text-foreground">
                Informações úteis
              </h3>
              <ul className="mt-7 space-y-6">
                {[
                  {
                    icon: Clock,
                    label: "Horário de atendimento",
                    value: "Segunda a sexta, das 9h às 18h",
                  },
                  {
                    icon: MapPin,
                    label: "Localização",
                    value: "Atendimento presencial e online",
                  },
                  {
                    icon: Phone,
                    label: "Telefone",
                    value: "(11) 95468-8793",
                  },
                ].map((i) => (
                  <li key={i.label} className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30">
                      <i.icon className="size-4 text-primary" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {i.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {i.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
