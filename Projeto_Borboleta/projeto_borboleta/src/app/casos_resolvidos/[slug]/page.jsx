"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./caso.module.css";

export default function CasoPage() {
    const { slug } = useParams();

    const [caso, setCaso] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [abaAtiva, setAbaAtiva] = useState("descricao");

    useEffect(() => {
        fetch(`/api/casos/${slug}`)
            .then((res) => (res.ok ? res.json() : null))
            .then((dados) => setCaso(dados))
            .finally(() => setCarregando(false));
    }, [slug]);

    if (carregando) {
        return <div>Carregando...</div>;
    }

    if (!caso) {
        return <div>Conteúdo não encontrado.</div>;
    }

    return (
        <main className={styles.pagina_caso}>

            <section className={styles.caso_container}>

                <div className={styles.caso_imagem}>
                    <img
                        src={caso.img}
                        alt={caso.titulo}
                    />

                    <div className={styles.detalhe_imagem}></div>
                </div>

                <article className={styles.caso_conteudo}>

                    <div className={styles.caso_informacoes}>
                        <span>Casos resolvidos</span>
                        <span className={styles.separador}>•</span>
                        <span>Área jurídica</span>
                    </div>

                    <h1 className={styles.caso_titulo}>
                        {caso.titulo}
                    </h1>

                    <nav className={styles.caso_abas}>
                        <button
                            className={abaAtiva === "descricao" ? styles.aba_ativa : ""}
                            onClick={() => setAbaAtiva("descricao")}
                        >
                            Descrição
                        </button>

                        <button
                            className={abaAtiva === "resultado" ? styles.aba_ativa : ""}
                            onClick={() => setAbaAtiva("resultado")}
                        >
                            Resultado
                        </button>

                        <button
                            className={abaAtiva === "feedback" ? styles.aba_ativa : ""}
                            onClick={() => setAbaAtiva("feedback")}
                        >
                            Feedback do Cliente
                        </button>
                    </nav>

                    <div className={styles.caso_texto}>

                        {abaAtiva === "descricao" && (
                            <section>
                                <h2>Desafio</h2>
                                <p>{caso.desafio}</p>

                                <h2>Estratégia Jurídica</h2>
                                <ul>
                                    {caso.estrategia.map((item) => (
                                        <li key={item.titulo}>
                                            <strong>{item.titulo}:</strong> {item.descricao}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {abaAtiva === "resultado" && (
                            <section>
                                <h2>Resultado alcançado</h2>
                                <p>{caso.resultado}</p>

                                <h2>Impactos</h2>
                                <ul>
                                    {caso.impactos.map((item) => (
                                        <li key={item.titulo}>
                                            <strong>{item.titulo}:</strong> {item.descricao}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {abaAtiva === "feedback" && (
                            <section>
                                <h2>Feedback do Cliente</h2>
                                <p>{caso.feedback}</p>
                            </section>
                        )}

                    </div>

                </article>

            </section>

        </main>
    );
}