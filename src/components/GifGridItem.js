import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
    //console.log(id, title, url);
    return (
        <div className = "card animate__animated animate__fadeIn"> {/* //Como class es una palabra reservada de JS se dejó la palabra className para lo que corresponde a clases de CSS */}
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
