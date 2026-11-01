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