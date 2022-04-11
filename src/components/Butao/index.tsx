import React from "react";
import style from './Button.module.scss';

class Butao extends React.Component<{
    type?:"button" | "submit" | "reset" | undefined
}>
{
    render(){
        const {type = "button"} = this.props
        return(
            <button  className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}
export default Butao