
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <section className={styles.container_footer}>

                <article className={`${styles.footer_info} ${styles.footer_logo}`}>
                    <h2>
                        <Link href="/">
                            <img src="/img/logo.png" alt="Logo" />
                        </Link>
                    </h2>

                    <p>
                        Advocacia com propósito: proteger direitos, construir confiança.
                    </p>
                </article>

                <nav className={`${styles.footer_info} ${styles.footer_navegacao}`}>
                    <h2>Navegação</h2>

                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/sobre">Sobre</Link></li>
                        <li><Link href="#">Áreas de atuação</Link></li>
                        <li><Link href="/contato">Contato</Link></li>
                    </ul>
                </nav>

                <address className={`${styles.footer_info} ${styles.footer_contato}`}>
                    <h2>Contato</h2>

                    <div className={styles.contato_item}>
                        <img src="/img/Vector (2).png" alt="Telefone" />
                        <p>(11) 9999-9999</p>
                    </div>

                    <div className={styles.contato_item}>
                        <img src="/img/Vector (3).png" alt="E-mail" />
                        <p>contato@exemplo.com</p>
                    </div>

                    <div className={styles.contato_item}>
                        <img src="/img/Vector (4).png" alt="Localização" />
                        <p>São Paulo, SP</p>
                    </div>
                </address>

                <article className={`${styles.footer_info} ${styles.footer_atendimento}`}>
                    <h2>Atendimento</h2>

                    <p>
                        Atendimento online e presencial, agende sua consulta.
                    </p>

                    <Link href="#" className={styles.btn_maroon}>
                        Consulta
                    </Link>
                </article>

            </section>

            <nav className={styles.social_links} aria-label="Redes sociais">
                <a href="#">
                    <img src="/img/Facebook.png" alt="Facebook" />
                </a>

                <a href="#">
                    <img src="/img/Instagram (6).png" alt="Instagram" />
                </a>

                <a href="#">
                    <img src="/img/Linkedin (2).png" alt="LinkedIn" />
                </a>
            </nav>

        </footer>
    );
}
