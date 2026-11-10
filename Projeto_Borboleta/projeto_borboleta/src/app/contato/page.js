'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/contato.module.css';

export default function Contato() {
    return (
        <>
            <section className={styles.hero_contato}>
                <Image
                    src="/img/background-contato.png"
                    alt="Livros e símbolo da justiça"
                    width={1920}
                    height={485}
                    priority
                />
                <div className={styles.hero_conteudo}>
                    <h1>Entre em contato!</h1>
                    <p>
                        Entre em contato e agende uma conversa para entender seus direitos e encontrar o melhor caminho para o seu caso.
                    </p>
                </div>
            </section>

            <main>
                <section className={styles.area_contato}>
                    <div className={styles.container_contato}>

                        <div className={styles.informacoes}>
                            <h2>Informações de contato</h2>
                            <p className={styles.descricao}>
                                Precisa de orientação? Estamos prontas para ouvir você.
                            </p>

                            <div className={styles.informacao}>
                                <Link href="#"><Image src="/img/Telefone.png" alt="Telefone" width={48} height={48} /></Link>
                                <div className={styles.texto_informacao}>
                                    <h3>Telefone</h3>
                                    <p>(11) 9999-9999</p>
                                </div>
                            </div>

                            <div className={styles.informacao}>
                                <Link href="#"><Image src="/img/E-mail.png" alt="E-mail" width={48} height={48} /></Link>
                                <div className={styles.texto_informacao}>
                                    <h3>Email</h3>
                                    <p>exemplo@contato.com</p>
                                </div>
                            </div>

                            <div className={styles.informacao}>
                                <Link href="#"><Image src="/img/Localização.png" alt="Endereço" width={48} height={48} /></Link>
                                <div className={styles.texto_informacao}>
                                    <h3>Endereço</h3>
                                    <p>Rua Exemplo, Nº 123</p>
                                </div>
                            </div>

                            <div className={styles.redes}>
                                <h3>Siga minhas redes sociais</h3>
                                <div className={styles.redes_icons}>
                                    <Link href="#"><Image src="/img/Instagram.png" alt="Instagram" width={31} height={31} /></Link>
                                    <Link href="#"><Image src="/img/Twitter.png" alt="Twitter" width={31} height={31} /></Link>
                                    <Link href="#"><Image src="/img/Facebook (1).png" alt="Facebook" width={31} height={31} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formulario}>
                            <h2>Agende uma consulta</h2>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.campo}>
                                    <i className="fa-regular fa-user"></i>
                                    <input type="text" name="nome" placeholder="Nome" required />
                                </div>

                                <div className={styles.campo}>
                                    <i className="fa-regular fa-envelope"></i>
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>

                                <div className={styles.campo}>
                                    <i className="fa-solid fa-phone"></i>
                                    <input type="tel" name="telefone" placeholder="Telefone" />
                                </div>

                                <div className={styles.campo}>
                                    <i className="fa-regular fa-calendar"></i>
                                    <input type="date" name="data" />
                                </div>

                                <div className={`${styles.campo} ${styles.mensagem}`}>
                                    <i className="fa-regular fa-comment"></i>
                                    <textarea name="mensagem" placeholder="Mensagem"></textarea>
                                </div>

                                <div className={styles.area_botao}>
                                    <button type="submit">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
}
