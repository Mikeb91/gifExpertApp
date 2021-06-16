import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url = 'http://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=WuM4HJU5aWmiRZ9mkmmSLU1xHqAZAck0';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        //console.log(data);
        setImages(gifs);
    }

    return (
        <>
            <h3>{category}</h3>
            {
                /* images.map((image) =>{
                    return(<li key={image.id}>{image.title}</li>); //Se puede reemplazar por el return implícito y de paso usar desestructuración: 
                }) */

                /*  images.map(({id, title}) => (
                     <li key={id}>{title}</li>
                 )) */
                // Se reemplaza esta funcionalidad con un componente aparte: 

                images.map(img => (
                    <GifGridItem
                    key= {img.id} 
                    {...img} // AL hacer esto se envía cada una de las propiedades de cada imagen como un elemento de los props
                    />
                ))

            }

        </>
    )
}
