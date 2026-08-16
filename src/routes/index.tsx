import { createFileRoute } from "@tanstack/react-router";
import capa from "@/assets/capa.png.asset.json";

// Configure aqui a URL do checkout do produto.
const CHECKOUT_URL = "#checkout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DEV — Não Trabalhe no Limite | Cartilha + DEV Kit por R$ 47" },
      {
        name: "description",
        content:
          "Cartilha prática para desenvolvedores e freelancers: clientes, escopo, prazos, IA, carreira e limites. Com o bônus DEV Kit por R$ 47,00.",
      },
      { property: "og:title", content: "DEV — Não Trabalhe no Limite" },
      {
        property: "og:description",
        content:
          "Proteja sua mente, seu tempo e sua carreira sem abandonar a tecnologia. Cartilha + DEV Kit por R$ 47,00.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`inline-flex items-center justify-center label-cond bg-highlight px-8 py-4 text-center text-base text-ink ring-2 ring-ink transition-transform hover:-translate-y-0.5 sm:text-lg ${className}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="label-cond mb-4 flex items-center gap-3 text-xs text-muted-foreground">
      <span className="h-2 w-8 bg-highlight" />
      {children}
    </p>
  );
}

const topics = [
  ["01", "Clientes e Mercado", "Como identificar maturidade do cliente e entender quando procurar oportunidades além do mercado local."],
  ["02", "Antes de Aceitar", "Como avaliar se um serviço realmente compensa tempo, dinheiro, conhecimento e energia."],
  ["03", "Escopo e Limites", "Como diferenciar o que foi combinado de uma nova demanda."],
  ["04", "Prazos e Pressão", "Como lidar com urgências, cobranças e mudanças de prioridade."],
  ["05", "IA e Profissionalismo", "Como usar IA sem abandonar critério técnico, segurança, testes e responsabilidade."],
  ["06", "Valor do Dev", "Por que o valor profissional não está simplesmente em escrever código."],
  ["07", "Carreira", "Freelancer, emprego, consultoria, produto, SaaS e mudança de direção."],
  ["08", "Sobrecarga", "Como reconhecer sinais de que o trabalho está ocupando espaço demais."],
];

const parts = [
  ["Parte 1", "Antes de aceitar o trabalho", "Maturidade do cliente • O serviço compensa? • O que está realmente combinado"],
  ["Parte 2", "Quando o trabalho começa a pesar", "“É só uma alteração” • Urgências • Retrabalho • Mensagens fora de hora"],
  ["Parte 3", "IA, profissão e valor", "IA sem perder critério • Testes e segurança • O que sustenta seu valor"],
  ["Parte 4", "Seu rumo", "Freelance, emprego, consultoria, produto • Mudança de direção"],
  ["Parte 5", "Não chegue ao limite", "Sinais de sobrecarga • Limites claros • Rotina sustentável"],
];

const complaints = [
  "“É só uma alteração.”",
  "“Preciso para amanhã.”",
  "Cliente mudando tudo no meio do projeto.",
  "Marketing cobrando prazo.",
  "Comercial cobrando meta.",
  "Retrabalho.",
  "Escopo mal definido.",
  "Mensagens fora do horário.",
  "Cobranças constantes.",
  "Projetos que não compensam.",
  "Pressão para entregar mais rápido.",
  "Tentar acompanhar todas as novas ferramentas.",
  "Medo de a IA substituir seu trabalho.",
];

const circuit = [
  "Nova demanda",
  "Interrupção",
  "Mudança de prioridade",
  "Retrabalho",
  "Nova cobrança",
  "Decisão",
  "Outra alteração",
  "Mente sem encerrar o ciclo",
];

const kit = [
  ["📋", "Briefing"],
  ["💼", "Proposta Comercial"],
  ["📑", "Contrato de Serviço"],
  ["📊", "Google Sheets"],
  ["⚙️", "Google Apps Script"],
  ["🌐", "Google Sites"],
  ["🔗", "Links organizados"],
  ["💬", "WhatsApp"],
];

const materials = [
  ["📋", "Briefing"],
  ["💼", "Proposta comercial"],
  ["📑", "Contrato"],
  ["🎯", "Definição de escopo"],
  ["💬", "Comunicação"],
  ["⏱️", "Prazos"],
  ["🔎", "Validação"],
  ["🛠️", "Suporte"],
  ["➕", "Novos serviços"],
];

const faq = [
  ["A cartilha é sobre programação?", "Não. É sobre clientes, escopo, pressão, IA, carreira e organização profissional."],
  ["É um curso?", "Não. É uma cartilha digital acompanhada de materiais práticos."],
  ["O que é o DEV Kit?", "É um conjunto de modelos, estruturas e recursos para ajudar o desenvolvedor a organizar clientes, propostas, projetos e comunicação."],
  ["Preciso ser experiente?", "Não. Pode ser útil tanto para profissionais experientes quanto para quem está começando a atender clientes."],
  ["A IA vai substituir o DEV?", "A cartilha aborda justamente essa questão e mostra a importância do conhecimento técnico, análise, testes, segurança, arquitetura e responsabilidade profissional."],
  ["É tratamento para burnout?", "Não. O material não substitui acompanhamento médico ou psicológico."],
];

function Index() {
  return (
    <main className="overflow-x-hidden bg-paper text-ink">
      {/* HERO */}
      <section className="paper-grain border-b-4 border-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
          <div>
            <p className="label-cond border-b-2 border-ink pb-3 text-xs sm:text-sm">
              Cartilha prática para desenvolvedores e freelancers
            </p>
            <h1 className="mt-6 leading-[0.82]">
              <span className="block text-[clamp(4.5rem,17vw,11rem)] font-normal tracking-tight">
                DEV
              </span>
              <span className="mt-2 block font-cond text-[clamp(1.9rem,7vw,3.6rem)] font-bold uppercase leading-[1.05]">
                <span className="mark-hl">Não trabalhe</span>
                <br />
                <span className="mark-hl">no limite</span>
              </span>
            </h1>
            <p className="label-cond mt-6 text-base sm:text-lg">
              Proteja sua mente, seu tempo e sua carreira sem abandonar a tecnologia.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Uma cartilha prática para desenvolvedores que precisam lidar melhor com
              clientes, pressão, prazos, mudanças de escopo, IA, dinheiro, carreira e os
              limites de uma profissão que exige cada vez mais.
            </p>

            <div className="mt-8 flex flex-wrap items-end gap-6">
              <div>
                <p className="label-cond text-xs text-muted-foreground">Acesso digital</p>
                <p className="font-display text-5xl leading-none sm:text-6xl">R$ 47,00</p>
              </div>
              <Cta className="w-full sm:w-auto">Quero a cartilha</Cta>
            </div>
            <p className="label-cond mt-4 text-xs text-muted-foreground">
              Acesso digital • Compra segura • Material prático
            </p>
          </div>

          <div className="relative">
            <img
              src={capa.url}
              alt="Capa da cartilha DEV — Não Trabalhe no Limite"
              className="mx-auto w-full max-w-md border-4 border-ink shadow-[16px_16px_0_var(--ink)]"
            />
            <div className="absolute -top-4 -right-1 flex h-28 w-28 rotate-6 items-center justify-center rounded-full bg-highlight ring-2 ring-ink sm:h-36 sm:w-36">
              <p className="label-cond text-center text-[0.6rem] leading-tight sm:text-xs">
                Mais foco
                <br />
                Menos pressão
                <br />
                Melhores escolhas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICAÇÃO */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionLabel>Identificação</SectionLabel>
        <h2 className="max-w-3xl text-3xl leading-tight sm:text-5xl">
          Você não está cansado apenas de programar.
        </h2>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Muitas vezes o desgaste não vem somente do código. Ele vem de:
        </p>
        <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {complaints.map((c) => (
            <li
              key={c}
              className="flex items-start gap-3 border-b border-border pb-3 text-sm sm:text-base"
            >
              <span className="mt-2 h-1.5 w-3 shrink-0 bg-highlight" />
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-3xl font-cond text-xl font-bold uppercase leading-snug sm:text-3xl">
          <span className="mark-hl">O problema nem sempre é trabalhar muito.</span>
          <br />
          <span className="mark-hl">Às vezes é trabalhar sem limites claros.</span>
        </p>
      </section>

      {/* CIRCUITO */}
      <section className="border-y-4 border-ink bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="label-cond mb-4 text-xs text-highlight">Circuito</p>
          <h2 className="max-w-3xl text-3xl leading-tight sm:text-5xl">
            O circuito do cansaço cognitivo
          </h2>
          <p className="mt-6 max-w-2xl text-sm opacity-80 sm:text-base">
            Quando uma tarefa é interrompida antes de ser concluída, você precisa recuperar
            contexto, tomar novas decisões e reorganizar prioridades. O resultado pode ser
            uma rotina de esforço mental contínuo.
          </p>
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {circuit.map((step, i) => (
              <li
                key={step}
                className={`border p-5 ${
                  i === circuit.length - 1
                    ? "border-highlight bg-highlight text-ink"
                    : "border-paper/25"
                }`}
              >
                <span className="label-cond block text-xs opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="label-cond mt-2 block text-base leading-tight sm:text-lg">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRODUTO */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <SectionLabel>O material</SectionLabel>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            Uma cartilha para olhar para o seu trabalho antes que ele chegue ao limite.
          </h2>
          <p className="mt-6 text-sm text-muted-foreground sm:text-base">
            <strong className="text-ink">DEV — Não Trabalhe no Limite</strong> é uma
            cartilha prática para ajudar profissionais de tecnologia a analisar melhor seus
            projetos, clientes, decisões, limites, carreira e relação com o próprio
            trabalho.
          </p>
          <div className="mt-8 border-l-4 border-highlight bg-card p-5">
            <p className="label-cond text-xs">Importante</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>Não é curso de programação.</li>
              <li>Não ensina uma linguagem específica.</li>
              <li>Não é tratamento médico ou psicológico.</li>
              <li className="text-ink">
                É uma ferramenta de reflexão e organização profissional.
              </li>
            </ul>
          </div>
          <Cta className="mt-8 w-full sm:w-auto">Quero a cartilha — R$ 47</Cta>
        </div>
        <img
          src={capa.url}
          alt="Mockup da cartilha DEV — Não Trabalhe no Limite"
          className="mx-auto w-full max-w-sm -rotate-2 border-4 border-ink shadow-[16px_16px_0_var(--highlight)]"
        />
      </section>

      {/* CONTEÚDO */}
      <section className="border-t-4 border-ink bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel>Conteúdo</SectionLabel>
          <h2 className="text-3xl leading-tight sm:text-5xl">O que você vai encontrar</h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {topics.map(([n, title, desc]) => (
              <article key={n} className="bg-paper p-6">
                <span className="font-display text-4xl text-highlight">{n}</span>
                <h3 className="label-cond mt-3 text-base leading-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 30 TÓPICOS */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionLabel>Estrutura</SectionLabel>
        <h2 className="text-3xl leading-tight sm:text-5xl">
          <span className="mark-hl font-cond font-bold uppercase">30 tópicos práticos</span>{" "}
          organizados em 5 partes
        </h2>
        <div className="mt-10 space-y-px bg-border">
          {parts.map(([part, title, ex]) => (
            <div
              key={part}
              className="grid gap-2 bg-paper p-6 sm:grid-cols-[9rem_1fr] sm:items-baseline"
            >
              <span className="label-cond text-xs text-muted-foreground">{part}</span>
              <div>
                <h3 className="label-cond text-lg leading-tight sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIAL PRÁTICO */}
      <section className="border-y-4 border-ink bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel>Material prático</SectionLabel>
          <h2 className="text-3xl sm:text-5xl">Não é só leitura.</h2>
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground sm:text-base">
            A cartilha também apresenta uma estrutura prática para o profissional organizar
            melhor sua relação com clientes e projetos.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {materials.map(([icon, name]) => (
              <div
                key={name}
                className="border-2 border-ink bg-paper p-5 text-center shadow-[6px_6px_0_var(--ink)]"
              >
                <span className="text-2xl">{icon}</span>
                <p className="label-cond mt-2 text-xs leading-tight sm:text-sm">{name}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 flex flex-wrap gap-x-4 gap-y-2 font-cond text-xl font-bold uppercase sm:text-3xl">
            {["Entender.", "Propor.", "Formalizar.", "Desenvolver.", "Validar.", "Entregar."].map(
              (w) => (
                <span key={w} className="mark-hl">
                  {w}
                </span>
              ),
            )}
          </p>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <span className="label-cond inline-block bg-highlight px-3 py-1 text-xs text-ink">
            Bônus exclusivo
          </span>
          <h2 className="mt-6 text-[clamp(3rem,12vw,7rem)] leading-none text-highlight">
            DEV KIT
          </h2>
          <p className="label-cond mt-2 text-base sm:text-xl">
            As ferramentas para colocar a metodologia em prática.
          </p>
          <p className="mt-6 max-w-2xl text-sm opacity-80 sm:text-base">
            Além da cartilha, você recebe um kit de materiais pensado para o dia a dia do
            desenvolvedor. O DEV Kit é um conjunto de materiais, modelos e recursos.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {kit.map(([icon, name]) => (
              <div key={name} className="border border-highlight/60 p-5">
                <span className="text-2xl">{icon}</span>
                <p className="label-cond mt-2 text-xs leading-tight sm:text-sm">{name}</p>
              </div>
            ))}
          </div>
          <ul className="mt-10 grid gap-2 text-sm sm:grid-cols-2 sm:text-base">
            {[
              "Organize seus clientes.",
              "Apresente melhor seu trabalho.",
              "Registre o que foi combinado.",
              "Separe suporte de novas demandas.",
              "Tenha mais clareza antes de começar a desenvolver.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="text-highlight">✓</span>
                {t}
              </li>
            ))}
          </ul>
          <Cta className="mt-10 w-full sm:w-auto">Quero meu kit agora</Cta>
        </div>
      </section>

      {/* ANTES E DEPOIS */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionLabel>Antes e depois</SectionLabel>
        <div className="grid gap-px bg-border md:grid-cols-2">
          <div className="bg-card p-8">
            <h3 className="label-cond text-xl text-muted-foreground">Antes</h3>
            <ul className="mt-6 space-y-3 text-sm sm:text-base">
              {[
                "“Me manda no WhatsApp.”",
                "“Quanto você cobra?”",
                "“É só uma alteração.”",
                "“Dá para fazer amanhã?”",
                "“Quando fica pronto?”",
              ].map((t) => (
                <li key={t} className="border-b border-border pb-3 text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ink p-8 text-paper">
            <h3 className="label-cond text-xl text-highlight">Depois</h3>
            <ul className="mt-6 space-y-3 text-sm sm:text-base">
              {[
                "Briefing.",
                "Proposta.",
                "Escopo.",
                "Contrato.",
                "Canal oficial.",
                "Validação.",
                "Suporte.",
                "Novo serviço.",
              ].map((t) => (
                <li key={t} className="label-cond border-b border-paper/20 pb-2">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center font-cond text-3xl font-bold uppercase leading-tight sm:text-5xl">
          <span className="mark-hl">Mais clareza.</span>{" "}
          <span className="mark-hl">Menos desgaste.</span>
        </p>
      </section>

      {/* PARA QUEM É */}
      <section className="border-y-4 border-ink bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel>Para quem é</SectionLabel>
          <h2 className="max-w-3xl text-3xl leading-tight sm:text-5xl">
            Feito para quem vive o dia a dia da tecnologia.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Dev freelancer",
              "Programador autônomo",
              "Desenvolvedor remoto",
              "Profissional de software",
              "Quem está começando a atender clientes",
              "Quem quer trabalhar com mais profissionalismo",
            ].map((t) => (
              <div
                key={t}
                className="label-cond border-2 border-ink bg-paper p-6 text-sm leading-tight sm:text-base"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM NÃO É */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <SectionLabel>Para quem não é</SectionLabel>
          <h3 className="label-cond text-xl">Não é:</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground sm:text-base">
            {[
              "curso de programação;",
              "fórmula para ganhar dinheiro rápido;",
              "promessa de eliminar estresse;",
              "tratamento psicológico;",
              "tratamento médico;",
              "promessa de trabalhar menos automaticamente.",
            ].map((t) => (
              <li key={t} className="border-b border-border pb-2">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-highlight p-8 ring-2 ring-ink">
          <h3 className="label-cond text-xl">É para quem quer:</h3>
          <ul className="mt-4 space-y-2 font-cond text-xl font-bold uppercase leading-tight sm:text-2xl">
            {[
              "Entender.",
              "Organizar.",
              "Decidir melhor.",
              "Colocar limites.",
              "Trabalhar com mais profissionalismo.",
            ].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* OFERTA */}
      <section id="checkout" className="border-y-4 border-ink bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <img
            src={capa.url}
            alt="Cartilha DEV — Não Trabalhe no Limite com bônus DEV Kit"
            className="mx-auto w-full max-w-xs border-4 border-highlight"
          />
          <div>
            <p className="label-cond text-xs text-highlight">Oferta</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-5xl">
              Leve a cartilha + o DEV Kit
            </h2>
            <ul className="mt-8 space-y-3 text-sm sm:text-base">
              {[
                "Cartilha DEV — Não Trabalhe no Limite",
                "DEV Kit",
                "Materiais práticos",
                "Estruturas para clientes e projetos",
              ].map((t) => (
                <li key={t} className="flex gap-3 border-b border-paper/20 pb-3">
                  <span className="text-highlight">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-display text-6xl leading-none text-highlight sm:text-7xl">
              R$ 47,00
            </p>
            <Cta className="mt-6 w-full sm:w-auto">Quero meu kit agora</Cta>
            <p className="label-cond mt-4 text-xs opacity-70">
              Acesso digital • Compra segura • Material prático
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <SectionLabel>Perguntas frequentes</SectionLabel>
        <h2 className="text-3xl sm:text-5xl">FAQ</h2>
        <div className="mt-10 space-y-px bg-border">
          {faq.map(([q, a]) => (
            <div key={q} className="bg-paper p-6">
              <h3 className="label-cond text-base sm:text-lg">{q}</h3>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t-4 border-ink bg-highlight py-16 text-ink md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl leading-tight sm:text-5xl">
            Você não precisa esperar chegar ao limite.
          </h2>
          <div className="label-cond mx-auto mt-8 max-w-md space-y-1 text-sm sm:text-base">
            <p>Seu código é importante.</p>
            <p>Seu cliente é importante.</p>
            <p>Sua carreira é importante.</p>
            <p>Mas você também é.</p>
          </div>
          <p className="mt-10 font-display text-6xl leading-none sm:text-7xl">R$ 47,00</p>
          <Cta className="mt-8 w-full bg-ink text-paper ring-ink sm:w-auto">
            Quero DEV — Não Trabalhe no Limite
          </Cta>
        </div>
      </section>

      <footer className="bg-ink py-8 text-center text-paper">
        <p className="label-cond px-5 text-xs sm:text-sm">
          Trabalhe com inteligência. Proteja sua mente. Construa uma carreira sustentável.
        </p>
      </footer>

      {/* CTA STICKY MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-ink bg-paper p-3 md:hidden">
        <a
          href={CHECKOUT_URL}
          className="label-cond flex w-full items-center justify-center bg-highlight px-6 py-4 text-base text-ink ring-2 ring-ink"
        >
          Quero por R$ 47
        </a>
      </div>
      <div className="h-20 md:hidden" />
    </main>
  );
}
