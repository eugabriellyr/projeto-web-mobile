
"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import styles from "./caso.module.css";

const titulos = {
    "quebra-de-contrato": "Quebra de Contrato",
    "contratos-sem-revisao": "Contratos sem Revisão",
    "direitos-trabalhistas": "Direitos Trabalhistas",
    "inventario-e-partilha": "Inventário e Partilha",
    "defesa-do-consumidor": "Defesa do Consumidor",
    "cobranca-indevida": "Cobrança Indevida",
    "direito-da-familia": "Direito da Família",
    "legislacao-civil": "Legislação Civil",
};

export default function CasoPage() {
    const params = useParams();
    const slug = params.slug;

    const titulo = titulos[slug];

    const [abaAtiva, setAbaAtiva] = useState("descricao");

    if (!titulo) {
        return <div>Conteúdo não encontrado.</div>;
    }

    return (
        <main className={styles.pagina_caso}>

            <section className={styles.caso_container}>

                <div className={styles.caso_imagem}>
                    <img
                        src="/img/Command Your Contracts, Command Your Future 1.png"
                        alt="Ambiente de trabalho jurídico"
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
                        {titulo}
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

                                <p>
                                    Apresente aqui o contexto do caso,
                                    explicando a situação inicial,
                                    os problemas identificados e
                                    os desafios enfrentados pelo cliente.
                                </p>

                                <h2>Estratégia Jurídica</h2>

                                <ul>
                                    <li>
                                        <strong>Análise:</strong> descrição
                                        da análise realizada para identificar
                                        os principais pontos do caso.
                                    </li>

                                    <li>
                                        <strong>Planejamento:</strong> descrição
                                        das medidas jurídicas adotadas.
                                    </li>

                                    <li>
                                        <strong>Atuação:</strong> apresentação
                                        das estratégias utilizadas durante
                                        o atendimento.
                                    </li>
                                </ul>
                            </section>
                        )}

                        {abaAtiva === "resultado" && (
                            <section>
                                <h2>Resultado alcançado</h2>

                                <p>
                                    Apresente aqui os resultados obtidos
                                    com a atuação jurídica e as soluções
                                    encontradas para o caso.
                                </p>

                                <h2>Impactos</h2>

                                <ul>
                                    <li>
                                        <strong>Segurança:</strong> solução
                                        dos pontos identificados.
                                    </li>

                                    <li>
                                        <strong>Resolução:</strong> medidas
                                        adotadas para atender aos objetivos
                                        do cliente.
                                    </li>
                                </ul>
                            </section>
                        )}

                        {abaAtiva === "feedback" && (
                            <section>
                                <h2>Feedback do Cliente</h2>

                                <p>
                                    Espaço destinado ao depoimento
                                    e à experiência do cliente após
                                    a conclusão do caso.
                                </p>
                            </section>
                        )}

                    </div>

                </article>

            </section>

        </main>
    );
}
