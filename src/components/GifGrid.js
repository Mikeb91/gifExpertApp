import React, { useState, useEffect } from 'react';
import { getGifs } from '../utils/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs(category)
        //.then(imgs => setImages(imgs));
        .then(setImages); // - Esto es lo mismo que lo del comentario pues, al tener la referencia de la función setImages, esta última recibe como parámetro lo que recibe el .then, 
                          // por lo que funcionará igual.
    }, [category]);

    

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} // AL hacer esto se envía cada una de las propiedades de cada imagen como un elemento de los props
                        />
                    ))
                }
            </div>
        </>
    )
}
