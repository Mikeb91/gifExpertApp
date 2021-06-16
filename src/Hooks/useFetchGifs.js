import { useEffect, useState } from "react";
import { getGifs } from "../utils/getGifs";

//custom hook encargado de gestionar la petición  obtención de imágenes.
export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {       //Recordar que se usa el useEffect para evitar que con cada actualización de estado de un componente se vuelva a ejecutar
        getGifs(category) //la petición una y otra vez, por el contrario este Hook permite indicar que únicamente se ejecute la petición cuando se  
            .then(imgs => {//cambie la dependencia "category", o en otras palabras cuando el estado de category cambie. 
                setstate({
                    data: imgs,
                    loading: false
                });
            })
    }, [category])

    return state; //{data: [], loading: true};
}