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

**1. Componente Header (header.jsx)**
Gerencia o cabeçalho global e a abertura do menu responsivo via estado nativo (useState).

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

**2. Componente Footer (footer.jsx)**
Rodapé estruturado contendo links institucionais, dados de contato e redes sociais.

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

**3. Componente Carrossel (carrossel.js)**
Componente reativo para estatísticas numéricas animadas.

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

**4. Componente Contador (contador.js)**
Componente reativo para estatísticas numéricas animadas.

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
