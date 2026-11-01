"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/inicio.module.css"

export default function Contador({ valorFinal }) {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        if (valorFinal === 0) return;

        const intervalo = setInterval(() => {
            setContador((atual) => {
                if (atual + 1 >= valorFinal) {
                    clearInterval(intervalo);
                }
                return atual + 1;
            });
        }, 100);

        return () => clearInterval(intervalo);
    }, [valorFinal]);

 
       return <span className={styles.numero_estatistica}>{contador}+</span>;
}