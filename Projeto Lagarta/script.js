document.addEventListener("DOMContentLoaded", function () {

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

    const grupoCasos = document.getElementById("grupo-casos");
    const btnAnteriorCaso = document.getElementById("anterior-casos");
    const btnProximoCaso = document.getElementById("proximo-casos");
    const gruposCasos = grupoCasos ? grupoCasos.querySelectorAll(".grupo-cards") : [];
    const cardsCasos = grupoCasos ? grupoCasos.querySelectorAll(".caso_card") : [];

    let indexCaso = 0;

    function atualizarCarrosselCasos() {
        if (!grupoCasos || cardsCasos.length === 0) {
            return;
        }

        // MOBILE (Desliza card por card)
        if (window.innerWidth <= 768) {
            const larguraCard = cardsCasos[0].offsetWidth + 15; // 15px do gap do mobile
            grupoCasos.style.transform = `translateX(-${indexCaso * larguraCard}px)`;
        } 
        // DESKTOP (Desliza por blocos/grupos de 3 em 3)
        else {
            grupoCasos.style.transform = `translateX(-${indexCaso * 100}%)`;
        }
    }

    if (btnProximoCaso && btnAnteriorCaso && grupoCasos) {
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

        btnAnteriorCaso.addEventListener("click", () => {
            if (indexCaso > 0) {
                indexCaso--;
            }
            atualizarCarrosselCasos();
        });

        window.addEventListener("resize", () => {
            indexCaso = 0;
            atualizarCarrosselCasos();
        });
    }

});
