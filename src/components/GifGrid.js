import React from 'react';
import { useFetchGifs } from '../Hooks/useFetchGifs';
/* import { getGifs } from '../utils/getGifs'; */
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading ...</p>}
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
