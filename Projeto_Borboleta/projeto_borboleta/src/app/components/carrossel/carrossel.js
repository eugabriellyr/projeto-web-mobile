"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../../styles/inicio.module.css";

export default function Carrossel() {
    const grupoRef = useRef(null);
    const [indice, setIndice] = useState(0);
    const [casos, setCasos] = useState([]);

    useEffect(() => {
        fetch("/api/casos")
            .then((res) => res.json())
            .then((dados) => setCasos(dados.slice(0, 6)));
    }, []);

    const grupos = [];
    for (let i = 0; i < casos.length; i += 3) {
        grupos.push(casos.slice(i, i + 3));
    }

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
    }, [indice, casos]);

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

        setIndice((atual) =>
            atual < limite ? atual + 1 : atual
        );
    }

    function anterior() {
        setIndice((atual) =>
            atual > 0 ? atual - 1 : atual
        );
    }

    return (
        <div className={styles["carrossel-area"]}>
            <div className={styles["carrossel-container"]}>
                <div
                    className={styles["carrossel-grupo"]}
                    ref={grupoRef}
                >
                    {grupos.map((grupo, i) => (
                        <div
                            className={styles["grupo-cards"]}
                            key={i}
                        >
                            {grupo.map((caso) => (
                                <article
                                    className={styles.caso_card}
                                    data-card
                                    key={caso.slug}
                                >
                                    <img
                                        className={styles.caso_img}
                                        src={caso.img}
                                        alt={caso.titulo}
                                    />

                                    <div className={styles.caso_conteudo}>
                                        <h3 className={styles.caso_titulo}>
                                            {caso.titulo}
                                        </h3>

                                        <p className={styles.caso_texto}>
                                            {caso.texto}
                                        </p>

                                        <Link
                                            href={`/casos_resolvidos/${caso.slug}`}
                                            className={styles.card_link}
                                        >
                                            Saiba mais
                                        </Link>
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