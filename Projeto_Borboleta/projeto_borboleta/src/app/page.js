import styles from "./styles/inicio.module.css";
import Contador from "./components/contador/contador";
import Carrossel from "./components/carrossel/carrossel";

export default function Home() {
    return (
        <main>
            <section className={styles.principal}>
                <article className={styles.container_principal}>
                    <div className={styles.principal_texto}>
                        <h1 className={styles.titulo_principal}>
                            Seu <span>direito</span> nossa causa
                        </h1>

                        <div className={styles.linha}></div>

                        <p className={styles.descricao}>
                            Atuo na análise preventiva, elaboração de contratos
                            e defesa estratégica de interesses, unindo rigor
                            técnico e atendimento humanizado para garantir
                            segurança jurídica e soluções eficientes para cada
                            cliente.
                        </p>

                        <a
                            href="/contato"
                            className={`${styles.botao_contato} ${styles.botao_contato_principal}`}
                        >
                            Contato
                        </a>
                    </div>

                    <div className={styles.container_hero_imagens}>
                        <img
                            src="/img/Capturar.JPG"
                            alt="Fundo Dourado"
                            className={styles.img_fundo_card}
                        />

                        <img
                            src="/img/ChatGPT Image 30 de ago. de 2026, 02_13_39-Photoroom 1 (1).png"
                            alt="Estátua da Justiça"
                            className={styles.img_estatua_sobreposta}
                        />
                    </div>
                </article>
            </section>

            <section className={styles.barra_estatisticas}>
                <ul className={styles.grade_estatisticas}>
                    <li className={styles.item_estatistica}>
                        <img
                            src="/img/Calendario.png"
                            alt="Calendário"
                            className={styles.imagem_icone_estatistica}
                        />
                        <p>
                            <Contador valorFinal={5} />
                            <span className={styles.rotulo_estatistica}>
                                Anos de Carreira
                            </span>
                        </p>
                    </li>

                    <li className={styles.separador}></li>

                    <li className={styles.item_estatistica}>
                        <img
                            src="/img/Pessoa.png"
                            alt="Clientes"
                            className={styles.imagem_icone_estatistica}
                        />
                        <p>
                            <Contador valorFinal={50} />
                            <span className={styles.rotulo_estatistica}>
                                Clientes Atendidos
                            </span>
                        </p>
                    </li>

                    <li className={styles.separador}></li>

                    <li className={styles.item_estatistica}>
                        <img
                            src="/img/joia.png"
                            alt="Casos"
                            className={styles.imagem_icone_estatistica}
                        />
                        <p>
                            <Contador valorFinal={15} />
                            <span className={styles.rotulo_estatistica}>
                                Casos Resolvidos
                            </span>
                        </p>
                    </li>
                </ul>
            </section>

            <section className={styles.areas_atuacao}>
                <article className={styles.container_areas}>
                    <h1 className={styles.titulo_areas}>Áreas de Atuação</h1>

                    <div className={styles.linha}></div>

                    <div className={styles.container_cards}>
                        <article className={styles.cartao}>
                            <img
                                src="/img/Consumidor.png"
                                alt="Ícone Defesa do Consumidor"
                                className={styles.icone_cartao}
                            />
                            <h2 className={styles.titulo_cartao}>
                                Defesa do Consumidor
                            </h2>
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
                                alt="Ícone Direito da Família"
                                className={styles.icone_cartao}
                            />
                            <h2 className={styles.titulo_cartao}>
                                Direito da Família
                            </h2>
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
                                alt="Ícone Direitos Trabalhistas"
                                className={styles.icone_cartao}
                            />
                            <h2 className={styles.titulo_cartao}>
                                Direitos Trabalhistas
                            </h2>
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
                                alt="Ícone Legislação Civil"
                                className={styles.icone_cartao}
                            />
                            <h2 className={styles.titulo_cartao}>
                                Legislação Civil
                            </h2>
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

            <section className={styles.sobre}>
                <figure className={styles.img_advogada}>
                    <img src="/img/advogada.jpeg" alt="Foto da advogada" />
                </figure>

                <article className={styles.sobre_texto}>
                    <h2 className={styles.sobre_titulo}>Sobre a Doutora</h2>

                    <div className={styles.linha}></div>

                    <p className={styles.sobre_descricao}>
                        Atuação pautada na ética, responsabilidade e dedicação.
                        O objetivo é oferecer um atendimento personalizado,
                        com foco na melhor solução para cada caso.
                    </p>

                    <ul className={styles.check_list}>
                        <li>
                            <img src="/img/Check.png" alt="" />
                            Atendimento humanizado;
                        </li>
                        <li>
                            <img src="/img/Check.png" alt="" />
                            Compromisso com o cliente;
                        </li>
                        <li>
                            <img src="/img/Check.png" alt="" />
                            Transparência e ética profissional.
                        </li>
                    </ul>

                    <a
                        href="/contato"
                        className={`${styles.botao_contato} ${styles.botao_contato_sobre}`}
                    >
                        Contato
                    </a>
                </article>
            </section>

            <section className={styles.noticias}>
                <div className={styles.container_noticias}>
                    <h2 className={styles.noticias_titulo}>Últimos Casos</h2>

                    <div className={styles.linha}></div>

                    <Carrossel />
                </div>
            </section>
        </main>
    );
}