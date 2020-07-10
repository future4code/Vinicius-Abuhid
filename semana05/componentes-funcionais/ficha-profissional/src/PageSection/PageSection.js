import React from 'react';
import './PageSection.css';

function PageSection(props){
    return (
        <div>
        <div id="divtitulopgsection">
        <h1>{props.titulozao}</h1>
        </div>
        {props.children}
        </div>
    )
}

export default PageSection;