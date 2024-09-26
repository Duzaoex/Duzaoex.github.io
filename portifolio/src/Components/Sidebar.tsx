import React from 'react';
import style from './Sidebar.module.css';

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    return (
        <div className={`${style.sidebar} ${className}`}>
            <div className={style.profile}>
                <img src="/portifolio/9a8b795b-280e-4234-84a0-78bdbacbdcee.png" alt="Eduardo Carneiro" className={style.profilePic} />
                <h1 className={style.name}>Eduardo Carneiro</h1>
            </div>
            <nav className={style.nav}>
                <a href="#inicio" className={style.navItem}>Início</a>
                <a href="#sobre-mim" className={style.navItem}>Sobre Mim</a>
                <a href="#o-que-faco" className={style.navItem}>O que faço</a>
                <a href="#portifolio" className={style.navItem}>Portfólio</a>
                <a href="#contato" className={style.navItem2}>Contato</a>
                <a href="https://wa.me/18998041456" className={`${style.navItem} ${style.whatsappButton}`}>Contato por WhatsApp</a>
            </nav>
        </div>
    );
}

export default Sidebar;
