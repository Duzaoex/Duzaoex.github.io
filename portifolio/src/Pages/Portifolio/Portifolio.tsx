import React from 'react';
import Slider from 'react-slick';
import style from './Portifolio.module.css'; // Estilos personalizados
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portifolio: React.FC = () => {
    const settings = {
        dots: true,              // Exibe os pontos de navegação
        infinite: true,          // Cicla as imagens de forma infinita
        speed: 500,              // Velocidade da transição
        slidesToShow: 1,         // Mostra uma imagem por vez
        slidesToScroll: 1,       // Move uma imagem por vez
        autoplay: true,          // Ativa a reprodução automática
        autoplaySpeed: 3000,     // Intervalo de tempo entre slides
    };

    return (
        <section className={style.portfolio}>
            <h1 className={style.h1}>Portfólio</h1>

            {/* Contêiner que agrupa os projetos */}
            <div className={style.projectList}>
                {/* Carrossel do Projeto 1 */}
                <div className={style.project}>
                    <h2 className={style.h2}>Site - Consultoria Online</h2>
                    <Slider {...settings} className={style.slider}>
                        <div>
                            <img src="/portifolio/bodao/Captura de tela de 2024-09-19 13-14-47.png" alt="Projeto 1 - Imagem 1" className={style.projectImage} />
                        </div>
                        <div>
                            <img src="/portifolio/bodao/Captura de tela de 2024-09-19 13-14-53.png" alt="Projeto 1 - Imagem 2" className={style.projectImage} />
                        </div>
                        <div>
                            <img src="/portifolio/bodao/Captura de tela de 2024-09-19 13-14-56.png" alt="Projeto 1 - Imagem 3" className={style.projectImage} />
                        </div>
                        <div>
                            <img src="/portifolio/bodao/Captura de tela de 2024-09-19 13-15-00.png" alt="Projeto 1 - Imagem 4" className={style.projectImage} />
                        </div>
                        <div>
                            <img src="/portifolio/bodao/Captura de tela de 2024-09-19 13-15-04.png" alt="Projeto 1 - Imagem 5" className={style.projectImage} />
                        </div>
                        <div>
                            <img src="/portifolio/bodao/Captura de tela de 2024-09-19 13-15-08.png" alt="Projeto 1 - Imagem 6" className={style.projectImage} />
                        </div>
                        <div>
                            <img src="/portifolio/bodao/Captura de tela de 2024-09-19 13-15-11.png" alt="Projeto 1 - Imagem 7" className={style.projectImage} />
                        </div>
                    </Slider>
                    <p className={style.p}>Projeto para consultoria online</p>
                    <a href="https://acastanhotreinador.com.br/" target="_blank" rel="noopener noreferrer" className={style.link}>Visite o site</a>
                </div>

                {/* Carrossel do Projeto 2 */}
                <div className={style.project}>
                    <h2 className={style.h2}>Site - Psicologa</h2>
                    <Slider {...settings} className={style.slider}>
                        <div>
                            <img src="/portifolio/leticia/Captura de tela de 2024-09-19 12-52-17.png" alt="Projeto 2 - Imagem 1" className={style.projectImage} />
                        </div>
                        <div>
                            <img src="/portifolio/leticia/Captura de tela de 2024-09-19 12-52-28.png" alt="Projeto 2 - Imagem 2" className={style.projectImage} />
                        </div>
                        <div>
                            <img src="/portifolio/leticia/Captura de tela de 2024-09-19 12-52-35.png" alt="Projeto 2 - Imagem 3" className={style.projectImage} />
                        </div>
                        <div>
                            <img src="/portifolio/leticia/Captura de tela de 2024-09-19 12-52-49.png" alt="Projeto 2 - Imagem 4" className={style.projectImage} />
                        </div>
                    </Slider>
                    <p className={style.p}>Projeto para Psicologa.</p>
                    <a href="https://psicologaleticianeris.com/" target="_blank" rel="noopener noreferrer" className={style.link}>Visite o site</a>
                </div>
            </div>
        </section>
    );
};

export default Portifolio;
