import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CategoryAdd = ({setCategories}) => {
    //variables
    const [inputValue, setInputValue] = useState('');

    //funciones
    const handlerValue = (e) => {
        setInputValue(e.target.value);
    }
    const handlerSubmit = (e) => {
        e.preventDefault()
        // console.log('enviado');
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
    }

    //retorno
    return (
        <form onSubmit={handlerSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handlerValue}
             />
        </form>
    );
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default CategoryAdd;
