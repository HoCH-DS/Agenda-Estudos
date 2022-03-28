import React from "react";
import style from './Button.module.scss';

class Butao extends React.Component  {
    render(){
        return(
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}
export default Butao