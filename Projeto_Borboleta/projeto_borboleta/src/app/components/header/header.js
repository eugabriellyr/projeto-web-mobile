"use client";

import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
    const [aberto, setAberto] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <a href="/" className={styles.logo}>
                    <img src="/img/logo.png" alt="Logo" />
                </a>

                <ul className={`${styles.nav_links} ${aberto ? styles.ativo : ""}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>

                <a href="/contato" className={styles.botao_consulta}>
                    Consulta
                </a>

                <button
                    type="button"
                    className={styles.menu_hamburguer}
                    onClick={() => setAberto(!aberto)}
                    aria-label="Abrir menu"
                >
                    {aberto ? "✕" : "☰"}
                </button>
            </div>
        </header>
    );
}