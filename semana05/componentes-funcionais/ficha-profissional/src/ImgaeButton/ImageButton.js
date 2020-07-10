import React from 'react';
import './ImageButton.css';

function ImageButton(props){
    return(
        <button >
        <div>
        <img />
        <h2>
        {props.texto}
        </h2>
        </div>
        </button>
    )
}

export default ImageButton;