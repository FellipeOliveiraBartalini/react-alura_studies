import React from 'react';
import style from './button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void,
    children?: React.ReactNode
}

function Button({ onClick, type, children }: Props) {
    return (
        <button
            className={style.botao}
            type={type}
            onClick={onClick}
        >

           { children }
        </button>
    )
}

export default Button;
