# ⚖️ Portfólio Jurídico

Site institucional e portfólio profissional desenvolvido para uma advogada em início de carreira, com o objetivo de divulgar seus serviços, construir presença digital e oferecer conteúdos informativos sobre direitos.

---

## 🚀 Objetivos
- **Divulgação Profissional:** Apresentar a trajetória e as áreas de atuação da advogada.
- **Atendimento Fácil:** Facilitar o contato de clientes via WhatsApp e canais diretos de agendamento.

---

## 🏛️ Caráter Extensionista 
O projeto utiliza a tecnologia para apoiar o início de carreira da profissional e aproximar os serviços jurídicos da comunidade. O site facilita o acesso direto à advogada e traduz conceitos legais para uma linguagem acessível e clara.

---

## 💡 Processo de Ideação 
Partindo da iniciativa de criar um site para apoiar uma advogada em início de carreira, o objetivo central foi alinhar um design moderno e confiável (utilizando uma paleta sóbria em tons de bordô e bege) a uma experiência de navegação intuitiva e fluida.

---

## 🎨 Protótipos

### Protótipo Inicial (Esboço e Planejamento)
<p>
  <img src="20260825_202058.jpg" width="250" alt="Esboço inicial do projeto">
  <img src="20260825_203114.jpg" width="250" alt="Planejamento de telas no Drive">
</p>

### Protótipo de Alta
<p>
  <img src="prototipo-alta.jpg" width="250" alt="Design final da interface">
</p>

---

## Tutorial e Estrutura Home

A página principal (`index.html`) foi estruturada utilizando **HTML5 Semântico**, garantindo acessibilidade, facilidade de manutenção e boa indexação (SEO).

### Tags HTML Utilizadas
* `<header>` e `<nav>`: Organização do menu superior e links de navegação principal.
* `<main>`: Agrupamento de todo o conteúdo central e exclusivo da página.
* `<section>`: Divisão das seções temáticas da página (Hero, Estatísticas, Áreas de Atuação, Sobre, Últimos Casos).
* `<article>`: Utilizado para blocos autônomos e reutilizáveis, como o bloco principal, cards de áreas de atuação e de casos.
* `<figure>` e `<img>`: Exibição semântica de imagens acompanhadas do atributo `alt` para acessibilidade.
* `<ul>` e `<li>`: Organização de listas de links de navegação, indicadores de estatísticas e diferenciais.
* `<address>`: Elemento semântico para exibição dos dados de contato diretos no rodapé.
* `<footer>`: Rodapé da página contendo mapa do site, informações institucionais e redes sociais.

---

### Trechos Resumidos do Código

#### 1. Cabeçalho e Menu de Navegação (`<header>` e `<nav>`)
```html
<header>
  <nav class="menu">
    <a href="#" class="logo">Logo</a>

    <ul class="nav_links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Contato</a></li>
      <li><a href="#">Sobre</a></li>
    </ul>

    <a href="#" class="botao_consulta">Consulta</a>
  </nav>
</header>
```

#### 2. Seção Principal / Hero (`<main>`, `<section>`, `<article>`)
```html
<main>
  <section class="principal">
    <article class="container_principal">
      <div class="principal_texto">
        <h1 class="titulo_principal">Seu <span>direito</span> nossa causa</h1>
        <p class="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <a href="#" class="botao_contato">Contato</a>
      </div>
      <figure class="imagem_estatua">
        <img src="" alt="Estátua da Justiça">
      </figure>
    </article>
  </section>
</main>
```

#### 3. Cards de Áreas de Atuação (`<article>`)
```html
<section class="areas-atuacao">
  <article class="cartao">
    <img src="img/Consumidor.png" alt="Ícone Defesa do Consumidor" class="icone-cartao">
    <h2 class="titulo-cartao">Defesa do Consumidor</h2>
    <p class="descricao-cartao">Defesa dos seus direitos nas relações de consumo.</p>
    <a href="#" class="link-cartao">Saiba mais &rarr;</a>
  </article>
</section>
```

#### 4. Rodapé e Endereço (`<footer>` e `<address>`)
```html
<footer>
  <section class="container_footer">
    <!-- Navegação e Institucional -->
    <address class="footer_info">
      <h2>Contato</h2>
      <p>(11) 9999-9999</p>
      <p>contato@exemplo.com</p>
      <p>São Paulo, SP</p>
    </address>
  </section>
</footer>
```
## Tutorial e Estrutura Sobre

A página Sobre (`sobre.html`) foi estruturada utilizando **HTML5 Semântico**, garantindo uma organização clara do conteúdo, acessibilidade, facilidade de manutenção e boa indexação (SEO).

### Tags HTML Utilizadas

- `<header>` e `<nav>`: Organização do cabeçalho e do menu principal de navegação.
- `<main>`: Agrupamento de todo o conteúdo principal e exclusivo da página.
- `<section>`: Divisão das áreas temáticas da página, como apresentação da advogada, estatísticas e áreas de atuação.
- `<article>`: Utilizado para conteúdos independentes, como informações sobre a advogada, estatísticas e cards das áreas de atuação.
- `<figure>` e `<img>`: Exibição semântica da imagem da advogada e dos ícones das áreas de atuação, utilizando o atributo `alt` para acessibilidade.
- `<h1>` e `<h2>`: Organização hierárquica dos títulos e subtítulos da página.
- `<p>`: Apresentação dos textos descritivos e informações institucionais.
- `<strong>`: Destaque dos valores das estatísticas, como quantidade de casos resolvidos e anos de carreira.
- `<span>`: Complementação das informações apresentadas nas estatísticas.
- `<ul>` e `<li>`: Organização das listas de links de navegação do cabeçalho e rodapé.
- `<address>`: Exibição semântica dos dados de contato, como telefone, e-mail e localização.
- `<footer>`: Rodapé da página contendo informações institucionais, navegação, contato, atendimento e redes sociais.

---

### Trechos Resumidos do Código

#### 1. Cabeçalho e Menu de Navegação (`<header>` e `<nav>`)

O cabeçalho contém o logotipo, os links principais de navegação e o botão para consulta.

```html
<header>
    <nav class="menu">
        <a href="#" class="logo">Logo</a>

        <ul class="nav_links">
            <li><a href="inicio.html">Home</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="sobre.html">Sobre</a></li>
        </ul>

        <a href="#" class="botao_consulta">Consulta</a>
    </nav>
</header>
```

**2. Sessão Principal: sobre a advogada**

```html
<main>
    <section class="sobre">
        <article class="sobre_texto">
            <h1 class="sobre_titulo">Sobre a Dr. Tal</h1>

            <p class="sobre_descricao">
                Atuação jurídica pautada pela ética, dedicação e
                compromisso com cada cliente. Advogada Tal oferece
                orientação personalizada e soluções estratégicas para
                proteger seus direitos e interesses.
            </p>

            <a href="#" class="botao_contato">Contato</a>
        </article>
    </section>
</main>

<section class="estatisticas">

    <article class="estatistica">
        <strong>+100</strong>
        <span>Casos resolvidos</span>
    </article>

    <article class="estatistica">
        <strong>5</strong>
        <span>Anos de carreira</span>
    </article>

</section>
``` 

## Tutorial e Estrutura Contato

A página de Contato (`contato.html`) foi estruturada utilizando **HTML5 Semântico**, focando na usabilidade e interatividade para facilitar o agendamento de consultas e o acesso rápido aos canais de atendimento da advogada, garantindo também acessibilidade e boa indexação (SEO).

### Tags HTML Utilizadas

* `<header>` e `<nav>`: Organização do cabeçalho e dos links de navegação principal.
* `<section>`: Divisão das grandes áreas da página, como o banner introdutório (Hero) e a sessão principal de contato.
* `<main>`: Agrupamento do conteúdo central, englobando as informações de atendimento e o formulário.
* `<h1>`, `<h2>` e `<h3>`: Organização hierárquica dos títulos, facilitando a leitura estrutural da página.
* `<img>`: Exibição de imagens de fundo e ícones de contato/redes sociais, acompanhadas do atributo `alt` para acessibilidade.
* `<form>`, `<input>`, `<textarea>` e `<button>`: Elementos estruturais essenciais para a criação do formulário interativo de agendamento, permitindo a coleta de dados do usuário (nome, e-mail, telefone, data e mensagem).
* `<i>`: Utilizado em conjunto com a biblioteca FontAwesome para a inserção de ícones vetoriais nos campos do formulário.
* `<address>`: Elemento semântico para exibição oficial dos dados de contato (telefone, e-mail e localização).
* `<footer>`: Rodapé da página contendo logotipo, mapa do site, informações institucionais e links para redes sociais.

---

### Trechos Resumidos do Código

#### 1. Banner Introdutório / Hero (`<section>`)
O banner apresenta uma imagem de fundo imersiva e a chamada principal para a ação de contato.

```html
<section class="hero_contato">
    <img src="img/background-contato.png" alt="Livros e símbolo da justiça">
    <div class="hero_conteudo">
        <h1>Entre em contato!</h1>
        <p>
            Entre em contato e agende uma conversa para entender seus direitos e
            encontrar o melhor caminho para o seu caso.
        </p>
    </div>
</section>
```

#### 2. Informações de Atendimento (`<main>` e `<div>`)
Bloco que agrupa os canais diretos de comunicação e os links para as redes sociais da advogada.

```html
<main>
    <section class="area-contato">
        <div class="container-contato">
            <div class="informacoes">
                <h2>Informações de contato</h2>
                <p class="descricao">Precisa de orientação? Estamos prontas para ouvir você.</p>

                <div class="informacao">
                    <a href="#"><img src="img/Telefone.png" alt="Telefone"></a>
                    <div class="texto-informacao">
                        <h3>Telefone</h3>
                        <p>(11) 9999-9999</p>
                    </div>
                </div>
                
                <!-- Outras informações e redes sociais omitidas para brevidade -->
            </div>
```

#### 3. Formulário de Agendamento (`<form>`)
Estrutura semântica responsável por captar os dados do cliente para a marcação de consultas, utilizando ícones para melhor UX.

```html
            <div class="formulario">
                <h2>Agende uma consulta</h2>

                <form action="">
                    <div class="campo">
                        <i class="fa-regular fa-user"></i>
                        <input type="text" name="nome" placeholder="Nome" required>
                    </div>

                    <div class="campo">
                        <i class="fa-regular fa-envelope"></i>
                        <input type="email" name="email" placeholder="Email" required>
                    </div>

                    <!-- Campos de telefone e data omitidos para brevidade -->

                    <div class="campo mensagem">
                        <i class="fa-regular fa-comment"></i>
                        <textarea name="mensagem" placeholder="Mensagem"></textarea>
                    </div>

                    <div class="area-botao">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</main>
```

#### 4. Rodapé da Página (`<footer>` e `<address>`)
O rodapé unifica a identidade visual e os contatos, mantendo o padrão das páginas anteriores.

```html
<footer>
    <section class="container_footer">
        <!-- Logo e Navegação -->
        
        <address class="footer_info footer_contato">
            <h2>Contato</h2>

            <div class="contato_item">
                <img src="img/Vector (2).png" alt="Telefone">
                <p>(11) 9999-9999</p>
            </div>
            <!-- E-mail e Endereço -->
        </address>

        <article class="footer_info footer_atendimento">
            <h2>Atendimento</h2>
            <p>Atendimento online e presencial, agende sua consulta.</p>
            <a href="#" class="btn_maroon">Consulta</a>
        </article>
    </section>
</footer>
```

## Tutorial e Estrutura CSS (Contato)

A estilização da página de Contato (`contato.css`) foi desenvolvida com foco em um design elegante, legível e responsivo. A estrutura visual utiliza amplamente **Flexbox** e **CSS Grid** para o posicionamento dos elementos, além de truques de posicionamento para criar sobreposições interessantes entre as seções.

### Principais Técnicas CSS Utilizadas

* **Importação de Fontes (`@import`)**: Utilização das fontes *Poppins* e *Source Serif 4* do Google Fonts para diferenciar títulos de textos corridos.
* **Reset Global (`*`)**: Zeramento de margens e preenchimentos padrão do navegador, além da aplicação de `box-sizing: border-box` para controle preciso das dimensões.
* **Flexbox (`display: flex`)**: Utilizado extensivamente para alinhar ícones com textos, centralizar o conteúdo do Hero e organizar os campos do formulário de ponta a ponta.
* **CSS Grid (`display: grid`)**: Aplicado para dividir a seção principal de contato (informações à esquerda, formulário à direita) e para estruturar as colunas do rodapé.
* **Posicionamento Absoluto e Relativo (`position`)**: Usado na seção Hero para colocar a imagem de fundo, aplicar uma camada de escurecimento (overlay) e sobrepor o texto.
* **Margem Negativa (`margin: -110px auto 0`)**: Técnica utilizada no container principal de contato para fazê-lo "subir" e sobrepor a área do banner (Hero), criando um efeito visual de profundidade.

---

### Trechos Resumidos do Código CSS

#### 1. Tipografia e Configurações Globais
Importação das fontes e definição das cores e tipografia base do documento.

```css
@import url('[https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Source+Serif+4:wght@400;600;700&display=swap](https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Source+Serif+4:wght@400;600;700&display=swap)');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #FFF2D2;
    color: #4a241b;
    font-family: 'Source Serif Pro', serif;
}

```

## ✨ Integrantes
- Gabrielly Nogueira Rodrigues (10762966)
- Hellen Novi Salvador (10771422)
- Isabela Lopes Morresi (10771436)
- Julia Peres Cardoso (10771419)
- Natália Vaz Cerqueira (10779837)
