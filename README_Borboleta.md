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

🧩 **Estrutura de Componentes Planejada:**
- **Navbar e Footer** (componentes globais).
- **HeroSection** (destaque visual na página inicial).
- **Cards** (exibição dinâmica das áreas de atuação).
- **ArticleView** (para a parte de conteúdos informativos).

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

_inicio.js / inicio.module.css_ (ou a raiz page.js / page.module.css)
Porta de entrada institucional, destacando a identidade visual da advogada em tons de bordô e bege, as áreas de atuação e o acesso rápido aos canais de comunicação.

**Página Sobre**

_sobre.js / sobre.module.css_
Voltada para a construção da presença digital, apresentando a trajetória profissional, formação e o compromisso extensionista da advogada na democratização do acesso à informação jurídica.

**Página de Contato**

_contato.js / contato.module.css_
Destinada a facilitar o atendimento direto de clientes através de links para o WhatsApp e canais de agendamento rápido.

**Layout Global**

_layout.js_
Define a estrutura compartilhada e o encapsulamento padrão da aplicação em Next.js.
