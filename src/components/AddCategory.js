import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => { //Recordar que aquí se reciben los Props,en este caso de estestructura para obtener la función directamente

    const [inputValue, setInputValue] = useState(""); //Si se deja úncamente useState(), enviará un error ya que el valor del estado inicial es undefined, luego nosotros lo estamos 
                                                    //definiendo. Esto no debería pasar. Por esta razón se debe "inicializar" como string vacío. 

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //Previene la actualización automática del navegador que hace el form justo al hacer submit (presionar enter). 
        if ( inputValue.trim().length > 2 ){
            setCategories(categs => [...categs, inputValue]);
            setInputValue('');
        }
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = { //Regla para que el componente por obligación reciba una función en los props. 
    setCategories: PropTypes.func.isRequired
}
