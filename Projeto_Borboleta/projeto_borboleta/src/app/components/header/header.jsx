"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.menu}>
                <Link href="/" className={styles.logo}>
                    <img src="/img/logo.png" alt="Logo do escritório" />
                </Link>

                <ul className={`${styles.nav_links} ${menuAberto ? styles.ativo : ""}`}>
                    <li>
                        <Link href="/" onClick={() => setMenuAberto(false)}>
                            Início
                        </Link>
                    </li>

                    <li>
                        <Link href="/sobre" onClick={() => setMenuAberto(false)}>
                            Sobre
                        </Link>
                    </li>

                    <li>
                        <Link href="/contato" onClick={() => setMenuAberto(false)}>
                            Contato
                        </Link>
                    </li>
                </ul>

                <Link href="/contato" className={styles.botao_consulta}>
                    Agende uma consulta
                </Link>

                <button
                    className={styles.menu_hamburguer}
                    onClick={() => setMenuAberto(!menuAberto)}
                    aria-label="Abrir menu"
                >
                    ☰
                </button>
            </nav>
        </header>
    );
}