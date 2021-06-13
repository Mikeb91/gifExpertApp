import { useState } from "react";

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; - // Así no se hace pq no queda dinámico, React no tiene forma de saber si se introdujo un nuevo valor. 
                                                                      // para esto se utiliza Hooks - En este caso useState

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const handleAdd = () => {
        //setCategories([...categories, 'Naruto']); //Usando desestructuración, la manera más sencilla. 
        setCategories((c)=>{
            let newCategories = categories.slice();  //También se puede utilizar el callback que recibe como parámetro el valor del estado anterior, 
            newCategories.push('Hunter X Hunter');   //Recordar que no se puede utilizar directamente el push sobre categories, pq es inmutable por React. 
            return newCategories;                    //por esta razón tocaría usar slice() sin parámetros para que retorne un nuevo array y no el puntero al mismo objeto. 
        })
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick = { handleAdd }>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>

    );
};
export default GifExpertApp;