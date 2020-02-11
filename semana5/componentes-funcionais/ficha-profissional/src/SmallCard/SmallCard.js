import React from 'react';
import './SmallCard.css';

function SmallCard(props){
    return(
        <div id="divsmallcardgeral">
        <img src={props.image}/>
        <h3 id="titulosmallcard">
        {props.titulo}
        </h3>
        <p>
        {props.descriçao}
        </p>
        </div>
    )
}

export default SmallCard;