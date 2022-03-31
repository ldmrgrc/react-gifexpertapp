import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setCategories(catg => [inputValue, ...catg ]);
        }
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                placeholder='Ingresa una Categoria'
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
