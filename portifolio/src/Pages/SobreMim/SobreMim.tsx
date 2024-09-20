import style from './SobreMIm.module.css';

function SobreMim() {
    return (
        <section className={style.sobreMim}>
            <div className={style.textSection}>
                <h1 className={style.h1}>Sobre Mim</h1>
                <h2>Sou Eduardo Carneiro, um desenvolvedor web</h2>
                <p>Apaixonado por tecnologia e programação.</p>
                <p>Tenho experiência em diversas tecnologias de frontend e backend,</p>
                <p>Sempre buscando aprender mais e me desafiar com novos projetos.</p>
                <p>Navegue pelo meu portfólio para conhecer mais sobre minhas habilidades e projetos realizados.</p>
            </div>
            <div className={style.infoSection}>
                <p>Nome: Eduardo Neris Carneiro</p>
                <p>Email: eduardoneriscarneiro@gmail.com</p>
                <p>Idade: 33 Anos</p>
                <p>Cidade: Presidente Prudente - SP</p>
                <a href="https://w.app/EduardoCarneiroDevWeb" className={style.whatsappButton}>Contato por WhatsApp</a>
            </div>
            <div className={style.logos}>
                <a href="https://www.linkedin.com/in/eduardoneriscarneiro/" target="_blank" rel="noopener noreferrer">
                    <img src="/portifolio/png-transparent-linkedin-social-networking-service-social-media-user-profile-social-media-text-logo-internet-removebg-preview.png" alt="Logo LinkedIn" className={style.logo1} />
                </a>
                <a href="https://github.com/Duzaoex" target="_blank" rel="noopener noreferrer">
                    <img src="/portifolio/github_PNG23.png" alt="Logo GitHub" className={style.logo2} />
                </a>
            </div>
        </section>
    );
}

export default SobreMim;
