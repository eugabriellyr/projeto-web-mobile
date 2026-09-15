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

--

## Tutorial e Estrutura CSS (Home)

A estilização da página Home (`inicio.css`) mantém a identidade visual do projeto e organiza os principais blocos da página com **Flexbox**, **CSS Grid**, posicionamento relativo/absoluto e efeitos simples de interação.

### Principais Técnicas CSS Utilizadas

* **Reset global e `box-sizing`**: remove margens e espaçamentos padrões do navegador e facilita o controle das dimensões.
* **Flexbox (`display: flex`)**: utilizado no menu, Hero, cards, seção Sobre e cards de casos.
* **CSS Grid (`display: grid`)**: utilizado principalmente na barra de estatísticas e no rodapé.
* **Posicionamento (`relative` e `absolute`)**: permite sobrepor a estátua à imagem do Hero e criar detalhes decorativos.
* **`z-index`**: define qual elemento deve aparecer à frente nas sobreposições.
* **`object-fit`**: mantém imagens proporcionais dentro de espaços com tamanhos definidos.
* **Pseudo-elementos (`::after`)**: utilizados para a seta do botão e detalhes decorativos.
* **`hover`, `transform` e `transition`**: criam respostas visuais em links e cards.

### Trechos Resumidos do Código CSS

#### 1. Configuração Global e Tipografia

```css
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

O `box-sizing: border-box` faz com que `padding` e `border` sejam considerados dentro da largura e altura definidas para cada elemento, evitando cálculos extras no layout.

#### 2. Menu com Flexbox

```css
.menu {
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 95px;
    background-color: #ffffff;
}

.nav_links {
    display: flex;
    gap: 45px;
    list-style: none;
}
```

O Flexbox posiciona logo, navegação e botão na mesma linha. `justify-content: space-between` distribui os grupos horizontalmente e `align-items: center` centraliza todos verticalmente.

#### 3. Hero e Sobreposição das Imagens

```css
.container_principal {
    height: 423px;
    display: flex;
    position: relative;
}

.principal_texto {
    width: 55%;
}

.container_hero_imagens {
    width: 45%;
    position: relative;
}

.img_estatua_sobreposta {
    position: absolute;
    top: -10px;
    left: -20%;
    height: 434px;
    z-index: 20;
}
```

O Hero é dividido entre texto e imagem. O container da imagem recebe `position: relative`, tornando-se referência para a estátua com `position: absolute`. O `z-index` mantém a estátua acima da imagem de fundo.

#### 4. Barra de Estatísticas com Grid

```css
.grade_estatisticas {
    height: 100px;
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;
    align-items: center;
}
```

A grade alterna três áreas de conteúdo com dois separadores. As colunas `1fr` dividem igualmente o espaço disponível e as colunas `auto` ocupam apenas a largura necessária.

#### 5. Cards e Efeito de Hover

```css
.container_cards {
    display: flex;
    justify-content: center;
    gap: 25px;
}

.cartao {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.2s;
}

.cartao:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(74, 36, 27, 0.12);
}
```

Os cards ficam alinhados horizontalmente, enquanto seus conteúdos são organizados em coluna. No `hover`, o deslocamento e a sombra criam um efeito de elevação.

#### 6. Seção Sobre e Detalhe Decorativo

```css
.sobre {
    background-color: #6F1D1B;
    padding: 60px 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
}

.img_advogada::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-top: 40px solid #BB9457;
    border-left: 40px solid transparent;
}
```

O Flexbox posiciona imagem e texto lado a lado. O `::after` cria um triângulo dourado apenas com bordas CSS, sem utilizar uma nova imagem.

#### 7. Rodapé com Grid

```css
.container_footer {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1.3fr 1.3fr;
    gap: 50px;
}
```

O rodapé é dividido em quatro colunas proporcionais para logo, navegação, contato e atendimento.

--

## Tutorial e Estrutura JavaScript (Home)

O JavaScript da página Home foi utilizado para adicionar interatividade à página. O código possui duas funcionalidades principais: a animação dos números da seção de estatísticas e o carrossel de casos, que possui comportamentos diferentes para dispositivos móveis e desktop.

### Principais Técnicas JavaScript Utilizadas

* **`DOMContentLoaded`**: garante que o código seja executado somente depois que o conteúdo HTML da página estiver carregado.
* **`querySelectorAll`**: utilizado para selecionar os elementos que possuem determinadas classes, como os números das estatísticas e os cards dos casos.
* **`getElementById`**: utilizado para localizar elementos específicos pelo seu `id`, como os botões e o grupo de casos.
* **`forEach`**: utilizado para percorrer os números das estatísticas e aplicar a animação individualmente.
* **`setInterval` e `clearInterval`**: utilizados para criar e finalizar a contagem animada dos números.
* **`addEventListener`**: utilizado para identificar ações do usuário, como cliques nos botões do carrossel e alterações no tamanho da janela.
* **`window.innerWidth`**: utilizado para identificar a largura da tela e adaptar o funcionamento do carrossel para mobile ou desktop.
* **`offsetWidth`**: utilizado para obter a largura dos cards e calcular o deslocamento do carrossel no mobile.
* **`transform` e `translateX`**: utilizados para movimentar os cards horizontalmente no carrossel.

### Trechos Resumidos do Código JavaScript

#### 1. Carregamento do Documento

```javascript
document.addEventListener("DOMContentLoaded", function () {

    // Código executado após o carregamento do HTML

});
```

O `DOMContentLoaded` faz com que o código JavaScript seja executado somente depois que o HTML da página estiver carregado. Isso evita que o JavaScript tente acessar elementos que ainda não foram criados pelo navegador.

#### 2. Animação das Estatísticas

```javascript
const numeros = document.querySelectorAll(".numero_estatistica");

numeros.forEach(function (numero) {
    const valorFinal = parseInt(numero.textContent) || 0;
    let contador = 0;

    if (valorFinal === 0) return;

    const intervalo = setInterval(function () {
        contador++;
        numero.textContent = contador + "+";

        if (contador >= valorFinal) {
            clearInterval(intervalo);
        }
    }, 100);
});
```

Nesse trecho, o `querySelectorAll` seleciona todos os elementos que possuem a classe `.numero_estatistica`. O `forEach` percorre cada número individualmente.

O valor inicial é obtido com `parseInt()` e o contador começa em zero. O `setInterval()` aumenta o número a cada 100 milissegundos, criando uma animação de contagem. Quando o valor final é atingido, o `clearInterval()` encerra a contagem.

#### 3. Seleção dos Elementos do Carrossel

```javascript
const grupoCasos = document.getElementById("grupo-casos");
const btnAnteriorCaso = document.getElementById("anterior-casos");
const btnProximoCaso = document.getElementById("proximo-casos");

const gruposCasos = grupoCasos
    ? grupoCasos.querySelectorAll(".grupo-cards")
    : [];

const cardsCasos = grupoCasos
    ? grupoCasos.querySelectorAll(".caso_card")
    : [];
```

Nesse trecho, o `getElementById()` é utilizado para localizar o grupo de casos e os botões de navegação. Depois, o `querySelectorAll()` seleciona os grupos e os cards que fazem parte do carrossel.

O operador condicional verifica se o elemento `grupoCasos` existe antes de tentar acessar seus elementos, evitando erros caso ele não esteja presente na página.

#### 4. Controle da Posição do Carrossel

```javascript
let indexCaso = 0;

function atualizarCarrosselCasos() {
    if (!grupoCasos || cardsCasos.length === 0) {
        return;
    }

    if (window.innerWidth <= 768) {
        const larguraCard = cardsCasos[0].offsetWidth + 15;

        grupoCasos.style.transform =
            `translateX(-${indexCaso * larguraCard}px)`;
    } else {
        grupoCasos.style.transform =
            `translateX(-${indexCaso * 100}%)`;
    }
}
```

A variável `indexCaso` controla qual posição do carrossel está sendo exibida.

Quando a largura da tela é de até 768 pixels, o código considera o comportamento de dispositivos móveis e movimenta o carrossel card por card. Para isso, utiliza o `offsetWidth` para descobrir a largura do card.

Em telas maiores, o carrossel é movimentado em grupos utilizando `translateX()` e porcentagem.

#### 5. Botão para Avançar

```javascript
btnProximoCaso.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        if (indexCaso < cardsCasos.length - 1) {
            indexCaso++;
        }
    } else {
        if (indexCaso < gruposCasos.length - 1) {
            indexCaso++;
        }
    }

    atualizarCarrosselCasos();
});
```

O `addEventListener("click")` identifica quando o usuário clica no botão de avançar.

No mobile, o código verifica a quantidade de cards individuais. No desktop, verifica a quantidade de grupos de cards. Quando ainda existem elementos para serem exibidos, o `indexCaso` é aumentado e a função `atualizarCarrosselCasos()` é chamada para movimentar o carrossel.

#### 6. Botão para Voltar

```javascript
btnAnteriorCaso.addEventListener("click", () => {
    if (indexCaso > 0) {
        indexCaso--;
    }

    atualizarCarrosselCasos();
});
```

Nesse trecho, o botão anterior diminui o valor de `indexCaso`, permitindo voltar para a posição anterior do carrossel.

A condição `indexCaso > 0` impede que o carrossel tente voltar para uma posição anterior à primeira.

#### 7. Adaptação ao Redimensionamento da Tela

```javascript
window.addEventListener("resize", () => {
    indexCaso = 0;
    atualizarCarrosselCasos();
});
```

O evento `resize` é executado quando o tamanho da janela do navegador é alterado. Nesse caso, o `indexCaso` volta para zero e o carrossel é atualizado novamente.

Isso permite que o comportamento do carrossel seja reorganizado quando o usuário muda o tamanho da janela, como ao alterar entre diferentes larguras de tela.

---

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

## Tutorial e Estrutura CSS (Sobre)

A página Sobre (`about.css`) mantém o mesmo padrão visual da Home, reutilizando cores, tipografia, menu, cards e rodapé. O foco principal do CSS dessa página é organizar a apresentação da advogada, as estatísticas e as áreas de atuação.

### Principais Técnicas CSS Utilizadas

* **Flexbox**: organiza a apresentação da advogada e os cards de áreas de atuação.
* **Dimensões e espaçamentos**: controlam a proporção entre imagem, texto e conteúdo.
* **`object-fit: cover`**: mantém a fotografia proporcional dentro do espaço definido.
* **Pseudo-elementos**: adicionam detalhes decorativos à imagem.
* **Reutilização de estilos**: menu, cards e rodapé seguem o mesmo padrão visual da Home.

### Trechos Resumidos do Código CSS

#### 1. Estrutura Principal da Seção Sobre

```css
.sobre {
    background-color: #6F1D1B;
    padding: 60px 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
}

.sobre_texto {
    width: 500px;
}
```

O `display: flex` posiciona o bloco de texto e a imagem na mesma linha. O `gap` cria a separação entre os dois elementos sem precisar aplicar margens individuais.

#### 2. Imagem da Advogada

```css
.img_advogada {
    width: 400px;
    height: 400px;
    position: relative;
    overflow: hidden;
}

.img_advogada img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

`object-fit: cover` faz a fotografia ocupar toda a área definida sem deformação. `overflow: hidden` impede que partes da imagem ultrapassem os limites do container.

#### 3. Tipografia e Contraste

```css
.sobre_titulo {
    color: #FFF2D2;
    font-size: 32px;
}

.sobre_descricao {
    color: #FFF2D2;
    font-size: 17px;
    line-height: 1.7;
    text-align: justify;
}
```

Os textos claros sobre o fundo bordô criam contraste. O `line-height` aumenta o espaçamento entre as linhas e melhora a leitura do texto institucional.

#### 4. Áreas de Atuação

```css
.container_cards {
    display: flex;
    justify-content: center;
    gap: 25px;
}

.cartao {
    width: 250px;
    height: 310px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

Os cards são reutilizados para manter consistência com a Home. Internamente, o Flexbox em coluna organiza ícone, título, descrição e link.

#### 5. Interação dos Cards

```css
.cartao:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(74, 36, 27, 0.12);
}
```

O efeito de `hover` dá retorno visual ao usuário e destaca o card durante a interação.

#### 6. Rodapé

```css
.container_footer {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1.3fr 1.3fr;
    gap: 50px;
}
```

O mesmo Grid da Home é mantido para que as páginas tenham uma estrutura visual consistente.

---

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

A estilização da página de Contato (`contato.css`) foi desenvolvida com foco em legibilidade e organização. O CSS utiliza **Flexbox**, **CSS Grid**, sobreposição de elementos e estilização personalizada do formulário.

### Principais Técnicas CSS Utilizadas

* **Flexbox**: utilizado no menu, itens de contato, redes sociais e campos do formulário.
* **CSS Grid**: divide o bloco principal entre informações de contato e formulário, além de estruturar o rodapé.
* **Posicionamento relativo e absoluto**: utilizado no Hero e na sobreposição entre seções.
* **Pseudo-elemento `::after`**: cria uma camada escura sobre a imagem do Hero para melhorar a leitura do texto.
* **Margem negativa**: faz o bloco de contato avançar sobre o Hero.
* **Inputs personalizados**: removem bordas padrões e integram ícones aos campos.
* **`hover` e `transition`**: oferecem retorno visual nos botões e redes sociais.

### Trechos Resumidos do Código CSS

#### 1. Hero e Camada de Sobreposição

```css
.hero_contato {
    width: 100%;
    height: 485px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero_contato img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
}
```

A imagem ocupa todo o Hero. O `::after` cria uma camada semitransparente acima da imagem, enquanto `z-index: 2` mantém o texto visível à frente.

#### 2. Container Principal com Grid

```css
.container-contato {
    width: 78%;
    max-width: 1100px;
    margin: -110px auto 0;
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    padding: 52px 50px;
}
```

O Grid divide o conteúdo em duas colunas: informações à esquerda e formulário à direita. A margem superior negativa faz o bloco subir sobre o Hero.

#### 3. Informações de Contato

```css
.informacoes {
    padding-right: 45px;
    border-right: 1px solid #8a6257;
}

.informacao {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 27px;
}
```

A borda separa visualmente as duas colunas. Cada informação utiliza Flexbox para manter ícone e texto alinhados.

#### 4. Redes Sociais

```css
.redes-icons {
    display: flex;
    gap: 20px;
}

.redes-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
}

.redes-icons a:hover {
    transform: translateY(-2px);
}
```

Os ícones ficam alinhados horizontalmente e recebem um pequeno deslocamento ao passar o mouse.

#### 5. Campos do Formulário

```css
.campo {
    width: 100%;
    height: 43px;
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 0 17px;
    margin-bottom: 23px;
    background-color: white;
}

.campo input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
}
```

O container `.campo` controla a aparência visual. O `input` fica transparente e sem borda, integrando-se ao mesmo bloco do ícone.

#### 6. Campo de Mensagem

```css
.campo.mensagem {
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
}
```

O `textarea` recebe uma altura maior por permitir mensagens mais longas. `resize: none` impede que o usuário altere manualmente seu tamanho.

#### 7. Botão de Envio

```css
.area-botao {
    display: flex;
    justify-content: flex-end;
}

.area-botao button {
    border: none;
    color: white;
    padding: 8px 29px;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;
}
```

O Flexbox posiciona o botão à direita. `cursor: pointer` reforça que o elemento é clicável e a transição suaviza o efeito de `hover`.

#### 8. Rodapé

```css
.container_footer {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1.3fr 1.3fr;
    gap: 50px;
}
```

O Grid organiza o rodapé nas mesmas quatro áreas das outras páginas, mantendo a identidade visual do projeto.

---

## ✨ Integrantes
- Gabrielly Nogueira Rodrigues (10762966)
- Hellen Novi Salvador (10771422)
- Isabela Lopes Morresi (10771436)
- Julia Peres Cardoso (10771419)
- Natália Vaz Cerqueira (10779837)
