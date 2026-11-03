# 🦋 Projeto 2 (Next.js & React)

> O Projeto Borboleta representa a evolução do Projeto Lagarta, onde irá ser migrado a aplicação da estrutura estática em HTML/CSS para uma estrutura baseada em componentização, ao reutilizar componentes, com React e o framework Next.js.

## ⚖️ Portfólio Jurídico
Site institucional e portfólio profissional desenvolvido para uma advogada em início de carreira, com o objetivo de divulgar seus serviços, construir presença digital e oferecer conteúdos informativos sobre direitos.

## 🚀 Objetivos
Divulgação Profissional: Apresentar a trajetória e as áreas de atuação da advogada.
Atendimento Fácil: Facilitar o contato de clientes via WhatsApp e canais diretos de agendamento.

## 🏛️ Caráter Extensionista
O projeto utiliza a tecnologia como instrumento de apoio ao início da carreira profissional da advogada e, ao mesmo tempo, como meio de aproximar os serviços jurídicos da comunidade. A proposta parte da compreensão de que o acesso à Justiça também envolve o acesso à informação e ao conhecimento sobre direitos, buscando reduzir as barreiras impostas pela complexidade da linguagem jurídica.

Por meio do site, conceitos e informações jurídicas são apresentados de forma clara e acessível, criando um canal de comunicação mais próximo entre a profissional e a sociedade. Dessa forma, a plataforma não se limita à divulgação dos serviços, mas contribui para a democratização do conhecimento jurídico e para o fortalecimento da autonomia dos cidadãos na compreensão de seus direitos e na busca por orientação adequada.

Nesse sentido, o caráter extensionista do projeto está na integração entre tecnologia, conhecimento jurídico e demandas da comunidade, utilizando os recursos digitais como ferramentas de comunicação, inclusão e transformação social.

## 💡 Processo de Ideação
A concepção desta nova versão partiu da necessidade de transformar um site estático em uma aplicação web reativa, dinâmica e escalável.

**Público-Alvo**: Clientes em potencial que buscam segurança jurídica, além de cidadãos interessados em tirar dúvidas rápidas sobre direitos e deveres.

**Experiência do Usuário (UX/UI)**:
Priorizou-se uma navegação fluida, intuitiva e responsiva (adaptada para dispositivos móveis e desktops).
Escolha de uma identidade visual sóbria, elegante e de alta confiabilidade, mantendo a paleta de cores institucional baseada em tons de bordô e bege.

**Estratégia Tecnológica**: Planejamento da arquitetura em componentes (separação de cabeçalhos, rodapés, cards de serviços e seções informativas) e estruturação de rotas estáticas e dinâmicas utilizando o Next.js.

## 🎨 Protótipo e Planejamento Visual

<img width="30%" height="30%" alt="MainPage" src="https://github.com/user-attachments/assets/e8bcec00-b412-436c-a20b-dd706a2e606a" />
<img width="30%" height="30%" alt="ContactPage" src="https://github.com/user-attachments/assets/17554874-d309-4182-b9d8-e8a6331b4358" />
<img width="30%" height="30%" alt="AboutPage" src="https://github.com/user-attachments/assets/6fd418a0-7fb8-4e34-9803-83faea2546d2" />
<img width="30%" height="30%" alt="AboutPage (1)" src="https://github.com/user-attachments/assets/9ee62ef4-cc1e-4c81-9305-09be4d599543" />

---
  
🛠️ **Tecnologias Escolhidas**
- **Next.js**: Framework React para otimização de rotas e renderização.
- **CSS Modules / Globals.css**: Estilização modularizada e limpa.
- **API Routes internas do Next.js**: Utilização de arquivos JSON estáticos (mockados) para simular um banco de dados consumido via fetch e manipulado com o hook useEffect no cliente.
- **Gerenciamento de Estado Nativo**: Uso exclusivo de useState e useEffect para controle de interatividade simples na interface.

---

## 💻 Passo a Passo: Inicialização e Estruturação do Projeto

### 1. Criação do Projeto
Para iniciar o projeto utilizando o ecossistema do Node.js, executamos o comando de criação do Next.js no terminal:
```bash
npx create-next-app@latest projeto_borboleta
```

_(Durante a configuração inicial, optou-se por utilizar a pasta src/ e o App Router para melhor organização das rotas)._

### 2. Organização das Pastas e Rotas
O projeto foi inicializado utilizando o ecossistema do Next.js, adotando uma organização prática e didática na pasta src/app/ onde cada página do portfólio possui o seu próprio arquivo JavaScript e seu arquivo de estilo modularizado correspondente.

#### 🛠️ Arquivos Criados no Projeto:
**Página Inicial**

_inicio.js / inicio.module.css_ (ou a raiz page.js / page.module.css):
Porta de entrada institucional, destacando a identidade visual da advogada em tons de bordô e bege, as áreas de atuação e o acesso rápido aos canais de comunicação.

---

**Página Sobre**

_sobre.js / sobre.module.css_:
Voltada para a construção da presença digital, apresentando a trajetória profissional, formação e o compromisso extensionista da advogada na democratização do acesso à informação jurídica.

---

**Página de Contato**

_contato.js / contato.module.css_:
Destinada a facilitar o atendimento direto de clientes através de links para o WhatsApp e canais de agendamento rápido.

---

**Layout Global**

_layout.js_:
Define a estrutura compartilhada e o encapsulamento padrão da aplicação em Next.js.

---

## 🧩 Componentização

### **1. Componente Header (header.jsx)**
Gerencia o cabeçalho global e a abertura do menu responsivo via estado nativo (useState).

```
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.menu}>
                <Link href="/" className={styles.logo}>
                    <img src="/img/logo.png" alt="Logo do escritório" />
                </Link>

                <ul className={`${styles.nav_links} ${menuAberto ? styles.ativo : ""}`}>
                    <li>
                        <Link href="/" onClick={() => setMenuAberto(false)}>
                            Início
                        </Link>
                    </li>

                    <li>
                        <Link href="/sobre" onClick={() => setMenuAberto(false)}>
                            Sobre
                        </Link>
                    </li>

                    <li>
                        <Link href="/contato" onClick={() => setMenuAberto(false)}>
                            Contato
                        </Link>
                    </li>
                </ul>

                <Link href="/contato" className={styles.botao_consulta}>
                    Agende uma consulta
                </Link>

                <button
                    className={styles.menu_hamburguer}
                    onClick={() => setMenuAberto(!menuAberto)}
                    aria-label="Abrir menu"
                >
                    ☰
                </button>
            </nav>
        </header>
    );
}
```

### **2. Componente Footer (footer.jsx)**
Rodapé estruturado contendo links institucionais, dados de contato e redes sociais.

```
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
                    <Link href="#" className={styles.btn_maroon}>
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

### **3. Componente Carrossel (carrossel.js)**
Componente reativo para estatísticas numéricas animadas.

```
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../../styles/inicio.module.css";

const casos = [
    {
        titulo: "Quebra de Contrato",
        texto: "Empresa com quebra de contrato sem aviso prévio. Atuação ágil para reaver valores.",
        img: "/img/Devino antreprenor, impreuna este simplu! 1.png",
    },
    {
        titulo: "Contratos sem Revisão",
        texto: "Contrato sem revisão prévia gera prejuízos financeiros e riscos ao negócio.",
        img: "/img/Command Your Contracts, Command Your Future 1.png",
    },
    {
        titulo: "Direitos Trabalhistas",
        texto: "Demitida sem justa causa e sem direitos? Buscamos a devida reparação na justiça.",
        img: "/img/transferir (6) 1.png",
    },
    {
        titulo: "Inventário e Partilha",
        texto: "Problemas no inventário familiar? Orientação especializada agiliza a partilha.",
        img: "/img/Devino antreprenor, impreuna este simplu! 1.png",
    },
    {
        titulo: "Defesa do Consumidor",
        texto: "Consumidor lesado por propaganda enganosa tem direito à restituição e danos.",
        img: "/img/Command Your Contracts, Command Your Future 1.png",
    },
    {
        titulo: "Cobrança Indevida",
        texto: "Empresa sofreu cobrança indevida? Atuação estratégica para blindar o patrimônio.",
        img: "/img/transferir (6) 1.png",
    },
];

const grupos = [];
for (let i = 0; i < casos.length; i += 3) {
    grupos.push(casos.slice(i, i + 3));
}

export default function Carrossel() {
    const grupoRef = useRef(null);
    const [indice, setIndice] = useState(0);

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
    }, [indice]);

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
        setIndice((atual) => (atual < limite ? atual + 1 : atual));
    }

    function anterior() {
        setIndice((atual) => (atual > 0 ? atual - 1 : atual));
    }

    return (
        <div className={styles["carrossel-area"]}>
            <div className={styles["carrossel-container"]}>
                <div className={styles["carrossel-grupo"]} ref={grupoRef}>
                    {grupos.map((grupo, i) => (
                        <div className={styles["grupo-cards"]} key={i}>
                            {grupo.map((caso) => (
                                <article
                                    className={styles.caso_card}
                                    data-card
                                    key={caso.titulo}
                                >
                                    <img
                                        className={styles.caso_img}
                                        src={caso.img}
                                        alt="Caso"
                                    />
                                    <div className={styles.caso_conteudo}>
                                        <h3 className={styles.caso_titulo}>
                                            {caso.titulo}
                                        </h3>
                                        <p className={styles.caso_texto}>
                                            {caso.texto}
                                        </p>
                                        <a href="#" className={styles.card_link}>
                                            Saiba mais
                                        </a>
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

### **4. Componente Contador (contador.js)**
Componente reativo para estatísticas numéricas animadas.

```
"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/inicio.module.css";

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

---

##  Estrutura das Páginas e Implementação
Utilizamos a organização de rotas no Next.js, onde a página inicial se localiza diretamente na raiz (page.js) e as demais páginas estruturais (/sobre e /contato) utilizam pastas próprias, além da pasta de estilização (/styles) onde se localizam os arquivos de estilo personalizados via CSS Modules.

### 1. Página Inicial / Home (/)
- Arquivo: src/app/page.js
- Estilização: src/app/styles/inicio.module.css
- É a principal porta de entrada institucional do portfólio. A sua estrutura compõe:
-- Um banner principal (hero) de alto impacto visual destacando o compromisso jurídico.
-- Uma barra de estatísticas dinâmica e reativa que utiliza o componente Contador (com animações incrementais via hooks) para exibir anos de carreira, clientes atendidos e casos resolvidos.
-- Uma grelha com as principais Áreas de Atuação do escritório (Defesa do Consumidor, Direito da Família, Direitos Trabalhistas e Legislação Civil).
-- Uma secção institucional sobre a advogada com checklist de diferenciais e um Carrossel interativo de últimos casos de sucesso.

```
import styles from "./styles/inicio.module.css";
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

                        <a
                            href="/contato"
                            className={`${styles.botao_contato} ${styles.botao_contato_principal}`}
                        >
                            Contato
                        </a>
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
                            <Contador valorFinal={5} />
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
                            <Contador valorFinal={50} />
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
                            <Contador valorFinal={15} />
                            <span className={styles.rotulo_estatistica}>
                                Casos Resolvidos
                            </span>
                        </p>
                    </li>
                </ul>
            </section>

            <section className={styles.areas_atuacao}>
                <article className={styles.container_areas}>
                    <h1 className={styles.titulo_areas}>Áreas de Atuação</h1>

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
                            <a href="#" className={styles.link_cartao}>
                                Saiba mais
                            </a>
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
                            <a href="#" className={styles.link_cartao}>
                                Saiba mais
                            </a>
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
                            <a href="#" className={styles.link_cartao}>
                                Saiba mais
                            </a>
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
                            <a href="#" className={styles.link_cartao}>
                                Saiba mais
                            </a>
                        </article>
                    </div>
                </article>
            </section>

            <section className={styles.sobre}>
                <figure className={styles.img_advogada}>
                    <img src="/img/advogada.jpeg" alt="Foto da advogada" />
                </figure>

                <article className={styles.sobre_texto}>
                    <h2 className={styles.sobre_titulo}>Sobre a Doutora</h2>

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

                    <a
                        href="/contato"
                        className={`${styles.botao_contato} ${styles.botao_contato_sobre}`}
                    >
                        Contato
                    </a>
                </article>
            </section>

            <section className={styles.noticias}>
                <div className={styles.container_noticias}>
                    <h2 className={styles.noticias_titulo}>Últimos Casos</h2>

                    <div className={styles.linha}></div>

                    <Carrossel />
                </div>
            </section>
        </main>
    );
}
```

### 2. Página Sobre (/sobre)
- Arquivo: src/app/sobre/page.js
- Estilização: src/app/styles/sobre.module.css
- Desenvolvida para consolidar a presença digital, credibilidade e a vertente extensionista da profissional. Apresenta detalhadamente a trajetória da advogada, os seus valores éticos, o compromisso social em democratizar o acesso à informação jurídica e cards informativos com as especialidades jurídicas oferecidas à comunidade.

```

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
                        <div className={styles.linha}></div>

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

                        <div className={styles.linha}></div>
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

### 3. Página de Contato (/contato)
- Arquivo: src/app/contato/page.js
- Estilização: src/app/contato.module.css
- Projetada para estreitar os canais de comunicação com os clientes. Contém informações estruturadas de atendimento (telefone, e-mail e endereço físico), ícones de redirecionamento para redes sociais e um formulário interativo de agendamento de consultas.

```
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contato() {
  return (
    <>
      <Header />

      <section className="hero_contato w-full h-[350px] md:h-[485px] relative overflow-hidden flex items-center justify-center text-center">
        <Image 
          src="/img/background-contato.png" 
          alt="Livros e símbolo da justiça" 
          fill 
          priority 
          className="object-cover object-center absolute z-0" 
        />
        <div className="absolute inset-0 bg-[#281711]/[0.48] z-1" />
        <div className="hero_conteudo relative z-2 text-white px-5 mt-0 md:-mt-[50px]">
          <h1 className="font-['Source_Serif_4'] text-[38px] md:text-[58px] font-bold mb-[15px]">Entre em contato!</h1>
          <p className="max-w-[750px] text-[14px] md:text-[16px] font-medium leading-[1.6] mx-auto">
            Entre em contato e agende uma conversa para entender seus direitos e encontrar o melhor caminho para o seu caso.
          </p>
        </div>
      </section>

      <main>
        <section className="area-contato bg-[#FFF2D2] pb-[100px]">
          <div className="container-contato w-[90%] md:w-[78%] max-w-[1100px] min-h-[620px] -mt-[70px] md:-mt-[110px] mx-auto relative z-3 bg-[#fff1cf] rounded-[14px] shadow-[0_3px_8px_rgba(0,0,0,0.20)] grid grid-cols-1 md:grid-cols-[1fr_1.25fr] p-[35px_25px] md:p-[52px_50px]">
            
            <div className="informacoes pr-0 md:pr-[45px] pb-[35px] md:pb-0 border-b md:border-b-0 md:border-r border-[#8a6257]">
              <h2 className="font-['Source_Serif_4'] text-[#6F1D1B] text-[24px] md:text-[28px] font-bold leading-[1.25] mb-[14px]">Informações de contato</h2>
              <p className="descricao text-[13px] leading-[1.5] mb-[30px]">
                Precisa de orientação? Estamos prontas para ouvir você.
              </p>

              <div className="informacao flex items-center gap-[15px] mb-[27px]">
                <Link href="#"><Image src="/img/Telefone.png" alt="Telefone" width={48} height={48} className="w-[48px] h-[48px] object-contain" /></Link>
                <div className="texto-informacao">
                  <h3 className="font-['Source_Serif_4'] text-[#6F1D1B] text-[17px] font-normal mb-[3px]">Telefone</h3>
                  <p className="text-[13px]">(11) 9999-9999</p>
                </div>
              </div>

              <div className="informacao flex items-center gap-[15px] mb-[27px]">
                <Link href="#"><Image src="/img/E-mail.png" alt="E-mail" width={48} height={48} className="w-[48px] h-[48px] object-contain" /></Link>
                <div className="texto-informacao">
                  <h3 className="font-['Source_Serif_4'] text-[#6F1D1B] text-[17px] font-normal mb-[3px]">Email</h3>
                  <p className="text-[13px]">exemplo@contato.com</p>
                </div>
              </div>

              <div className="informacao flex items-center gap-[15px] mb-[27px]">
                <Link href="#"><Image src="/img/Localização.png" alt="Endereço" width={48} height={48} className="w-[48px] h-[48px] object-contain" /></Link>
                <div className="texto-informacao">
                  <h3 className="font-['Source_Serif_4'] text-[#6F1D1B] text-[17px] font-normal mb-[3px]">Endereço</h3>
                  <p className="text-[13px]">Rua Exemplo, Nº 123</p>
                </div>
              </div>

              <div className="redes mt-[32px]">
                <h3 className="font-['Source_Serif_4'] text-[#6F1D1B] text-[16px] mb-[12px]">Siga minhas redes sociais</h3>
                <div className="redes-icons flex gap-[20px]">
                  <Link href="#" className="w-[31px] h-[31px] flex items-center justify-center rounded-full bg-[#6F1D1B] text-white hover:bg-[#5a1715] hover:-translate-y-0.5 transition-all"><Image src="/img/Instagram.png" alt="Instagram" width={31} height={31} className="w-[31px] h-[31px] object-contain" /></Link>
                  <Link href="#" className="w-[31px] h-[31px] flex items-center justify-center rounded-full bg-[#6F1D1B] text-white hover:bg-[#5a1715] hover:-translate-y-0.5 transition-all"><Image src="/img/Twitter.png" alt="Twitter" width={31} height={31} className="w-[31px] h-[31px] object-contain" /></Link>
                  <Link href="#" className="w-[31px] h-[31px] flex items-center justify-center rounded-full bg-[#6F1D1B] text-white hover:bg-[#5a1715] hover:-translate-y-0.5 transition-all"><Image src="/img/Facebook (1).png" alt="Facebook" width={31} height={31} className="w-[31px] h-[31px] object-contain" /></Link>
                </div>
              </div>
            </div>

            <div className="formulario pl-0 md:pl-[50px] pt-[35px] md:pt-0">
              <h2 className="font-['Source_Serif_4'] text-[#6F1D1B] text-[24px] md:text-[28px] font-bold mb-[28px]">Agende uma consulta</h2>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="campo w-full h-[43px] flex items-center gap-[13px] px-[17px] mb-[23px] bg-white rounded-[4px]">
                  <i className="fa-regular fa-user text-[15px] text-[#222] shrink-0"></i>
                  <input type="text" name="nome" placeholder="Nome" required className="w-full h-full border-none outline-none bg-transparent font-['Poppins'] text-[13px] text-[#333] placeholder:text-[#333]" />
                </div>

                <div className="campo w-full h-[43px] flex items-center gap-[13px] px-[17px] mb-[23px] bg-white rounded-[4px]">
                  <i className="fa-regular fa-envelope text-[15px] text-[#222] shrink-0"></i>
                  <input type="email" name="email" placeholder="Email" required className="w-full h-full border-none outline-none bg-transparent font-['Poppins'] text-[13px] text-[#333] placeholder:text-[#333]" />
                </div>

                <div className="campo w-full h-[43px] flex items-center gap-[13px] px-[17px] mb-[23px] bg-white rounded-[4px]">
                  <i className="fa-solid fa-phone text-[15px] text-[#222] shrink-0"></i>
                  <input type="tel" name="telefone" placeholder="Telefone" className="w-full h-full border-none outline-none bg-transparent font-['Poppins'] text-[13px] text-[#333] placeholder:text-[#333]" />
                </div>

                <div className="campo w-full h-[43px] flex items-center gap-[13px] px-[17px] mb-[23px] bg-white rounded-[4px]">
                  <i className="fa-regular fa-calendar text-[15px] text-[#222] shrink-0"></i>
                  <input type="date" name="data" className="w-full h-full border-none outline-none bg-transparent font-['Poppins'] text-[13px] text-[#333] placeholder:text-[#333]" />
                </div>

                <div className="campo mensagem w-full h-[100px] flex items-start gap-[13px] px-[17px] pt-[14px] mb-[23px] bg-white rounded-[4px]">
                  <i className="fa-regular fa-comment text-[15px] text-[#222] shrink-0"></i>
                  <textarea name="mensagem" placeholder="Mensagem" className="w-full h-[75px] border-none outline-none resize-none font-['Poppins'] text-[13px] bg-transparent text-[#333] placeholder:text-[#333]"></textarea>
                </div>

                <div className="area-botao flex justify-center md:justify-end">
                  <button type="submit" className="border-none bg-[#6F1D1B] text-white py-[11px] px-[22px] rounded-[5px] font-['Source_Serif_4'] font-bold cursor-pointer transition-all hover:bg-[#5a1715]">
                    Enviar
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
```
