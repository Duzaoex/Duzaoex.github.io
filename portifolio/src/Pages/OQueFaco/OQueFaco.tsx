import React from 'react';
import style from './OQueFaco.module.css';

const OQueFaco: React.FC = () => {
    return (
        <section className={style.oQueFaco}>
            <div className={style.container}>
                <h1 className={style.h11}>O que faço</h1>
                <p className={style.p}>
                    Eu crio sites modernos e personalizados para
                    profissionais como médicos, fisioterapeutas, psicólogos,
                    treinadores e todos profissionais que buscam uma ótima
                    forma de atrair clientes. Meu foco é oferecer uma presença online
                    atrativa e funcional, que destaque seu trabalho e facilite o contato
                    com seus clientes. Utilizo as melhores e mais recentes tecnologias
                    para garantir que seu site seja rápido, seguro e fácil de usar,
                    tanto no computador quanto no celular.
                </p>
                <div className={style.logos}>
                    <h2 className={style.h12}>Stacks</h2>
                    <div className={style.logoGrid}>
                        <img src="/portifolio/ts.png" alt="TypeScript" className={style.logo} />
                        <img src="/portifolio/js.png" alt="Javascript" className={style.logo} />
                        <img src="/portifolio/nodejs.png" alt="Node.js" className={style.logo} />
                        <img src="/portifolio/html.png" alt="HTML5" className={style.logo} />
                        <img src="/portifolio/css.png" alt="CSS3" className={style.logo} />
                        <img src="/portifolio/87ee883f-4e47-41e0-a259-b9624e0ac45c-removebg-preview.png" alt="UI/UX" className={style.logo} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OQueFaco;
