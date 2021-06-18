import React from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type'; // permite validar no solamente si hay un String sino que valida si es una URL válida

export const GifGridItem = ({ title, url }) => {
    //console.log(id, title, url);
    return (
        <div className = "card animate__animated animate__fadeIn"> {/* //Como class es una palabra reservada de JS se dejó la palabra className para lo que corresponde a clases de CSS */}
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: urlPropType.isRequired
}