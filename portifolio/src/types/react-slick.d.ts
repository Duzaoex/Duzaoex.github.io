declare module 'react-slick' {
    import { Component, ReactNode } from 'react';

    interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        className?: string;
        children?: ReactNode;  // Adiciona a propriedade children
    }

    export default class Slider extends Component<Settings> {}
}
