import React from 'react'
import {useState} from 'react';

const Form = () => {

    const [location, setLocation] = useState('')

    const handleSubmit  = event => {
        setLocation(event.target.value)
        console.log('value is:', location);
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Location' 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
        >
        </input>
        <button type='submit'>Search</button>
        </form>
    </div>
    );
    
}

export default Form