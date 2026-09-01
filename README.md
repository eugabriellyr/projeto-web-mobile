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

---

## ✨ Integrantes
- Gabrielly Nogueira Rodrigues (10762966)
- Hellen Novi Salvador (10771422)
- Isabela Lopes Morresi (10771436)
- Julia Peres Cardoso (10771419)
- Natália Vaz Cerqueira (10779837)