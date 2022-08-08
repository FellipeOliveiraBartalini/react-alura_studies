import React from 'react';
import style from './button.module.scss';

class Button extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined, children: any,
    onClick?: () => void
}> {
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button className={style.botao} type={type} onClick={onClick}>
                { this.props.children }
            </button>
        )
    }
}

export default Button;
