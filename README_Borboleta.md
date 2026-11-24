# 🦋 Projeto 2 — Projeto Borboleta (Next.js & React)

> O **Projeto Borboleta** representa a evolução do **Projeto Lagarta**, migrando a aplicação de uma estrutura estática em HTML/CSS tradicional para uma arquitetura moderna baseada em componentização, reutilização de código, rotas dinâmicas e consumo de APIs internas com **React** e o framework **Next.js**.

| Aspecto | Detalhamento |
| :--- | :--- |
| **Projeto / Domínio** | Projeto Borboleta (Projeto 2) — Site Institucional e Portfólio Jurídico Extensionista |
| **Stack Tecnológica** | Next.js (App Router), React (`useState`, `useEffect`, `useRef`), CSS Modules, Google Fonts, Node.js (`fs` / `path`) |
| **Rotas Front-End** | `/` (Home), `/sobre` (Sobre a Advogada), `/contato` (Atendimento e Formulário), `/casos_resolvidos/[slug]` (Dinâmica) |
| **Endpoints Back-End** | `GET /api/casos`, `GET /api/casos/[slug]`, `POST /api/contato` (persistência simulada em `src/data/*.json`) |

---

## ⚖️ Portfólio Jurídico
Site institucional e portfólio profissional desenvolvido para uma advogada em início de carreira (**Dra. Luciana**), com o objetivo de divulgar seus serviços, construir presença digital sólida e oferecer conteúdos informativos acessíveis sobre direitos.

## 🚀 Objetivos
- **Divulgação Profissional**: Apresentar a trajetória, os valores éticos, métricas de atendimento e as áreas de atuação da advogada.
- **Atendimento Fácil**: Facilitar o contato direto de clientes por meio de canais de comunicação claros e um formulário interativo de agendamento de consultas.

## 🏛️ Caráter Extensionista
O projeto utiliza a tecnologia como instrumento de apoio ao início da carreira profissional da advogada e, ao mesmo tempo, como meio de aproximar os serviços jurídicos da comunidade. A proposta parte da compreensão de que o acesso à Justiça também envolve o acesso à informação e ao conhecimento sobre direitos, buscando reduzir as barreiras impostas pela complexidade da linguagem jurídica.

Por meio do site, conceitos e estudos de casos jurídicos são apresentados de forma clara e acessível, criando um canal de comunicação mais próximo entre a profissional e a sociedade. Dessa forma, a plataforma não se limita à divulgação dos serviços, mas contribui para a democratização do conhecimento jurídico e para o fortalecimento da autonomia dos cidadãos na compreensão de seus direitos e na busca por orientação adequada.

Nesse sentido, o caráter extensionista do projeto está na integração entre tecnologia, conhecimento jurídico e demandas da comunidade, utilizando os recursos digitais como ferramentas de comunicação, inclusão e transformação social.

---

## 💡 Processo de Ideação
A concepção desta nova versão partiu da necessidade de transformar um site estático em uma aplicação web reativa, dinâmica e escalável.

- **Público-Alvo**: Clientes em potencial que buscam segurança jurídica (pessoas físicas e empresas), além de cidadãos interessados em tirar dúvidas rápidas sobre direitos e deveres.
- **Experiência do Usuário (UX/UI)**:
  - Navegação fluida, intuitiva e totalmente responsiva (adaptada para dispositivos móveis, tablets e desktops).
  - Identidade visual sóbria, elegante e de alta confiabilidade, baseada em tons de bordô (`#6F1D1B`), bege/creme (`#FFF2D2`), marrom escuro (`#432818`) e dourado (`#BB9457`), combinada com as tipografias **Source Serif 4** (títulos) e **Poppins** (textos corridos).
- **Estratégia Tecnológica**: Planejamento da arquitetura em componentes reutilizáveis (`Header`, `Footer`, `Carrossel`, `Contador` e `Form`), estilização isolada via CSS Modules e estruturação de rotas estáticas e dinâmicas com API Routes no Next.js.

## 🎨 Protótipo e Planejamento Visual

<img width="30%" height="30%" alt="MainPage" src="https://github.com/user-attachments/assets/e8bcec00-b412-436c-a20b-dd706a2e606a" />
<img width="30%" height="30%" alt="ContactPage" src="https://github.com/user-attachments/assets/17554874-d309-4182-b9d8-e8a6331b4358" />
<img width="30%" height="30%" alt="AboutPage" src="https://github.com/user-attachments/assets/6fd418a0-7fb8-4e34-9803-83faea2546d2" />
<img width="30%" height="30%" alt="AboutPage (1)" src="https://github.com/user-attachments/assets/9ee62ef4-cc1e-4c81-9305-09be4d599543" />

---

## 🛠️ Tecnologias Escolhidas
- **Next.js (App Router)**: Framework React responsável pelo roteamento baseado em pastas, otimização de fontes/imagens e criação de endpoints de back-end (`API Routes`).
- **React (Hooks Nativos)**: Uso exclusivo de `useState`, `useEffect` e `useRef` para controle de menu mobile, animações numéricas, navegação de slides, consumo de APIs e envio de formulários.
- **CSS Modules & `global.css`**: Estilização modularizada por página e componente (`*.module.css`), evitando conflitos de classes e garantindo responsividade via `@media` queries.
- **API Routes & JSON Mockado**: Endpoints internos em `src/app/api/` que leem e gravam dados em arquivos JSON (`casos.json` e `mensagens.json`), simulando um banco de dados completo.

---

## 💻 Passo a Passo: Inicialização e Estruturação do Projeto

### 1. Criação do Projeto
Para iniciar o projeto utilizando o ecossistema do Node.js, executamos o comando oficial de criação do Next.js no terminal:

```bash
npx create-next-app@latest projeto_borboleta
```

*(Durante a configuração inicial, optou-se por utilizar a pasta `src/` e o **App Router** para melhor organização das rotas).*

### 2. Organização Completa das Pastas e Rotas
Abaixo está a estrutura completa e atualizada do projeto dentro de `projeto_borboleta/`:

```text
projeto_borboleta/
├── public/
│   └── img/                          # Imagens, ícones, logotipos e fotos do portfólio
└── src/
    ├── app/
    │   ├── api/                      # Camada de Backend interno (API Routes do Next.js)
    │   │   ├── casos/
    │   │   │   ├── [slug]/
    │   │   │   │   └── route.js      # Endpoint GET: busca um caso específico pelo slug
    │   │   │   └── route.js          # Endpoint GET: retorna a lista completa de casos
    │   │   └── contato/
    │   │       └── route.js          # Endpoint POST: valida e salva mensagens no JSON
    │   ├── casos_resolvidos/
    │   │   └── [slug]/
    │   │       ├── caso.module.css   # Estilização modular da página de detalhes do caso
    │   │       └── page.jsx          # Página dinâmica de estudo de caso (/casos_resolvidos/[slug])
    │   ├── components/               # Componentes reutilizáveis da interface
    │   │   ├── carrossel/
    │   │   │   └── carrossel.js      # Carrossel interativo de últimos casos
    │   │   ├── contador/
    │   │   │   └── contador.js       # Contador numérico animado para estatísticas
    │   │   ├── footer/
    │   │   │   ├── footer.jsx        # Rodapé institucional global
    │   │   │   └── footer.module.css # Estilos do rodapé
    │   │   ├── form/
    │   │   │   └── form.js           # Formulário interativo de agendamento de consulta
    │   │   └── header/
    │   │       ├── header.js         # Cabeçalho global com menu mobile responsivo
    │   │       └── header.module.css # Estilos do cabeçalho
    │   ├── contato/
    │   │   └── page.js               # Página de Contato (/contato)
    │   ├── sobre/
    │   │   └── page.js               # Página Sobre a Advogada (/sobre)
    │   ├── styles/                   # Folhas de estilo CSS Modules das páginas principais
    │   │   ├── contato.module.css    # Estilos da página de Contato e do Formulário
    │   │   ├── inicio.module.css     # Estilos da Home, Contador e Carrossel
    │   │   └── sobre.module.css      # Estilos da página Sobre
    │   ├── global.css                # Reset CSS e configurações visuais globais
    │   ├── layout.js                 # Layout raiz compartilhado (Fontes + Header + Footer)
    │   └── page.js                   # Página Inicial / Home (/)
    └── data/                         # Banco de dados simulado em arquivos JSON
        ├── casos.json                # Base de dados dos casos jurídicos e áreas de atuação
        └── mensagens.json            # Histórico de mensagens enviadas pelo formulário
```

> **Fluxo de Dados da Aplicação:**
> 1. Na **Home (`/`)**, os 4 cards de *Áreas de Atuação* apontam diretamente para `/casos_resolvidos/[slug]`, enquanto o componente `<Carrossel />` busca os 6 primeiros casos via `GET /api/casos` e também direciona cada card para `/casos_resolvidos/[slug]`.
> 2. Ao acessar `/casos_resolvidos/[slug]`, a página captura o parâmetro da URL com `useParams()` e consulta `GET /api/casos/[slug]`, exibindo *Desafio*, *Estratégia Jurídica*, *Resultado* e *Feedback do Cliente* em abas interativas.
> 3. Na página **`/contato`**, o componente `<Form />` envia os dados preenchidos via `POST /api/contato`, que valida e grava o novo registro em `src/data/mensagens.json`.

---

## ⚙️ Configuração Global da Aplicação

### **1. Layout Raiz (`src/app/layout.js`)**
Define a estrutura base compartilhada por todas as páginas da aplicação, carregando as fontes tipográficas oficiais e encapsulando as rotas entre o cabeçalho e o rodapé.

```jsx
import { Poppins, Source_Serif_4 } from "next/font/google";
import "./global.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-source-serif",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
       <html lang="pt-BR" className={`${poppins.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
```

**O que acontece neste código:**
- **`next/font/google`**: Importa as fontes **Poppins** (textos corridos e formulários) e **Source_Serif_4** (títulos institucionais) de forma otimizada pelo Next.js, registrando-as como variáveis CSS (`--font-poppins` e `--font-source-serif`) na tag `<html>`.
- **`import "./global.css"`**: Aplica o reset de margens e as cores base em toda a aplicação.
- **Encapsulamento com `{children}`**: A propriedade `{children}` representa o conteúdo dinâmico da rota acessada (`/`, `/sobre`, `/contato` ou `/casos_resolvidos/[slug]`), garantindo que `<Header />` e `<Footer />` apareçam automaticamente em todas as telas sem repetição de código.
- **`lang="pt-BR"` e `suppressHydrationWarning`**: Define o idioma português do Brasil para acessibilidade/SEO e evita alertas no console caso extensões do navegador modifiquem atributos HTML antes da hidratação do React.

---

### **2. Estilos Globais (`src/app/global.css`)**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #FFF2D2;
    color: #4a241b;
    font-family: var(--font-source-serif), serif;
}
```

**O que acontece neste código:**
- **Reset Universal (`*`)**: Zera margens e preenchimentos padrão dos navegadores e define `box-sizing: border-box` para que bordas e paddings não ultrapassem a largura declarada dos elementos.
- **Identidade Base (`body`)**: Define o fundo bege institucional (`#FFF2D2`), a cor de texto padrão em marrom escuro (`#4a241b`) e a família tipográfica principal vinculada à variável `--font-source-serif`.

---

## 🗄️ Camada de Dados Simulados (`src/data/`)

### **1. Base de Casos Jurídicos (`src/data/casos.json`)**
Contém um array com 8 objetos completos: os 6 primeiros alimentam o Carrossel da página inicial, enquanto os registros correspondentes às áreas de atuação (`defesa-do-consumidor`, `direito-da-familia`, `direitos-trabalhistas` e `legislacao-civil`) também são acessados diretamente pelos cards da seção *Áreas de Atuação* na Home.

```json
[
  {
    "slug": "quebra-de-contrato",
    "titulo": "Quebra de Contrato",
    "texto": "Empresa com quebra de contrato sem aviso prévio. Atuação ágil para reaver valores.",
    "img": "/img/maos2.png",
    "desafio": "Uma empresa teve o contrato rescindido de forma unilateral, sem aviso prévio, e acumulou prejuízos com valores não pagos. (Edite este texto com o caso real.)",
    "estrategia": [
      {
        "titulo": "Análise",
        "descricao": "Análise detalhada da documentação e dos pontos principais do caso."
      },
      {
        "titulo": "Planejamento",
        "descricao": "Definição das medidas jurídicas mais adequadas ao objetivo do cliente."
      },
      {
        "titulo": "Atuação",
        "descricao": "Condução do caso com foco na solução mais rápida e segura."
      }
    ],
    "resultado": "Resultado alcançado com a atuação jurídica. (Edite este texto com o resultado real.)",
    "impactos": [
      {
        "titulo": "Segurança",
        "descricao": "Solução dos pontos de risco identificados."
      },
      {
        "titulo": "Resolução",
        "descricao": "Medidas adotadas para atender aos objetivos do cliente."
      }
    ],
    "feedback": "Espaço destinado ao depoimento do cliente após a conclusão do caso."
  },
  {
    "slug": "contratos-sem-revisao",
    "titulo": "Contratos sem Revisão",
    "texto": "Contrato sem revisão prévia gera prejuízos financeiros e riscos ao negócio.",
    "img": "/img/card_coffe.png",
    "desafio": "Um negócio assinou contratos sem análise jurídica e passou a enfrentar cláusulas abusivas e riscos financeiros. (Edite este texto com o caso real.)",
    "estrategia": [
      {
        "titulo": "Análise",
        "descricao": "Análise detalhada da documentação e dos pontos principais do caso."
      },
      {
        "titulo": "Planejamento",
        "descricao": "Definição das medidas jurídicas mais adequadas ao objetivo do cliente."
      },
      {
        "titulo": "Atuação",
        "descricao": "Condução do caso com foco na solução mais rápida e segura."
      }
    ],
    "resultado": "Resultado alcançado com a atuação jurídica. (Edite este texto com o resultado real.)",
    "impactos": [
      {
        "titulo": "Segurança",
        "descricao": "Solução dos pontos de risco identificados."
      },
      {
        "titulo": "Resolução",
        "descricao": "Medidas adotadas para atender aos objetivos do cliente."
      }
    ],
    "feedback": "Espaço destinado ao depoimento do cliente após a conclusão do caso."
  },
  {
    "slug": "direitos-trabalhistas",
    "titulo": "Direitos Trabalhistas",
    "texto": "Demitida sem justa causa e sem direitos? Buscamos a devida reparação na justiça.",
    "img": "/img/maos.png",
    "desafio": "Uma trabalhadora foi demitida sem justa causa e não recebeu as verbas rescisórias a que tinha direito. (Edite este texto com o caso real.)",
    "estrategia": [
      {
        "titulo": "Análise",
        "descricao": "Análise detalhada da documentação e dos pontos principais do caso."
      },
      {
        "titulo": "Planejamento",
        "descricao": "Definição das medidas jurídicas mais adequadas ao objetivo do cliente."
      },
      {
        "titulo": "Atuação",
        "descricao": "Condução do caso com foco na solução mais rápida e segura."
      }
    ],
    "resultado": "Resultado alcançado com a atuação jurídica. (Edite este texto com o resultado real.)",
    "impactos": [
      {
        "titulo": "Segurança",
        "descricao": "Solução dos pontos de risco identificados."
      },
      {
        "titulo": "Resolução",
        "descricao": "Medidas adotadas para atender aos objetivos do cliente."
      }
    ],
    "feedback": "Espaço destinado ao depoimento do cliente após a conclusão do caso."
  },
  {
    "slug": "inventario-e-partilha",
    "titulo": "Inventário e Partilha",
    "texto": "Problemas no inventário familiar? Orientação especializada agiliza a partilha.",
    "img": "/img/maos2.png",
    "desafio": "Uma família enfrentava impasses e demora na partilha dos bens após o falecimento de um parente. (Edite este texto com o caso real.)",
    "estrategia": [
      {
        "titulo": "Análise",
        "descricao": "Análise detalhada da documentação e dos pontos principais do caso."
      },
      {
        "titulo": "Planejamento",
        "descricao": "Definição das medidas jurídicas mais adequadas ao objetivo do cliente."
      },
      {
        "titulo": "Atuação",
        "descricao": "Condução do caso com foco na solução mais rápida e segura."
      }
    ],
    "resultado": "Resultado alcançado com a atuação jurídica. (Edite este texto com o resultado real.)",
    "impactos": [
      {
        "titulo": "Segurança",
        "descricao": "Solução dos pontos de risco identificados."
      },
      {
        "titulo": "Resolução",
        "descricao": "Medidas adotadas para atender aos objetivos do cliente."
      }
    ],
    "feedback": "Espaço destinado ao depoimento do cliente após a conclusão do caso."
  },
  {
    "slug": "defesa-do-consumidor",
    "titulo": "Defesa do Consumidor",
    "texto": "Consumidor lesado por propaganda enganosa tem direito à restituição e danos.",
    "img": "/img/card_coffe.png",
    "desafio": "Um consumidor foi induzido a erro por propaganda enganosa e sofreu prejuízo financeiro. (Edite este texto com o caso real.)",
    "estrategia": [
      {
        "titulo": "Análise",
        "descricao": "Análise detalhada da documentação e dos pontos principais do caso."
      },
      {
        "titulo": "Planejamento",
        "descricao": "Definição das medidas jurídicas mais adequadas ao objetivo do cliente."
      },
      {
        "titulo": "Atuação",
        "descricao": "Condução do caso com foco na solução mais rápida e segura."
      }
    ],
    "resultado": "Resultado alcançado com a atuação jurídica. (Edite este texto com o resultado real.)",
    "impactos": [
      {
        "titulo": "Segurança",
        "descricao": "Solução dos pontos de risco identificados."
      },
      {
        "titulo": "Resolução",
        "descricao": "Medidas adotadas para atender aos objetivos do cliente."
      }
    ],
    "feedback": "Espaço destinado ao depoimento do cliente após a conclusão do caso."
  },
  {
    "slug": "cobranca-indevida",
    "titulo": "Cobrança Indevida",
    "texto": "Empresa sofreu cobrança indevida? Atuação estratégica para blindar o patrimônio.",
    "img": "/img/maos.png",
    "desafio": "Uma empresa recebeu cobranças indevidas que ameaçavam o seu patrimônio e o seu fluxo de caixa. (Edite este texto com o caso real.)",
    "estrategia": [
      {
        "titulo": "Análise",
        "descricao": "Análise detalhada da documentação e dos pontos principais do caso."
      },
      {
        "titulo": "Planejamento",
        "descricao": "Definição das medidas jurídicas mais adequadas ao objetivo do cliente."
      },
      {
        "titulo": "Atuação",
        "descricao": "Condução do caso com foco na solução mais rápida e segura."
      }
    ],
    "resultado": "Resultado alcançado com a atuação jurídica. (Edite este texto com o resultado real.)",
    "impactos": [
      {
        "titulo": "Segurança",
        "descricao": "Solução dos pontos de risco identificados."
      },
      {
        "titulo": "Resolução",
        "descricao": "Medidas adotadas para atender aos objetivos do cliente."
      }
    ],
    "feedback": "Espaço destinado ao depoimento do cliente após a conclusão do caso."
  },
  {
    "slug": "direito-da-familia",
    "titulo": "Direito da Família",
    "texto": "Questões familiares exigem sensibilidade e segurança jurídica na solução.",
    "img": "/img/maos2.png",
    "desafio": "Um conflito familiar envolvendo guarda e pensão exigia uma solução equilibrada e respeitosa. (Edite este texto com o caso real.)",
    "estrategia": [
      {
        "titulo": "Análise",
        "descricao": "Análise detalhada da documentação e dos pontos principais do caso."
      },
      {
        "titulo": "Planejamento",
        "descricao": "Definição das medidas jurídicas mais adequadas ao objetivo do cliente."
      },
      {
        "titulo": "Atuação",
        "descricao": "Condução do caso com foco na solução mais rápida e segura."
      }
    ],
    "resultado": "Resultado alcançado com a atuação jurídica. (Edite este texto com o resultado real.)",
    "impactos": [
      {
        "titulo": "Segurança",
        "descricao": "Solução dos pontos de risco identificados."
      },
      {
        "titulo": "Resolução",
        "descricao": "Medidas adotadas para atender aos objetivos do cliente."
      }
    ],
    "feedback": "Espaço destinado ao depoimento do cliente após a conclusão do caso."
  },
  {
    "slug": "legislacao-civil",
    "titulo": "Legislação Civil",
    "texto": "Orientação clara sobre direitos e deveres nas relações civis do dia a dia.",
    "img": "/img/card_coffe.png",
    "desafio": "Um cliente tinha dúvidas sobre seus direitos em uma relação civil e precisava de orientação segura. (Edite este texto com o caso real.)",
    "estrategia": [
      {
        "titulo": "Análise",
        "descricao": "Análise detalhada da documentação e dos pontos principais do caso."
      },
      {
        "titulo": "Planejamento",
        "descricao": "Definição das medidas jurídicas mais adequadas ao objetivo do cliente."
      },
      {
        "titulo": "Atuação",
        "descricao": "Condução do caso com foco na solução mais rápida e segura."
      }
    ],
    "resultado": "Resultado alcançado com a atuação jurídica. (Edite este texto com o resultado real.)",
    "impactos": [
      {
        "titulo": "Segurança",
        "descricao": "Solução dos pontos de risco identificados."
      },
      {
        "titulo": "Resolução",
        "descricao": "Medidas adotadas para atender aos objetivos do cliente."
      }
    ],
    "feedback": "Espaço destinado ao depoimento do cliente após a conclusão do caso."
  }
]
```

**O que acontece neste código:**
- **Chave Única (`slug`)**: Identificador amigável para URL (ex.: `"quebra-de-contrato"`), usado tanto para construir links dinâmicos (`<Link href={`/casos_resolvidos/${caso.slug}`}>`) quanto para filtrar o caso na API.
- **Dados Resumidos vs. Detalhados**: Os campos `titulo`, `texto` e `img` alimentam os cards do Carrossel, enquanto `desafio`, `estrategia` (lista), `resultado`, `impactos` (lista) e `feedback` abastecem as abas internas da página de detalhes.

---

### **2. Registro de Mensagens Recebidas (`src/data/mensagens.json`)**

```json
[
  {
    "id": 1795486623866,
    "nome": "aaa",
    "email": "gabyynog2211@gmail.com",
    "telefone": "11951582537",
    "data": "0455-11-22",
    "mensagem": "aaaaaa",
    "criadoEm": "2026-11-24T02:17:03.866Z"
  }
]
```

**O que acontece neste código:**
- **Persistência em Disco**: Armazena um array JSON com os envios realizados pelo formulário da página de Contato.
- **Metadados Automáticos**: Além dos campos enviados pelo formulário (`nome`, `email`, `telefone`, `data`, `mensagem`), o back-end gera automaticamente um `id` numérico único e o carimbo de data/hora `criadoEm` no padrão ISO-8601.

---

## 🌐 Camada de Backend Interno — API Routes (`src/app/api/`)

### **1. Listagem Geral de Casos (`src/app/api/casos/route.js`)**
Rota `GET` que devolve todos os casos cadastrados em `casos.json`.

```javascript
import { NextResponse } from "next/server";
import casos from "@/data/casos.json";

export async function GET() {
    return NextResponse.json(casos);
}
```

**O que acontece neste código:**
- **`NextResponse.json(casos)`**: Responde às requisições `GET` feitas em `/api/casos`, retornando o conteúdo completo de `src/data/casos.json` serializado em JSON com status `200 OK`.
- **Alias `@/`**: Atalho configurado no projeto que aponta diretamente para a pasta `src/`.

---

### **2. Busca Dinâmica de Caso por Slug (`src/app/api/casos/[slug]/route.js`)**
Rota dinâmica `GET` que captura o `slug` pela URL e retorna apenas os dados daquele caso específico.

```javascript
import { NextResponse } from "next/server";
import casos from "@/data/casos.json";

export async function GET(request, { params }) {
    const { slug } = await params; // no Next 16 params é uma Promise

    const caso = casos.find((c) => c.slug === slug);

    if (!caso) {
        return NextResponse.json(
            { erro: "Caso não encontrado" },
            { status: 404 }
        );
    }

    return NextResponse.json(caso);
}
```

**O que acontece neste código:**
- **Pasta `[slug]`**: Os colchetes indicam ao Next.js que este trecho da URL é dinâmico (ex.: `/api/casos/quebra-de-contrato`).
- **`const { slug } = await params`**: Nas versões recentes do Next.js (Next 15/16), `params` é assíncrono (`Promise`), exigindo `await` para extrair o parâmetro `slug`.
- **Busca e Tratamento de Erro (`404`)**: Usa `casos.find()` para localizar o objeto correspondente; caso o `slug` não exista, retorna erro com status HTTP `404` (*Not Found*).

---

### **3. Recebimento e Persistência de Contatos (`src/app/api/contato/route.js`)**
Endpoint `POST` que valida os dados do formulário e grava o novo agendamento no arquivo `mensagens.json`.

```javascript
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const arquivo = path.join(process.cwd(), "src", "data", "mensagens.json");

export async function POST(request) {
    const { nome, email, telefone, data, mensagem } = await request.json();

    if (!nome || !email) {
        return NextResponse.json(
            { erro: "Nome e e-mail são obrigatórios" },
            { status: 400 }
        );
    }

    const conteudo = await fs.readFile(arquivo, "utf-8");
    const mensagens = JSON.parse(conteudo);

    mensagens.push({
        id: Date.now(),
        nome,
        email,
        telefone,
        data,
        mensagem,
        criadoEm: new Date().toISOString(),
    });

    await fs.writeFile(arquivo, JSON.stringify(mensagens, null, 2));

    return NextResponse.json({ ok: true }, { status: 201 });
}
```

**O que acontece neste código:**
- **Módulos Nativos `fs` e `path`**: Localiza o caminho absoluto de `src/data/mensagens.json` a partir da raiz do projeto (`process.cwd()`) para ler e gravar arquivos no servidor Node.js.
- **Validação de Entrada (`status: 400`)**: Extrai o corpo JSON (`await request.json()`) e verifica se `nome` e `email` foram preenchidos; se estiverem vazios, retorna erro `400` (*Bad Request*).
- **Leitura, Inserção e Escrita**: Lê o array atual (`fs.readFile`), converte via `JSON.parse`, insere o novo registro com `id: Date.now()` e `criadoEm: new Date().toISOString()`, e salva o arquivo formatado (`JSON.stringify(..., null, 2)`), devolvendo status `201` (*Created*).

---

## 🧩 Componentização (`src/app/components/`)

### **1. Componente Header (`src/app/components/header/header.js` e `header.module.css`)**
Gerencia o cabeçalho global da aplicação, os links de navegação e a abertura/fechamento do menu responsivo em dispositivos móveis via `useState`.

```jsx
"use client";

import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
    const [aberto, setAberto] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <a href="/" className={styles.logo}>
                    <img src="/img/logo.png" alt="Logo" />
                </a>

                <ul className={`${styles.nav_links} ${aberto ? styles.ativo : ""}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>

                <a href="/contato" className={styles.botao_consulta}>
                    Consulta
                </a>

                <button
                    type="button"
                    className={styles.menu_hamburguer}
                    onClick={() => setAberto(!aberto)}
                    aria-label="Abrir menu"
                >
                    {aberto ? "✕" : "☰"}
                </button>
            </div>
        </header>
    );
}
```

**Estilização (`src/app/components/header/header.module.css`):**

```css
.header {
    background-color: transparent;
    position: relative;
    z-index: 10;
}

.menu {
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 95px;
    background-color: #ffffff;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    width: 175px;
    height: auto;
}

.nav_links {
    display: flex;
    gap: 45px;
    list-style: none;
    margin-right: 50px;
}

.nav_links a {
    color: #432818;
    font-family: 'Source Serif 4', serif;
    font-size: 18px;
    text-decoration: none;
    transition: 0.2s;
}

.nav_links a:hover {
    color: #6F1D1B;
    text-decoration: underline;
    text-underline-offset: 7px;
}

.botao_consulta {
    background-color: #6F1D1B;
    color: white;
    padding: 11px 22px;
    border-radius: 4px;
    font-family: 'Source Serif 4', serif;
    font-weight: bold;
    text-decoration: none;
}

.menu_hamburguer {
    display: none;
    background: none;
    border: none;
    color: #6F1D1B;
    font-size: 30px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .header {
        z-index: 1000;
    }

    .menu {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 65px;
        padding: 0 20px;
    }

    .menu_hamburguer {
        display: block;
        position: relative;
        z-index: 100000;
        border: none;
        background: transparent;
        color: #6F1D1B;
        font-size: 28px;
        cursor: pointer;
    }

    .botao_consulta {
        display: none;
    }

    .nav_links {
        display: none;
    }

    .nav_links.ativo {
        display: flex;
        position: absolute;
        top: 65px;
        left: 0;
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 10px 0;
        background-color: #ffffff;
        list-style: none;
        z-index: 99999;
    }

    .nav_links.ativo li {
        display: block;
        width: 100%;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .nav_links.ativo li a {
        display: block;
        width: 100%;
        padding: 5px 10px;
        color: #333333;
        text-decoration: none;
        font-size: 17px;
    }
}
```

**O que acontece neste código:**
- **`"use client"` e `useState(false)`**: Habilita a interatividade no navegador e cria o estado booleano `aberto` que controla o menu mobile.
- **Classe Condicional (`.ativo`)**: Adiciona `styles.ativo` à lista `<ul>` quando `aberto` é verdadeiro, exibindo o menu suspenso em coluna (`top: 65px`) abaixo de `768px`.
- **Alternância de Ícone (`{aberto ? "✕" : "☰"}`)**: Altera visualmente o símbolo do botão hambúrguer conforme o estado atual do menu.

---

### **2. Componente Footer (`src/app/components/footer/footer.jsx` e `footer.module.css`)**
Rodapé institucional global contendo logotipo, links rápidos, dados de contato e redes sociais.

```jsx
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <section className={styles.container_footer}>

                <article className={`${styles.footer_info} ${styles.footer_logo}`}>
                    <h2>
                        <Link href="/">
                            <img src="/img/logo.png" alt="Logo" />
                        </Link>
                    </h2>

                    <p>
                        Advocacia com propósito: proteger direitos, construir confiança.
                    </p>
                </article>

                <nav className={`${styles.footer_info} ${styles.footer_navegacao}`}>
                    <h2>Navegação</h2>

                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/sobre">Sobre</Link></li>
                        <li><Link href="#">Áreas de atuação</Link></li>
                        <li><Link href="/contato">Contato</Link></li>
                    </ul>
                </nav>

                <address className={`${styles.footer_info} ${styles.footer_contato}`}>
                    <h2>Contato</h2>

                    <div className={styles.contato_item}>
                        <img src="/img/Vector (2).png" alt="Telefone" />
                        <p>(11) 9999-9999</p>
                    </div>

                    <div className={styles.contato_item}>
                        <img src="/img/Vector (3).png" alt="E-mail" />
                        <p>contato@exemplo.com</p>
                    </div>

                    <div className={styles.contato_item}>
                        <img src="/img/Vector (4).png" alt="Localização" />
                        <p>São Paulo, SP</p>
                    </div>
                </address>

                <article className={`${styles.footer_info} ${styles.footer_atendimento}`}>
                    <h2>Atendimento</h2>

                    <p>
                        Atendimento online e presencial, agende sua consulta.
                    </p>

                    <Link className="{styles.btn_maroon}" href="#">
                        Consulta
                    </Link>
                </article>

            </section>

            <nav className={styles.social_links} aria-label="Redes sociais">
                <a href="#">
                    <img src="/img/Facebook.png" alt="Facebook" />
                </a>

                <a href="#">
                    <img src="/img/Instagram (6).png" alt="Instagram" />
                </a>

                <a href="#">
                    <img src="/img/Linkedin (2).png" alt="LinkedIn" />
                </a>
            </nav>

        </footer>
    );
}
```

**Estilização (`src/app/components/footer/footer.module.css`):**

```css
.footer {
    background-color: white;
    color: #6F1D1B;
    padding: 50px 7% 25px;
}

.container_footer {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1.3fr 1.3fr;
    gap: 50px;
}

.footer_info h2 {
    font-family: 'Source Serif 4', serif;
    color: #6F1D1B;
    font-size: 18px;
    margin-bottom: 18px;
}

.footer_info p {
    color: #432818;
    font-size: 13px;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
}

.footer_logo img {
    width: 175px;
    height: auto;
}

.footer_logo h2 {
    font-size: 25px;
    font-family: 'Poppins', sans-serif;
}

.footer_logo p {
    max-width: 220px;
}

.footer_navegacao ul {
    list-style: none;
}

.footer_navegacao li {
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
}

.footer_navegacao a {
    color: #6F1D1B;
    font-size: 13px;
    text-decoration: none;
}

.footer_navegacao a:hover {
    color: #c59a45;
}

.footer_contato {
    font-style: normal;
}

.contato_item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 13px;
}

.contato_item img {
    width: 17px;
    height: 17px;
    object-fit: contain;
}

.contato_item p {
    margin: 0;
}

.footer_atendimento p {
    max-width: 220px;
    margin-bottom: 20px;
}

.btn_maroon {
    display: inline-block;
    padding: 10px 20px;
    background-color: #6F1D1B;
    color: #FFF2D2;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: bold;
    text-decoration: none;
}

.btn_maroon:hover {
    background-color: #641818;
}

.social_links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-top: 35px;
    padding-top: 20px;
    border-top: 1px solid rgba(48, 47, 47, 0.3);
}

.social_links a {
    display: flex;
    align-items: center;
}

.social_links a:hover {
    opacity: 0.7;
}

.social_links img {
    width: 17px;
    height: 17px;
    object-fit: contain;
}

@media (max-width: 768px) {
    .footer {
        padding: 40px 25px 25px;
    }

    .container_footer {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .footer_logo p {
        max-width: 100%;
    }

    .footer_atendimento p {
        max-width: 100%;
    }

    .social_links {
        margin-top: 20px;
    }
}
```

**O que acontece neste código:**
- **Server Component Nativo**: Renderizado diretamente no servidor por não exigir estado no cliente.
- **HTML5 Semântico e Grid Responsivo**: Usa `<footer>`, `<nav>`, `<address>` e `<article>`, organizando o conteúdo em 4 colunas (`grid-template-columns: 1.5fr 1fr 1.3fr 1.3fr`) no desktop e empilhando em coluna única abaixo de `768px`.

---

### **3. Componente Carrossel Dinâmico (`src/app/components/carrossel/carrossel.js`)**
Busca os casos diretamente da API interna (`/api/casos`), agrupa-os em slides e redireciona cada card para sua rota dinâmica.

```jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../../styles/inicio.module.css";

export default function Carrossel() {
    const grupoRef = useRef(null);
    const [indice, setIndice] = useState(0);
    const [casos, setCasos] = useState([]);

    useEffect(() => {
        fetch("/api/casos")
            .then((res) => res.json())
            .then((dados) => setCasos(dados.slice(0, 6)));
    }, []);

    const grupos = [];
    for (let i = 0; i < casos.length; i += 3) {
        grupos.push(casos.slice(i, i + 3));
    }

    function atualizar(novoIndice) {
        const grupo = grupoRef.current;
        if (!grupo) return;

        if (window.innerWidth <= 768) {
            const card = grupo.querySelector("[data-card]");
            const larguraCard = card ? card.offsetWidth : 0;

            grupo.style.transform = `translateX(-${novoIndice * larguraCard}px)`;
        } else {
            grupo.style.transform = `translateX(-${novoIndice * 100}%)`;
        }
    }

    useEffect(() => {
        atualizar(indice);
    }, [indice, casos]);

    useEffect(() => {
        function aoRedimensionar() {
            setIndice(0);
            atualizar(0);
        }

        window.addEventListener("resize", aoRedimensionar);

        return () => window.removeEventListener("resize", aoRedimensionar);
    }, []);

    function proximo() {
        const limite =
            window.innerWidth <= 768 ? casos.length - 1 : grupos.length - 1;

        setIndice((atual) =>
            atual < limite ? atual + 1 : atual
        );
    }

    function anterior() {
        setIndice((atual) =>
            atual > 0 ? atual - 1 : atual
        );
    }

    return (
        <div className={styles["carrossel-area"]}>
            <div className={styles["carrossel-container"]}>
                <div
                    className={styles["carrossel-grupo"]}
                    ref={grupoRef}
                >
                    {grupos.map((grupo, i) => (
                        <div
                            className={styles["grupo-cards"]}
                            key={i}
                        >
                            {grupo.map((caso) => (
                                <article
                                    className={styles.caso_card}
                                    data-card
                                    key={caso.slug}
                                >
                                    <img
                                        className={styles.caso_img}
                                        src={caso.img}
                                        alt={caso.titulo}
                                    />

                                    <div className={styles.caso_conteudo}>
                                        <h3 className={styles.caso_titulo}>
                                            {caso.titulo}
                                        </h3>

                                        <p className={styles.caso_texto}>
                                            {caso.texto}
                                        </p>

                                        <Link className="{styles.card_link}" href="{`/casos_resolvidos/${caso.slug}`}">
                                            Saiba mais
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.controles}>
                <button
                    className={styles["botao-redondo"]}
                    type="button"
                    onClick={anterior}
                    aria-label="Anterior"
                >
                    &lt;
                </button>

                <button
                    className={styles["botao-redondo"]}
                    type="button"
                    onClick={proximo}
                    aria-label="Próximo"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
```

**O que acontece neste código:**
- **Consumo da API (`/api/casos`)**: No carregamento inicial (`useEffect`), busca os casos e armazena os 6 primeiros (`dados.slice(0, 6)`).
- **Agrupamento e Deslizamento (`useRef` + `translateX`)**: Divide os casos em grupos de 3 cards no desktop e manipula `transform: translateX(...)` na referência `grupoRef` para deslizar suavemente por grupo (`100%`) no desktop ou por largura individual de card (`offsetWidth`) no mobile.
- **Redimensionamento (`resize`) e Links Dinâmicos**: Reseta o índice para `0` ao redimensionar a janela e direciona cada botão *"Saiba mais"* para `/casos_resolvidos/${caso.slug}`.

---

### **4. Componente Contador Animado (`src/app/components/contador/contador.js`)**
Componente reativo para estatísticas numéricas animadas na página inicial.

```jsx
"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/inicio.module.css"

export default function Contador({ valorFinal }) {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        if (valorFinal === 0) return;

        const intervalo = setInterval(() => {
            setContador((atual) => {
                if (atual + 1 >= valorFinal) {
                    clearInterval(intervalo);
                }
                return atual + 1;
            });
        }, 100);

        return () => clearInterval(intervalo);
    }, [valorFinal]);

 
       return <span className={styles.numero_estatistica}>{contador}+</span>;
}
```

**O que acontece neste código:**
- **Prop `valorFinal` e `setInterval`**: Recebe o valor alvo (`5`, `50` ou `15`) e incrementa `contador` de `1` em `1` a cada `100ms` até atingir `valorFinal`, encerrando e limpando o intervalo com `clearInterval`.

---

### **5. Componente Formulário de Contato (`src/app/components/form/form.js`)**
Gerencia a captura de dados, o envio assíncrono via `POST` e o retorno visual ao usuário.

```jsx
'use client';

import { useState } from 'react';
import styles from '../../styles/contato.module.css';

export default function Form() {
    const [status, setStatus] = useState('');

    async function enviar(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const dados = Object.fromEntries(new FormData(form));

        setStatus('Enviando...');

        try {
            const res = await fetch('/api/contato', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados),
            });

            if (res.ok) {
                setStatus('Mensagem enviada com sucesso!');
                form.reset();
            } else {
                setStatus('Erro ao enviar. Tente novamente.');
            }
        } catch {
            setStatus('Erro de conexão. Tente novamente.');
        }
    }

    return (
        <div className={styles.formulario}>
            <h2>Agende uma consulta</h2>

            <form onSubmit={enviar}>
                <div className={styles.campo}>
                    <i className="fa-regular fa-user"></i>
                    <input type="text" name="nome" placeholder="Nome" required />
                </div>

                <div className={styles.campo}>
                    <i className="fa-regular fa-envelope"></i>
                    <input type="email" name="email" placeholder="Email" required />
                </div>

                <div className={styles.campo}>
                    <i className="fa-solid fa-phone"></i>
                    <input type="tel" name="telefone" placeholder="Telefone" />
                </div>

                <div className={styles.campo}>
                    <i className="fa-regular fa-calendar"></i>
                    <input type="date" name="data" />
                </div>

                <div className={`${styles.campo} ${styles.mensagem}`}>
                    <i className="fa-regular fa-comment"></i>
                    <textarea name="mensagem" placeholder="Mensagem"></textarea>
                </div>

                <div className={styles.area_botao}>
                    <button type="submit">
                        Enviar
                    </button>
                </div>

                {status && <p>{status}</p>}
            </form>
        </div>
    );
}
```

**O que acontece neste código:**
- **Extração com `FormData`**: Intercepta o submit (`e.preventDefault()`) e converte todos os inputs do formulário em um objeto JavaScript via `Object.fromEntries(new FormData(form))`.
- **Envio `POST` e Feedback (`status`)**: Envia o JSON para `/api/contato`, atualiza a mensagem de status em tempo real (`"Enviando..."`, `"Mensagem enviada com sucesso!"` ou mensagens de erro) e limpa o formulário (`form.reset()`).

---

## 📄 Estrutura das Páginas e Implementação

### **1. Página Inicial / Home (`/`)**
- **Arquivo**: `src/app/page.js`
- **Estilização**: `src/app/styles/inicio.module.css`
- **Estrutura**:
  - Banner principal (*hero*) com sobreposição da estátua da Justiça.
  - Barra de estatísticas animadas utilizando `<Contador />`.
  - Grade com as 4 **Áreas de Atuação**, cada uma apontando diretamente para sua respectiva rota dinâmica `/casos_resolvidos/[slug]`.
  - Seção institucional sobre a advogada com checklist de diferenciais e o `<Carrossel />` interativo de últimos casos.

```jsx
import styles from "./styles/inicio.module.css";
import Link from "next/link";

import Contador from "./components/contador/contador";
import Carrossel from "./components/carrossel/carrossel";

export default function Home() {
    return (
        <main>
            <section className={styles.principal}>
                <article className={styles.container_principal}>
                    <div className={styles.principal_texto}>
                        <h1 className={styles.titulo_principal}>
                            Seu <span>direito</span> nossa causa
                        </h1>

                        <div className={styles.linha}></div>

                        <p className={styles.descricao}>
                            Atuo na análise preventiva, elaboração de contratos
                            e defesa estratégica de interesses, unindo rigor
                            técnico e atendimento humanizado para garantir
                            segurança jurídica e soluções eficientes para cada
                            cliente.
                        </p>

                        <Link ${styles.botao_contato_principal}`} className="{`${styles.botao_contato}" href="/contato">
                            Contato
                        </Link>
                    </div>

                    <div className={styles.container_hero_imagens}>
                        <img
                            src="/img/Capturar.JPG"
                            alt="Fundo Dourado"
                            className={styles.img_fundo_card}
                        />

                        <img
                            src="/img/ChatGPT Image 30 de ago. de 2026, 02_13_39-Photoroom 1 (1).png"
                            alt="Estátua da Justiça"
                            className={styles.img_estatua_sobreposta}
                        />
                    </div>
                </article>
            </section>

            <section className={styles.barra_estatisticas}>
                <ul className={styles.grade_estatisticas}>
                    <li className={styles.item_estatistica}>
                        <img
                            src="/img/Calendario.png"
                            alt="Calendário"
                            className={styles.imagem_icone_estatistica}
                        />
                        <p>
                            <Contador valorFinal="{5}"/>
                            <span className={styles.rotulo_estatistica}>
                                Anos de Carreira
                            </span>
                        </p>
                    </li>

                    <li className={styles.separador}></li>

                    <li className={styles.item_estatistica}>
                        <img
                            src="/img/Pessoa.png"
                            alt="Clientes"
                            className={styles.imagem_icone_estatistica}
                        />
                        <p>
                            <Contador valorFinal="{50}"/>
                            <span className={styles.rotulo_estatistica}>
                                Clientes Atendidos
                            </span>
                        </p>
                    </li>

                    <li className={styles.separador}></li>

                    <li className={styles.item_estatistica}>
                        <img
                            src="/img/joia.png"
                            alt="Casos"
                            className={styles.imagem_icone_estatistica}
                        />
                        <p>
                            <Contador valorFinal="{15}"/>
                            <span className={styles.rotulo_estatistica}>
                                Casos Resolvidos
                            </span>
                        </p>
                    </li>
                </ul>
            </section>

            <section className={styles.areas_atuacao}>
                <article className={styles.container_areas}>
                    <h1 className={styles.titulo_areas}>
                        Áreas de Atuação
                    </h1>

                    <div className={styles.linha}></div>

                    <div className={styles.container_cards}>
                        <article className={styles.cartao}>
                            <img
                                src="/img/Consumidor.png"
                                alt="Ícone Defesa do Consumidor"
                                className={styles.icone_cartao}
                            />

                            <h2 className={styles.titulo_cartao}>
                                Defesa do Consumidor
                            </h2>

                            <p className={styles.descricao_cartao}>
                                Defesa dos seus direitos nas relações de consumo.
                            </p>

                            <Link className="{styles.link_cartao}" href="/casos_resolvidos/defesa-do-consumidor">
                                Saiba mais
                            </Link>
                        </article>

                        <article className={styles.cartao}>
                            <img
                                src="/img/familia.png"
                                alt="Ícone Direito da Família"
                                className={styles.icone_cartao}
                            />

                            <h2 className={styles.titulo_cartao}>
                                Direito da Família
                            </h2>

                            <p className={styles.descricao_cartao}>
                                Defesa dos seus direitos nas relações de família.
                            </p>

                            <Link className="{styles.link_cartao}" href="/casos_resolvidos/direito-da-familia">
                                Saiba mais
                            </Link>
                        </article>

                        <article className={styles.cartao}>
                            <img
                                src="/img/trabalhista.png"
                                alt="Ícone Direitos Trabalhistas"
                                className={styles.icone_cartao}
                            />

                            <h2 className={styles.titulo_cartao}>
                                Direitos Trabalhistas
                            </h2>

                            <p className={styles.descricao_cartao}>
                                Defesa dos seus direitos nas relações trabalhistas.
                            </p>

                            <Link className="{styles.link_cartao}" href="/casos_resolvidos/direitos-trabalhistas">
                                Saiba mais
                            </Link>
                        </article>

                        <article className={styles.cartao}>
                            <img
                                src="/img/civil.png"
                                alt="Ícone Legislação Civil"
                                className={styles.icone_cartao}
                            />

                            <h2 className={styles.titulo_cartao}>
                                Legislação Civil
                            </h2>

                            <p className={styles.descricao_cartao}>
                                Defesa dos seus direitos na área civil.
                            </p>

                            <Link className="{styles.link_cartao}" href="/casos_resolvidos/legislacao-civil">
                                Saiba mais
                            </Link>
                        </article>
                    </div>
                </article>
            </section>

            <section className={styles.sobre}>
                <figure className={styles.img_advogada}>
                    <img
                        src="/img/advogada.jpeg"
                        alt="Foto da advogada"
                    />
                </figure>

                <article className={styles.sobre_texto}>
                    <h2 className={styles.sobre_titulo}>
                        Sobre a Doutora
                    </h2>

                    <div className={styles.linha}></div>

                    <p className={styles.sobre_descricao}>
                        Atuação pautada na ética, responsabilidade e dedicação.
                        O objetivo é oferecer um atendimento personalizado,
                        com foco na melhor solução para cada caso.
                    </p>

                    <ul className={styles.check_list}>
                        <li>
                            <img src="/img/Check.png" alt="" />
                            Atendimento humanizado;
                        </li>

                        <li>
                            <img src="/img/Check.png" alt="" />
                            Compromisso com o cliente;
                        </li>

                        <li>
                            <img src="/img/Check.png" alt="" />
                            Transparência e ética profissional.
                        </li>
                    </ul>

                    <Link ${styles.botao_contato_sobre}`} className="{`${styles.botao_contato}" href="/contato">
                        Contato
                    </Link>
                </article>
            </section>

            <section className={styles.noticias}>
                <div className={styles.container_noticias}>
                    <h2 className={styles.noticias_titulo}>
                        Últimos Casos
                    </h2>

                    <div className={styles.linha}></div>

                    <Carrossel/>
                </div>
            </section>
        </main>
    );
}
```

**Estilização (`src/app/styles/inicio.module.css`):**

```css
.principal {
    background-color: #FFF2D2;
    position: relative;
    z-index: 20;
}

.container_principal {
    height: 423px;
    display: flex;
    position: relative;
}

.principal_texto {
    width: 55%;
    padding: 58px 30px 40px 67px;
}

.titulo_principal {
    max-width: 480px;
    color: #432818;
    font-family: 'Source Serif 4', serif;
    font-size: 42px;
    line-height: 1.3;
    font-weight: bold;
}

.titulo_principal span {
    color: #6F1D1B;
}

.descricao {
    max-width: 390px;
    margin-top: 16px;
    color: #190900;
    font-size: 15px;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
    text-align: justify;
}

.botao_contato {
    display: inline-block;
    text-decoration: none;
    border-radius: 4px;
    font-family: 'Source Serif 4', serif;
    font-weight: bold;
}

.botao_contato_principal {
    margin-top: 42px;
    padding: 10px 20px;
    background-color: #6F1D1B;
    color: #FFF2D2;
}

.botao_contato_principal::after {
    content: " →";
    font-size: 18px;
}

.container_hero_imagens {
    width: 45%;
    height: 423px;
    position: relative;
}

.img_fundo_card {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    position: relative;
    z-index: 1;
}

.img_estatua_sobreposta {
    position: absolute;
    top: -10px;
    left: 10%;
    height: 434px;
    width: auto;
    object-fit: contain;
    z-index: 2000;
    pointer-events: none;
}

.barra_estatisticas {
    background-color: #6F1D1B;
}

.grade_estatisticas {
    height: 100px;
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;
    list-style: none;
    align-items: center;
}

.item_estatistica {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
}

.separador {
    width: 2px;
    height: 60px;
    background-color: #BB9457;
}

.imagem_icone_estatistica {
    width: 42px;
    height: 42px;
    object-fit: contain;
}

.item_estatistica p {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.numero_estatistica {
    color: #FFF2D2;
    font-size: 30px;
    font-weight: normal;
}

.rotulo_estatistica {
    color: #FFF2D2;
    font-size: 10px;
    text-transform: uppercase;
}

.areas_atuacao {
    background-color: #FFF2D2;
    padding: 40px 120px 50px;
}

.container_areas {
    width: 1050px;
    margin: 0 auto;
}

.titulo_areas {
    color: #432818;
    font-family: 'Source Serif 4', serif;
    font-size: 28px;
}

.linha {
    width: 55px;
    height: 2px;
    background-color: #BB9457;
    margin: 10px 0 30px;
}

.container_cards {
    display: flex;
    justify-content: center;
    gap: 25px;
}

.cartao {
    width: 250px;
    height: 310px;
    background-color: #FDF5E5;
    border: 1px solid #6F1D1B54;
    border-radius: 4px;
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: 0.2s;
}

.cartao:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(74, 36, 27, 0.12);
}

.icone_cartao {
    width: 90px;
    height: 90px;
    margin-bottom: 25px;
}

.titulo_cartao {
    width: 150px;
    color: #6F1D1B;
    font-family: 'Source Serif 4', serif;
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 12px;
}

.descricao_cartao {
    color: #000000;
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
}

.card_link,
.link_cartao {
    margin-top: auto;
    color: #6F1D1B;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
}

.card_link::after,
.link_cartao::after {
    content: " →";
}

.card_link:hover,
.link_cartao:hover {
    color: #432818;
}

.sobre {
    background-color: #6F1D1B;
    padding: 60px 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 150px;
}

.img_advogada {
    width: 400px;
    height: 400px;
    background-color: #d3d3d3;
    position: relative;
    overflow: hidden;
    border-radius: 6px;
}

.img_advogada::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-top: 40px solid #BB9457;
    border-left: 40px solid transparent;
}

.img_advogada img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.sobre_texto {
    width: 500px;
}

.sobre_titulo {
    color: #FFF2D2;
    font-family: 'Source Serif 4', serif;
    font-size: 28px;
    margin-bottom: 10px;
}

.sobre_descricao {
    color: #FFF2D2;
    font-size: 17px;
    line-height: 1.7;
    margin-bottom: 25px;
    text-align: justify;
    font-family: 'Poppins', sans-serif;
}

.check_list {
    list-style: none;
    margin: 0 0 30px;
}

.check_list li {
    display: flex;
    align-items: center;
    gap: 14px;
    color: #ffffff;
    font-size: 17px;
    margin-bottom: 18px;
    font-family: 'Poppins', sans-serif;
}

.check_list li img {
    width: 25px;
    height: 25px;
    object-fit: contain;
    flex-shrink: 0;
}

.botao_contato_sobre {
    padding: 13px 30px;
    background-color: #FFF2D2;
    color: #7d1f1f;
    font-size: 15px;
}

.botao_contato_sobre:hover {
    background-color: #BB9457;
}

.noticias {
    background-color: #FFF2D2;
    padding: 60px 0 75px;
}

.container_noticias {
    width: 1075px;
    margin: 0 auto;
}

.noticias_titulo {
    color: #432818;
    font-family: 'Source Serif 4', serif;
    font-size: 32px;
    margin-bottom: 10px;
}

.carrossel-area {
    position: relative;
    width: 100%;
}

.carrossel-container {
    width: 100%;
    overflow: hidden;
}

.carrossel-grupo {
    display: flex;
    transition: transform 0.4s ease-in-out;
    width: 100%;
}

.grupo-cards {
    display: flex;
    gap: 25px;
    min-width: 100%;
    box-sizing: border-box;
}

.caso_card {
    background-color: #ffffff;
    width: calc(33.333% - 17px);
    min-height: 230px;
    display: flex;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    border-radius: 4px;
}

.caso_card::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-top: 25px solid #6F1D1B;
    border-left: 25px solid transparent;
}

.caso_img {
    width: 40%;
    height: 230px;
    object-fit: cover;
}

.caso_conteudo {
    width: 60%;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.caso_titulo {
    color: #6F1D1B;
    font-size: 20px;
    margin: 0 0 10px;
}

.caso_texto {
    color: #190900;
    font-size: 13px;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
}

.controles {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
}

.botao-redondo {
    background-color: #6F1D1B;
    color: #ffffff;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
}

.botao-redondo:hover {
    background-color: #432818;
}


@media (max-width: 768px) {
    .container_principal {
        height: auto;
        display: flex;
        flex-direction: column;
    }

    .principal_texto {
        width: 100%;
        padding: 40px 25px;
    }

    .titulo_principal {
        max-width: 100%;
        font-size: 36px;
        line-height: 1.2;
    }

    .descricao {
        max-width: 100%;
        font-size: 14px;
    }

    .botao_contato_principal {
        margin-top: 25px;
    }

    .container_hero_imagens {
        width: 100%;
        height: 300px;
    }

    .img_fundo_card {
        width: 100%;
        height: 100%;
    }

    .img_estatua_sobreposta {
        height: 300px;
        left: 10%;
        top: 0;
    }

    .barra_estatisticas {
        padding: 20px 10px;
    }

    .grade_estatisticas {
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .item_estatistica {
        width: 100%;
    }

    .separador {
        width: 60%;
        height: 1px;
    }

    .areas_atuacao {
        padding: 40px 20px;
    }

    .container_areas {
        width: 100%;
    }

    .titulo_areas {
        font-size: 28px;
    }

    .container_cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .cartao {
        width: 75%;
        max-width: 260px;
        height: 310px;
    }

    .sobre {
        padding: 45px 20px;
        flex-direction: column;
        gap: 35px;
    }

    .img_advogada {
        width: 100%;
        max-width: 350px;
        height: 350px;
    }

    .sobre_texto {
        width: 100%;
    }

    .sobre_titulo {
        font-size: 28px;
    }

    .sobre_descricao {
        font-size: 15px;
        text-align: left;
    }

    .check_list li {
        font-size: 15px;
    }

    .noticias {
        padding: 40px 20px 50px;
    }

    .container_noticias {
        width: 100%;
    }

    .noticias_titulo {
        font-size: 26px;
    }

    .carrossel-area {
        width: 100%;
    }

    .carrossel-container {
        width: 100%;
        overflow: hidden;
    }

    .carrossel-grupo {
        display: flex;
        transition: transform 0.5s ease;
    }

    .grupo-cards {
        display: contents;
    }

    .caso_card {
        min-width: 100%;
        width: 100%;
        min-height: auto;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
    }

    .caso_img {
        width: 100%;
        height: 180px;
        object-fit: cover;
    }

    .caso_conteudo {
        width: 100%;
        min-height: 190px;
        padding: 20px 22px 22px;
        display: flex;
        flex-direction: column;
    }

    .caso_titulo {
        font-size: 19px;
        margin-bottom: 12px;
    }

    .caso_texto {
        font-size: 13px;
        line-height: 1.5;
    }

    .card_link {
        margin-top: 15px;
    }

    .controles {
        margin-top: 25px;
    }
}
```

**O que acontece neste código:**
- **Composição Híbrida**: `page.js` é renderizado no servidor e delega a interatividade aos componentes `<Contador />` e `<Carrossel />`.
- **Sobreposição e Detalhes Geométricos**: `.img_estatua_sobreposta` usa `position: absolute` para se destacar sobre o hero, enquanto `.img_advogada::after` e `.caso_card::after` desenham triângulos decorativos nos cantos superiores direitos.

---

### **2. Página Sobre (`/sobre`)**
- **Arquivo**: `src/app/sobre/page.js`
- **Estilização**: `src/app/styles/sobre.module.css`
- **Estrutura**: Apresenta a trajetória da Dra. Luciana, indicadores de credibilidade (`+100 Casos resolvidos` e `5 Anos de carreira`), retrato profissional e cards com as especialidades jurídicas.

```jsx
import styles from "../styles/sobre.module.css";

export default function Sobre() {
    return (
        <main>
            <section className={styles.sobre}>
                <article className={styles.sobre_texto}>
                    <h1 className={styles.sobre_titulo}>
                        Sobre a Dr. Luciana
                    </h1>

                    <div className={styles.linha}></div>

                    <p className={styles.sobre_descricao}>
                        Atuação jurídica pautada pela ética, dedicação e
                        compromisso com cada cliente. Advogada Tal oferece
                        orientação personalizada e soluções estratégicas para
                        proteger seus direitos e interesses.
                    </p>

                    <a href="/contato" className={styles.botao_contato}>
                        Contato
                    </a>
                    <section className={styles.estatisticas}>

                        <article className={styles.estatistica}>
                            <strong className={styles.numero_estatistica}>
                                +100
                            </strong>
                            <span>Casos resolvidos</span>
                        </article>

                        <article className={styles.estatistica}>
                            <strong className={styles.numero_estatistica}>
                                5
                            </strong>
                            <span>Anos de carreira</span>
                        </article>

                    </section>
                </article>

                <figure className={styles.img_advogada}>
                    <img
                        src="/img/advogada.jpeg"
                        alt="Advogada sentada em seu escritório"
                    />
                </figure>
            </section>
            <section className={styles.areas_atuacao}>
                <article className={styles.container_areas}>
                    <h2 className={styles.titulo_areas}>
                        Áreas de Atuação
                    </h2>

                    <div className={styles.linha}></div>

                    <div className={styles.container_cards}>
                        <article className={styles.cartao}>
                            <img
                                src="/img/Consumidor.png"
                                alt="Defesa do Consumidor"
                                className={styles.icone_cartao}
                            />
                            <h3 className={styles.titulo_cartao}>
                                Defesa do Consumidor
                            </h3>
                            <p className={styles.descricao_cartao}>
                                Defesa dos seus direitos nas relações de consumo.
                            </p>
                            <a href="#" className={styles.link_cartao}>
                                Saiba mais
                            </a>
                        </article>

                        <article className={styles.cartao}>
                            <img
                                src="/img/familia.png"
                                alt="Direito da Família"
                                className={styles.icone_cartao}
                            />
                            <h3 className={styles.titulo_cartao}>
                                Direito da Família
                            </h3>
                            <p className={styles.descricao_cartao}>
                                Defesa dos seus direitos nas relações de família.
                            </p>
                            <a href="#" className={styles.link_cartao}>
                                Saiba mais
                            </a>
                        </article>

                        <article className={styles.cartao}>
                            <img
                                src="/img/trabalhista.png"
                                alt="Direitos Trabalhistas"
                                className={styles.icone_cartao}
                            />
                            <h3 className={styles.titulo_cartao}>
                                Direitos Trabalhistas
                            </h3>
                            <p className={styles.descricao_cartao}>
                                Defesa dos seus direitos nas relações trabalhistas.
                            </p>
                            <a href="#" className={styles.link_cartao}>
                                Saiba mais
                            </a>
                        </article>

                        <article className={styles.cartao}>
                            <img
                                src="/img/civil.png"
                                alt="Legislação Civil"
                                className={styles.icone_cartao}
                            />
                            <h3 className={styles.titulo_cartao}>
                                Legislação Civil
                            </h3>
                            <p className={styles.descricao_cartao}>
                                Defesa dos seus direitos na área civil.
                            </p>
                            <a href="#" className={styles.link_cartao}>
                                Saiba mais
                            </a>
                        </article>
                    </div>
                </article>
            </section>
        </main>
    );
}
```

**Estilização (`src/app/styles/sobre.module.css`):**

```css
.sobre {
    min-height: 570px;
    background-color: #FFF2D2;
    padding: 75px 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 90px;
}

.sobre_texto {
    width: 520px;
}

.sobre_titulo {
    color: #6F1D1B;
    font-family: 'Source Serif 4', serif;
    font-size: 42px;
    line-height: 1.2;
}

.linha {
    width: 55px;
    height: 2px;
    background-color: #BB9457;
    margin: 12px 0 28px;
}

.sobre_descricao {
    color: #4a241b;
    font-size: 16px;
    line-height: 1.8;
    margin-top: 0;
    margin-bottom: 0;
    text-align: justify;
    font-family: 'Poppins', sans-serif;
}

.botao_contato {
    display: inline-block;
    margin-top: 30px;
    padding: 11px 22px;
    background-color: #6F1D1B;
    color: #FFF2D2;
    border-radius: 4px;
    font-family: 'Source Serif 4', serif;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
}

.botao_contato::after {
    content: " →";
}

.botao_contato:hover {
    background-color: #5a1715;
}

.img_advogada {
    width: 440px;
    height: 470px;
    background-color: #d3d3d3;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 8px 22px rgba(67, 40, 24, 0.16);
}

.img_advogada::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-top: 45px solid #BB9457;
    border-left: 45px solid transparent;
}

.img_advogada img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.estatisticas {
    min-height: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-top: 38px;
    padding: 20px 0;
    border-top: 2px solid #BB9457;
    border-bottom: 2px solid #BB9457;
}

.estatisticas .linha {
    width: 2px;
    height: 65px;
    margin: 0;
    background-color: #BB9457;
}

.estatistica {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #6F1D1B;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
}

.numero_estatistica {
    font-family: 'Source Serif 4', serif;
    font-size: 34px;
    font-weight: 700;
}


.areas_atuacao {
    background-color: #F7E6C2;
    padding: 60px 8% 70px;
    border-top: 1px solid rgba(111, 29, 27, 0.12);
}

.container_areas {
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;
}

.titulo_areas {
    color: #432818;
    font-family: 'Source Serif 4', serif;
    font-size: 32px;
}

.container_cards {
    display: flex;
    justify-content: center;
    gap: 25px;
}

.cartao {
    width: 250px;
    height: 310px;
    background-color: #FFF9EC;
    border: 1px solid #6F1D1B54;
    border-radius: 4px;
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: 0.2s;
}

.cartao:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(74, 36, 27, 0.12);
}

.icone_cartao {
    width: 90px;
    height: 90px;
    margin-bottom: 25px;
}

.titulo_cartao {
    width: 150px;
    color: #6F1D1B;
    font-family: 'Source Serif 4', serif;
    font-size: 22px;
    line-height: 1.2;
    margin-bottom: 12px;
}

.descricao_cartao {
    color: #000000;
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
}

.link_cartao {
    margin-top: auto;
    color: #6F1D1B;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
}

.link_cartao::after {
    content: " →";
}

.link_cartao:hover {
    color: #432818;
}


@media (max-width: 768px) {

    .sobre {
        min-height: auto;
        padding: 50px 20px;
        flex-direction: column;
        gap: 40px;
    }

    .sobre_texto {
        width: 100%;
        max-width: 500px;
    }

    .sobre_titulo {
        font-size: 32px;
    }

    .sobre_descricao {
        font-size: 15px;
        line-height: 1.7;
    }

    .botao_contato {
        margin-top: 25px;
    }

    .img_advogada {
        width: 100%;
        max-width: 380px;
        height: 420px;
    }

    .estatisticas {
        grid-template-columns: 1fr 1fr;
        min-height: auto;
        gap: 20px;
        margin-top: 35px;
        padding: 20px 0;
    }

    .estatisticas .linha {
        display: none;
    }

    .estatistica {
        margin: 0;
        font-size: 12px;
    }

    .numero_estatistica {
        font-size: 28px;
    }

    .areas_atuacao {
        padding: 50px 20px;
    }

    .titulo_areas {
        font-size: 28px;
    }

    .container_cards {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .cartao {
        width: 100%;
        max-width: 350px;
        height: auto;
        min-height: 290px;
    }

}
```

**O que acontece neste código:**
- **Contraste de Seções**: Alterna o bege claro (`#FFF2D2`) da apresentação biográfica com o tom dourado suave (`#F7E6C2`) da grade de especialidades, emoldurando as métricas com bordas douradas de `2px`.

---

### **3. Página de Contato (`/contato`)**
- **Arquivo**: `src/app/contato/page.js`
- **Estilização**: `src/app/styles/contato.module.css`
- **Estrutura**: Combina um banner hero otimizado com `next/image`, um cartão sobreposto com os canais de atendimento (telefone, e-mail, endereço e redes sociais) e o componente interativo `<Form />`.

```jsx
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/contato.module.css';
import Form from '../components/form/form';

export default function Contato() {
    return (
        <>
            <section className={styles.hero_contato}>
                <Image alt="Livros e símbolo da justiça" height="{485}" priority src="/img/background-contato.png" width="{1920}"/>
                <div className={styles.hero_conteudo}>
                    <h1>Entre em contato!</h1>
                    <p>
                        Entre em contato e agende uma conversa para entender seus direitos e encontrar o melhor caminho para o seu caso.
                    </p>
                </div>
            </section>

            <main>
                <section className={styles.area_contato}>
                    <div className={styles.container_contato}>

                        <div className={styles.informacoes}>
                            <h2>Informações de contato</h2>
                            <p className={styles.descricao}>
                                Precisa de orientação? Estamos prontas para ouvir você.
                            </p>

                            <div className={styles.informacao}>
                                <Link href="#"><Image alt="Telefone" height="{48}" src="/img/Telefone.png" width="{48}"/></Link>
                                <div className={styles.texto_informacao}>
                                    <h3>Telefone</h3>
                                    <p>(11) 9999-9999</p>
                                </div>
                            </div>

                            <div className={styles.informacao}>
                                <Link href="#"><Image alt="E-mail" height="{48}" src="/img/E-mail.png" width="{48}"/></Link>
                                <div className={styles.texto_informacao}>
                                    <h3>Email</h3>
                                    <p>exemplo@contato.com</p>
                                </div>
                            </div>

                            <div className={styles.informacao}>
                                <Link href="#"><Image alt="Endereço" height="{48}" src="/img/Localização.png" width="{48}"/></Link>
                                <div className={styles.texto_informacao}>
                                    <h3>Endereço</h3>
                                    <p>Rua Exemplo, Nº 123</p>
                                </div>
                            </div>

                            <div className={styles.redes}>
                                <h3>Siga minhas redes sociais</h3>
                                <div className={styles.redes_icons}>
                                    <Link href="#"><Image alt="Instagram" height="{31}" src="/img/Instagram.png" width="{31}"/></Link>
                                    <Link href="#"><Image alt="Twitter" height="{31}" src="/img/Twitter.png" width="{31}"/></Link>
                                    <Link href="#"><Image alt="Facebook" height="{31}" src="/img/Facebook (1).png" width="{31}"/></Link>
                                </div>
                            </div>
                        </div>

                        <Form/>

                    </div>
                </section>
            </main>
        </>
    );
}
```

**Estilização (`src/app/styles/contato.module.css`):**

```css
/* Formulário */
.hero_contato {
    width: 100%;
    height: 485px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hero_contato img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
}

.hero_contato::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(40, 23, 17, 0.48);
    z-index: 1;
}

.hero_conteudo {
    position: relative;
    z-index: 2;
    color: white;
    margin-top: -50px;
    padding: 0 20px;
}

.hero_conteudo h1 {
    font-family: 'Source Serif 4', serif;
    font-size: 58px;
    font-weight: 700;
    margin-bottom: 15px;
}

.hero_conteudo p {
    max-width: 750px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6;
}

.area_contato {
    background-color: #FFF2D2;
    padding-bottom: 100px;
}

.container_contato {
    width: 78%;
    max-width: 1100px;
    min-height: 620px;
    margin: -110px auto 0;
    position: relative;
    z-index: 3;
    background-color: #fff1cf;
    border-radius: 14px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.20);
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    padding: 52px 50px;
}

.informacoes {
    padding-right: 45px;
    border-right: 1px solid #8a6257;
}

.informacoes h2 {
    font-family: 'Source Serif 4', serif;
    color: #6F1D1B;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 14px;
}

.descricao {
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 30px;
}

.informacao {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 27px;
}

.informacao img {
    width: 48px;
    height: 48px;
    object-fit: contain;
}

.texto_informacao h3 {
    font-family: 'Source Serif 4', serif;
    color: #6F1D1B;
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 3px;
}

.texto_informacao p {
    font-size: 13px;
}

.redes {
    margin-top: 32px;
}

.redes h3 {
    font-family: 'Source Serif 4', serif;
    color: #6F1D1B;
    font-size: 16px;
    margin-bottom: 12px;
}

.redes_icons {
    display: flex;
    gap: 20px;
}

.redes_icons a {
    width: 31px;
    height: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #6F1D1B;
    color: white;
    transition: 0.3s;
}

.redes_icons a:hover {
    background-color: #5a1715;
    transform: translateY(-2px);
}

.redes_icons img {
    width: 31px;
    height: 31px;
    object-fit: contain;
}

.formulario {
    padding-left: 50px;
}

.formulario h2 {
    font-family: 'Source Serif 4', serif;
    color: #6F1D1B;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 28px;
}

.campo {
    width: 100%;
    height: 43px;
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 0 17px;
    margin-bottom: 23px;
    background-color: white;
    border-radius: 4px;
}

.campo i {
    font-size: 15px;
    color: #222;
    flex-shrink: 0;
}

.campo input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: #333;
}

.campo input::placeholder {
    color: #333;
}

.mensagem {
    height: 100px;
    align-items: flex-start;
    padding-top: 14px;
}

.campo textarea {
    width: 100%;
    height: 75px;
    border: none;
    outline: none;
    resize: none;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    background: transparent;
    color: #333;
}

.campo textarea::placeholder {
    color: #333;
}

.area_botao {
    display: flex;
    justify-content: flex-end;
}

.area_botao button {
    border: none;
    background-color: #6F1D1B;
    color: white;
    padding: 11px 22px;
    border-radius: 5px;
    font-family: 'Source Serif 4', serif;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
}

.area_botao button:hover {
    background-color: #5a1715;
}

/* Responsivo */
@media (max-width: 768px) {
    .hero_contato {
        height: 350px;
    }

    .hero_conteudo {
        margin-top: 0;
    }

    .hero_conteudo h1 {
        font-size: 38px;
    }

    .hero_conteudo p {
        font-size: 14px;
    }

    .container_contato {
        width: 90%;
        margin-top: -70px;
        grid-template-columns: 1fr;
        padding: 35px 25px;
    }

    .informacoes {
        padding-right: 0;
        padding-bottom: 35px;
        border-right: none;
        border-bottom: 1px solid #8a6257;
    }

    .formulario {
        padding-left: 0;
        padding-top: 35px;
    }

    .informacoes h2,
    .formulario h2 {
        font-size: 24px;
    }

    .area_botao {
        justify-content: center;
    }
}
```

**O que acontece neste código:**
- **Cartão Sobreposto (`.container_contato`)**: Usa margem superior negativa (`margin: -110px auto 0`) e `z-index: 3` para sobrepor o cartão de contato ao banner hero, enquanto `.hero_contato::after` aplica uma máscara escura para legibilidade do título.

---

### **4. Página Dinâmica de Casos Resolvidos (`/casos_resolvidos/[slug]`)**
- **Arquivo**: `src/app/casos_resolvidos/[slug]/page.jsx`
- **Estilização**: `src/app/casos_resolvidos/[slug]/caso.module.css`
- **Estrutura**: Captura o parâmetro `slug` da URL, busca os detalhes na API dinâmica (`/api/casos/${slug}`) e permite navegar entre três abas reativas (*Descrição*, *Resultado* e *Feedback do Cliente*).

```jsx
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./caso.module.css";

export default function CasoPage() {
    const { slug } = useParams();

    const [caso, setCaso] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [abaAtiva, setAbaAtiva] = useState("descricao");

    useEffect(() => {
        fetch(`/api/casos/${slug}`)
            .then((res) => (res.ok ? res.json() : null))
            .then((dados) => setCaso(dados))
            .finally(() => setCarregando(false));
    }, [slug]);

    if (carregando) {
        return <div>Carregando...</div>;
    }

    if (!caso) {
        return <div>Conteúdo não encontrado.</div>;
    }

    return (
        <main className={styles.pagina_caso}>

            <section className={styles.caso_container}>

                <div className={styles.caso_imagem}>
                    <img
                        src={caso.img}
                        alt={caso.titulo}
                    />

                    <div className={styles.detalhe_imagem}></div>
                </div>

                <article className={styles.caso_conteudo}>

                    <div className={styles.caso_informacoes}>
                        <span>Casos resolvidos</span>
                        <span className={styles.separador}>•</span>
                        <span>Área jurídica</span>
                    </div>

                    <h1 className={styles.caso_titulo}>
                        {caso.titulo}
                    </h1>

                    <nav className={styles.caso_abas}>
                        <button
                            className={abaAtiva === "descricao" ? styles.aba_ativa : ""}
                            onClick={() => setAbaAtiva("descricao")}
                        >
                            Descrição
                        </button>

                        <button
                            className={abaAtiva === "resultado" ? styles.aba_ativa : ""}
                            onClick={() => setAbaAtiva("resultado")}
                        >
                            Resultado
                        </button>

                        <button
                            className={abaAtiva === "feedback" ? styles.aba_ativa : ""}
                            onClick={() => setAbaAtiva("feedback")}
                        >
                            Feedback do Cliente
                        </button>
                    </nav>

                    <div className={styles.caso_texto}>

                        {abaAtiva === "descricao" && (
                            <section>
                                <h2>Desafio</h2>
                                <p>{caso.desafio}</p>

                                <h2>Estratégia Jurídica</h2>
                                <ul>
                                    {caso.estrategia.map((item) => (
                                        <li key={item.titulo}>
                                            <strong>{item.titulo}:</strong> {item.descricao}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {abaAtiva === "resultado" && (
                            <section>
                                <h2>Resultado alcançado</h2>
                                <p>{caso.resultado}</p>

                                <h2>Impactos</h2>
                                <ul>
                                    {caso.impactos.map((item) => (
                                        <li key={item.titulo}>
                                            <strong>{item.titulo}:</strong> {item.descricao}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {abaAtiva === "feedback" && (
                            <section>
                                <h2>Feedback do Cliente</h2>
                                <p>{caso.feedback}</p>
                            </section>
                        )}

                    </div>

                </article>

            </section>

        </main>
    );
}
```

**Estilização (`src/app/casos_resolvidos/[slug]/caso.module.css`):**

```css
.pagina_caso {
    width: 100%;
    background-color: #fff;
}

/* ESTRUTURA PRINCIPAL */

.caso_container {
    display: grid;
    grid-template-columns: 40% 60%;
    width: 100%;
    min-height: 820px;
}

/* IMAGEM */

.caso_imagem {
    position: relative;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
}

.caso_imagem img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
}

.detalhe_imagem {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    background-color: #6F1D1B;
    clip-path: polygon(0 0, 100% 0, 100% 100%);
}

/* CONTEÚDO */

.caso_conteudo {
    background-color: #FFF2D2;
    padding: 55px 8%;
    color: #432818;
}

.caso_informacoes {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #6F1D1B;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    margin-bottom: 15px;
}

.separador {
    color: #BB9457;
}

.caso_titulo {
    font-family: "Source Serif 4", serif;
    font-size: 30px;
    line-height: 1.2;
    color: #432818;
    margin-bottom: 25px;
}

/* ABAS */

.caso_abas {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    border-bottom: 1px solid #BB9457;
    margin-bottom: 28px;
}

.caso_abas button {
    position: relative;
    background: none;
    border: none;
    padding: 10px 3px 12px;
    color: #BB9457;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s;
}

.caso_abas button:hover {
    color: #6F1D1B;
}

.caso_abas button.aba_ativa {
    color: #6F1D1B;
}

.caso_abas button.aba_ativa::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #6F1D1B;
}

/* TEXTOS */

.caso_texto {
    font-family: "Poppins", sans-serif;
    color: #25211e;
    font-size: 15px;
    line-height: 1.6;
    text-align: justify;
}

.caso_texto h2 {
    position: relative;
    display: table;
    font-family: "Source Serif 4", serif;
    font-size: 20px;
    color: #6F1D1B;
    margin: 25px 0 15px;
}

.caso_texto h2::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 65%;
    height: 1px;
    background-color: #BB9457;
}

.caso_texto p {
    margin-bottom: 12px;
}

.caso_texto ul {
    padding-left: 17px;
    margin-top: 15px;
}

.caso_texto li {
    padding-left: 0;
    margin-bottom: 20px;
}

.caso_texto li::marker {
    color: #6F1D1B;
}

.caso_texto strong {
    color: #6F1D1B;
    font-weight: 600;
}

/* RESPONSIVIDADE */

@media (max-width: 900px) {
    .caso_container {
        grid-template-columns: 38% 62%;
    }

    .caso_conteudo {
        padding: 40px 6%;
    }

    .caso_titulo {
        font-size: 26px;
    }

    .caso_abas {
        gap: 8px;
    }

    .caso_abas button {
        font-size: 13px;
    }
}

@media (max-width: 768px) {
    .caso_container {
        display: flex;
        flex-direction: column;
    }

    .caso_imagem {
        height: 400px;
        min-height: auto;
    }

    .caso_imagem img {
        position: absolute;
    }

    .caso_conteudo {
        padding: 40px 25px 55px;
    }

    .caso_titulo {
        font-size: 27px;
    }

    .caso_abas {
        overflow-x: auto;
        justify-content: flex-start;
        gap: 25px;
    }

    .caso_abas button {
        flex-shrink: 0;
    }

    .caso_texto {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .caso_imagem {
        height: 300px;
    }

    .caso_conteudo {
        padding: 30px 20px 45px;
    }

    .caso_titulo {
        font-size: 24px;
    }
}
```

**O que acontece neste código:**
- **`useParams()` e Consumo Dinâmico**: Captura o `slug` da rota, consulta `/api/casos/${slug}` via `useEffect`, trata estados de carregamento/erro (`404`) e alterna entre as abas (`abaAtiva`) percorrendo `caso.estrategia` e `caso.impactos` com `.map()`.
- **Layout Assimétrico (`40% / 60%`)**: Divide a tela entre a fotografia (com triângulo decorativo via `clip-path: polygon(...)`) e a área de leitura em bege (`#FFF2D2`), habilitando rolagem horizontal nas abas em telas menores que `768px`.

---

## ▶️ Como Executar o Projeto Localmente

Siga os comandos abaixo no terminal dentro da pasta `projeto_borboleta` para rodar a aplicação em ambiente de desenvolvimento:

```bash
# 1. Instalar as dependências do projeto
npm install

# 2. Iniciar o servidor de desenvolvimento do Next.js
npm run dev

# 3. Acessar no navegador:
# Página Inicial:        http://localhost:3000
# Página Sobre:          http://localhost:3000/sobre
# Página de Contato:     http://localhost:3000/contato
# Exemplo de Caso:       http://localhost:3000/casos_resolvidos/quebra-de-contrato
# API de Casos (GET):    http://localhost:3000/api/casos
```
