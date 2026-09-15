document.addEventListener("DOMContentLoaded", function () {

    const numeros = document.querySelectorAll(".numero-estatistica");

    numeros.forEach(function (numero) {

        const valorFinal = parseInt(numero.textContent);

        let contador = 0;

        const intervalo = setInterval(function () {

            contador++;

            numero.textContent = contador + "+";

            if (contador >= valorFinal) {
                clearInterval(intervalo);
            }

        }, 100);

    });

});
