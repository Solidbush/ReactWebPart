import React from 'react';
import style from './LoadTimeFooter.module.css'

const LoadTimeFooter = (props) => {
    return (
       <div className={style.footer}>
           <div className={style.footer_row}>
               <div className={style.footer_text}>{`Total load time: ${props.serverTime} ms (server)`}</div>
           </div>
       </div>
    );
};

export default LoadTimeFooter;