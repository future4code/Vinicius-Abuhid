import React from 'react';
import './BigCard.css';

function BigCard(props){
    return(
        <div id="divbigcardgeral">
        <div id="divbigcard1">
        <img/>
        </div>
        <div className="divbigcard2">
        <h2>
        {props.titulo}
        </h2>
        <p>
        {props.descriçao}
        </p>
        </div>
        </div>
    )
}

export default BigCard;
