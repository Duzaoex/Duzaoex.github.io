// Pages/Footer/Footer.tsx
import React from 'react';
import style from './Footer.module.css';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <div className={`${style.footer} ${className}`}>
            <p>&copy; {new Date().getFullYear()} Eduardo Carneiro. Todos os direitos reservados.</p>

        </div>
    );
};

export default Footer;
