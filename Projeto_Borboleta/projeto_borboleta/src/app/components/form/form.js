'use client';

import { useState } from 'react';
import styles from '../../styles/contato.module.css';

export default function Form() {
    const [status, setStatus] = useState('');

    async function enviar(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const dados = Object.fromEntries(new FormData(form));

        setStatus('Enviando...');

        try {
            const res = await fetch('/api/contato', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados),
            });

            if (res.ok) {
                setStatus('Mensagem enviada com sucesso!');
                form.reset();
            } else {
                setStatus('Erro ao enviar. Tente novamente.');
            }
        } catch {
            setStatus('Erro de conexão. Tente novamente.');
        }
    }

    return (
        <div className={styles.formulario}>
            <h2>Agende uma consulta</h2>

            <form onSubmit={enviar}>
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

                {status && <p>{status}</p>}
            </form>
        </div>
    );
}