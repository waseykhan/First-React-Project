import React from 'react';
import css from './App.module.css';

const func = (props) => {

    return(
    <div>    
        <div className={css.tittle}>
           <h1> {props.tittle}</h1>
         </div>
        <div className={css.description}>
            {props.description}
        </div>
        <div className={css.selectColor}>
            <b>{props.SelectColor}</b>
        </div>
    </div>
    );


}


export default func;