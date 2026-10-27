document.addEventListener("DOMContentLoaded", function () {
    const numeros = document.querySelectorAll(".numero_estatistica");

    numeros.forEach(function (numero) {
        const valorFinal = parseInt(numero.textContent) || 0;
        let contador = 0;

        if (valorFinal === 0) {
            return;
        }

        const intervalo = setInterval(function () {
            contador++;
            numero.textContent = contador + "+";

            if (contador >= valorFinal) {
                clearInterval(intervalo);
            }
        }, 100);
    });

    const grupoCasos = document.getElementById("grupo-casos");
    const btnAnteriorCaso = document.getElementById("anterior-casos");
    const btnProximoCaso = document.getElementById("proximo-casos");
    const gruposCasos = document.querySelectorAll("#grupo-casos .grupo-cards");
    const cardsCasos = document.querySelectorAll("#grupo-casos .caso_card");

    let indexCaso = 0;

    function atualizarCarrosselCasos() {
        if (!grupoCasos || cardsCasos.length === 0) {
            return;
        }

        if (window.innerWidth <= 768) {
            const larguraCard = cardsCasos[0].offsetWidth;

            grupoCasos.style.transform =
                `translateX(-${indexCaso * larguraCard}px)`;
        } else {
            grupoCasos.style.transform =
                `translateX(-${indexCaso * 100}%)`;
        }
    }

    if (btnProximoCaso && btnAnteriorCaso && grupoCasos) {
        btnProximoCaso.addEventListener("click", function () {
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

        btnAnteriorCaso.addEventListener("click", function () {
            if (indexCaso > 0) {
                indexCaso--;
            }

            atualizarCarrosselCasos();
        });

        window.addEventListener("resize", function () {
            indexCaso = 0;
            atualizarCarrosselCasos();
        });
    }

    const menuHamburguer = document.getElementById("menu-hamburguer");
    const navLinks = document.querySelector(".nav_links");

    if (menuHamburguer && navLinks) {
        menuHamburguer.addEventListener("click", function () {
            navLinks.classList.toggle("ativo");

            if (navLinks.classList.contains("ativo")) {
                menuHamburguer.textContent = "✕";
            } else {
                menuHamburguer.textContent = "☰";
            }
        });
    }
});