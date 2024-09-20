import React from 'react';
import style from './Inicio.module.css';

const Inicio: React.FC = () => {
    return (
        <section className={style.inicio}>
            <h1 className={style.h1}>Bem-vindo</h1>
            <p className={style.p}>DESENVOLVEDOR WEB</p>
        </section>
    );
};

export default Inicio;
