import { createFileRoute } from "@tanstack/react-router";
import capaImage from "@/assets/images/capa.png";
import devKitImage from "@/assets/images/capa-hotmart.png";
import autoraImage from "@/assets/images/autora.png";

// Configure aqui a URL do checkout do produto.
const CHECKOUT_URL = "#checkout";
// Configure aqui a URL do checkout apenas do DEV Kit.
const KIT_ONLY_URL = "#checkout";
// Configure aqui a URL do manual "Como contratar o DEV".
const MANUAL_URL = "#checkout";

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
          "Construa uma carreira sustentável na tecnologia. Cartilha + DEV Kit por R$ 47,00.",
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

const contentParts = [
  {
    part: "Parte 1",
    title: "Antes de aceitar o trabalho",
    topics: [
      "Maturidade do cliente",
      "Mercado além da sua cidade",
      "O serviço realmente compensa?",
      "Tempo, dinheiro, conhecimento e energia",
      "O que está realmente combinado",
      "Como apresentar sua proposta",
    ],
  },
  {
    part: "Parte 2",
    title: "Quando o trabalho começa a pesar",
    topics: [
      "“É só uma alteração”",
      "Urgências e prazos",
      "Retrabalho",
      "Mensagens fora de hora",
      "Mudança de prioridade",
      "Canal oficial de comunicação",
    ],
  },
  {
    part: "Parte 3",
    title: "IA, profissão e valor",
    topics: [
      "IA sem perder critério técnico",
      "Testes e segurança",
      "Arquitetura e responsabilidade",
      "O que sustenta o seu valor",
      "Precificação do seu trabalho",
      "Aprendizado contínuo sem ansiedade",
    ],
  },
  {
    part: "Parte 4",
    title: "Seu rumo",
    topics: [
      "Freelance",
      "Emprego",
      "Consultoria",
      "Produto e SaaS",
      "Portfólio e captação de clientes",
      "Mudança de direção",
    ],
  },
  {
    part: "Parte 5",
    title: "Não chegue ao limite",
    topics: [
      "Sinais de sobrecarga",
      "Limites claros",
      "Rotina sustentável",
      "Organização do dia",
      "Descanso e foco",
      "Carreira de longo prazo",
    ],
  },
];

const complaints = [
  "Ainda não sabe como precificar um projeto.",
  "Quer captar clientes e não sabe por onde começar.",
  "Recebe pedidos soltos no WhatsApp, sem escopo.",
  "Não tem um briefing para entender a demanda.",
  "Nunca montou uma proposta comercial.",
  "Trabalha sem contrato e sem registro do combinado.",
  "Aceita alterações infinitas por insegurança.",
  "Fica sem demanda em alguns meses do ano.",
  "Tem dificuldade de organizar prazos e entregas.",
  "Não sabe separar suporte de novo serviço.",
  "Quer atender fora da sua cidade e não sabe como.",
  "Quer usar IA mantendo critério técnico.",
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
  ["É tratamento para burnout?", "Não. O material não substitui acompanhamento médico ou psicológico."],
];

function Index() {
  return (
    <main className="overflow-x-hidden bg-paper text-ink">
      {/* HERO */}
      <section className="paper-grain border-b-4 border-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
          <div>
            <p className="label-cond text-[0.65rem] text-muted-foreground sm:text-xs">
              Devs iniciantes • Devs sem demanda • Freelancers
            </p>
            <p className="label-cond mt-3 border-b-2 border-ink pb-3 text-xs sm:text-sm">
              Cartilha prática para desenvolvedores e freelancers
            </p>
            <h1 className="mt-6 leading-[0.82]">
              <span className="mt-2 block font-cond text-[clamp(1.9rem,7vw,3.6rem)] font-bold uppercase leading-[1.2]">
                <span className="mark-hl">Construa uma</span>
                <br />
                <span className="mark-hl">carreira sustentável</span>
              </span>
            </h1>
            <p className="label-cond mt-6 text-base sm:text-lg">
              Não trabalhe no limite: organize clientes, escopo, prazos e decisões.
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
              src={capaImage}
              alt="Capa da cartilha DEV — Não Trabalhe no Limite"
              className="mx-auto w-full max-w-2xl border-4 border-ink shadow-[16px_16px_0_var(--ink)]"
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
          Você sabe programar. Falta estruturar o profissional.
        </h2>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Para devs iniciantes, devs sem demanda e freelancers, o desafio raramente é o
          código. Costuma ser:
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
          <span className="mark-hl">Postura profissional se aprende.</span>
          <br />
          <span className="mark-hl">E muda o resultado do seu trabalho.</span>
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
          src={devKitImage}
          alt="Materiais do DEV Kit: briefing, proposta comercial e contrato de serviço"
          loading="lazy"
          width={1280}
          height={1280}
          className="mx-auto w-full max-w-sm -rotate-2 border-4 border-ink shadow-[16px_16px_0_var(--highlight)]"
        />
      </section>

      {/* CONTEÚDO */}
      <section className="border-t-4 border-ink bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel>Conteúdo</SectionLabel>
          <h2 className="text-3xl leading-tight sm:text-5xl">O que você vai encontrar</h2>
          <p className="mt-6 max-w-2xl font-cond text-lg font-bold uppercase sm:text-2xl">
            <span className="mark-hl">30 tópicos práticos</span> organizados em 5 partes
          </p>
          <div className="mt-10 space-y-px bg-border">
            {contentParts.map((p, pi) => (
              <div
                key={p.part}
                className="grid gap-4 bg-paper p-6 sm:grid-cols-[9rem_1fr] sm:items-start"
              >
                <div>
                  <span className="label-cond text-xs text-muted-foreground">{p.part}</span>
                  <h3 className="label-cond mt-1 text-lg leading-tight sm:text-xl">
                    {p.title}
                  </h3>
                </div>
                <ol className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {p.topics.map((t, ti) => (
                    <li key={t} className="flex gap-3 border-b border-border pb-2 text-sm">
                      <span className="label-cond text-highlight">
                        {String(pi * 6 + ti + 1).padStart(2, "0")}
                      </span>
                      {t}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
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
          <img
            src={devKitImage}
            alt="DEV Kit: briefing online, proposta comercial, contrato de serviço, Google Sheets, Apps Script e Sites"
            loading="lazy"
            width={1280}
            height={1280}
            className="mt-10 w-full border-4 border-highlight bg-paper"
          />
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
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Cta className="w-full sm:w-auto">Quero meu kit agora</Cta>
            <a
              href={KIT_ONLY_URL}
              className="label-cond inline-flex w-full items-center justify-center border-2 border-highlight px-8 py-4 text-center text-sm text-highlight transition-colors hover:bg-highlight hover:text-ink sm:w-auto sm:text-base"
            >
              Quero somente o DEV Kit
            </a>
          </div>
        </div>
      </section>

      {/* POSICIONAMENTO */}
      <section className="border-y-4 border-ink bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <div className="border-4 border-ink bg-card p-8 shadow-[12px_12px_0_var(--highlight)]">
            <p className="label-cond text-xs text-muted-foreground">Posicionamento</p>
            <h2 className="mt-4 font-cond text-2xl font-bold uppercase leading-tight sm:text-4xl">
              Esta não é uma cartilha contra clientes.
            </h2>
            <p className="mt-6 text-sm text-muted-foreground sm:text-base">
              O objetivo é apoiar o desenvolvedor na postura profissional e na captação de
              clientes: entender a demanda, apresentar propostas com clareza, formalizar o
              combinado e conduzir o projeto com organização. Cliente bem atendido volta e
              indica — e isso começa com processo, não com desgaste.
            </p>
            <div className="mt-8">
              <a
                href={MANUAL_URL}
                className="label-cond inline-flex w-full items-center justify-center bg-ink px-8 py-4 text-center text-sm text-paper ring-2 ring-ink transition-transform hover:-translate-y-0.5 sm:w-auto sm:text-base"
              >
                Confira — Manual: Como contratar o DEV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AUTORA */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <SectionLabel>A autora</SectionLabel>
        <div className="grid gap-8 sm:grid-cols-[14rem_1fr] sm:items-center">
          <img
            src={autoraImage}
            alt="Foto da autora da cartilha DEV — Não Trabalhe no Limite"
            loading="lazy"
            className="mx-auto h-48 w-48 rounded-full border-4 border-ink object-cover shadow-[10px_10px_0_var(--highlight)] sm:h-56 sm:w-56"
          />
          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl">[Nome da autora]</h2>
            <p className="label-cond mt-2 text-xs text-muted-foreground sm:text-sm">
              Desenvolvedora • CTO • Fundadora de startups
            </p>
            <p className="mt-6 text-sm text-muted-foreground sm:text-base">
              Desenvolvedora apaixonada por tecnologia, atua há anos entre projetos
              próprios e atendimento a clientes. Já fundou e liderou tecnicamente
              startups, viveu de perto a rotina de escopo aberto, prazos apertados e
              decisões sob pressão — e reuniu nesta cartilha o que funciona para trabalhar
              com mais clareza e construir uma carreira sustentável.
            </p>
          </div>
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
            src={capaImage}
            alt="Cartilha DEV — Não Trabalhe no Limite com bônus DEV Kit"
            className="mx-auto w-full max-w-sm border-4 border-highlight"
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
          Trabalhe com inteligência. Construa uma carreira sustentável.
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
