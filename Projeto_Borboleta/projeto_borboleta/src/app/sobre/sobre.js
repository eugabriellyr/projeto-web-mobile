
import styles from "../styles/sobre.module.css";

export default function Sobre() {
    return (
        <main>
            <section className={styles.sobre}>
                <article className={styles.sobre_texto}>
                    <h1 className={styles.sobre_titulo}>
                        Sobre a Dr. Luciana
                    </h1>

                    <div className={styles.linha}></div>

                    <p className={styles.sobre_descricao}>
                        Atuação jurídica pautada pela ética, dedicação e
                        compromisso com cada cliente. Advogada Tal oferece
                        orientação personalizada e soluções estratégicas para
                        proteger seus direitos e interesses.
                    </p>

                    <a href="/contato" className={styles.botao_contato}>
                        Contato
                    </a>
                    <section className={styles.estatisticas}>
                        <div className={styles.linha}></div>

                        <article className={styles.estatistica}>
                            <strong className={styles.numero_estatistica}>
                                +100
                            </strong>
                            <span>Casos resolvidos</span>
                        </article>

                        <article className={styles.estatistica}>
                            <strong className={styles.numero_estatistica}>
                                5
                            </strong>
                            <span>Anos de carreira</span>
                        </article>

                        <div className={styles.linha}></div>
                    </section>
                </article>

                <figure className={styles.img_advogada}>
                    <img
                        src="/img/advogada.jpeg"
                        alt="Advogada sentada em seu escritório"
                    />
                </figure>
            </section>
            <section className={styles.areas_atuacao}>
                <article className={styles.container_areas}>
                    <h2 className={styles.titulo_areas}>
                        Áreas de Atuação
                    </h2>

                    <div className={styles.linha}></div>

                    <div className={styles.container_cards}>
                        <article className={styles.cartao}>
                            <img
                                src="/img/Consumidor.png"
                                alt="Defesa do Consumidor"
                                className={styles.icone_cartao}
                            />
                            <h3 className={styles.titulo_cartao}>
                                Defesa do Consumidor
                            </h3>
                            <p className={styles.descricao_cartao}>
                                Defesa dos seus direitos nas relações de consumo.
                            </p>
                            <a href="#" className={styles.link_cartao}>
                                Saiba mais
                            </a>
                        </article>

                        <article className={styles.cartao}>
                            <img
                                src="/img/familia.png"
                                alt="Direito da Família"
                                className={styles.icone_cartao}
                            />
                            <h3 className={styles.titulo_cartao}>
                                Direito da Família
                            </h3>
                            <p className={styles.descricao_cartao}>
                                Defesa dos seus direitos nas relações de família.
                            </p>
                            <a href="#" className={styles.link_cartao}>
                                Saiba mais
                            </a>
                        </article>

                        <article className={styles.cartao}>
                            <img
                                src="/img/trabalhista.png"
                                alt="Direitos Trabalhistas"
                                className={styles.icone_cartao}
                            />
                            <h3 className={styles.titulo_cartao}>
                                Direitos Trabalhistas
                            </h3>
                            <p className={styles.descricao_cartao}>
                                Defesa dos seus direitos nas relações trabalhistas.
                            </p>
                            <a href="#" className={styles.link_cartao}>
                                Saiba mais
                            </a>
                        </article>

                        <article className={styles.cartao}>
                            <img
                                src="/img/civil.png"
                                alt="Legislação Civil"
                                className={styles.icone_cartao}
                            />
                            <h3 className={styles.titulo_cartao}>
                                Legislação Civil
                            </h3>
                            <p className={styles.descricao_cartao}>
                                Defesa dos seus direitos na área civil.
                            </p>
                            <a href="#" className={styles.link_cartao}>
                                Saiba mais
                            </a>
                        </article>
                    </div>
                </article>
            </section>
        </main>
    );
}
