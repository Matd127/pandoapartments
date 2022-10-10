import React from 'react'
import {useState} from 'react';

const Form = (props) => {

    const [location, setLocation] = useState('')

    const handleChange = event => {
        setLocation(event.target.value)
    }
    const handleSubmit  = event => {
        event.preventDefault()
        props.onSubmit(location)
    }

    return(
        <div>
        <form className='pt-1' onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Location' 
            value={location}
            onChange={handleChange}
        >
        </input>
        <select className='m-2' disabled={true}>
            <option>Min Price</option>
            <option value={2000}>2000€</option>
            <option value={4000}>4000€</option>
            <option value={6000}>6000€</option>
            <option value={8000}>8000€</option>
            <option value={10000}>10000€</option>
        </select>
        <select className='m-2' disabled={true}>
            <option>Max Price</option>
            <option value={2000}>2000€</option>
            <option value={4000}>4000€</option>
            <option value={6000}>6000€</option>
            <option value={8000}>8000€</option>
            <option value={10000}>10000€</option>
        </select>
        <button type='submit'>Search</button>
        </form>
    </div>
    );
    
}

export default Form