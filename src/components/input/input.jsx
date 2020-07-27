import React from 'react';

const Input = ({ placeholder, handleInputChange }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleInputChange}
    />
);

export default Input;