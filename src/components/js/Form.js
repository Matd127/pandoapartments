import React from 'react'
import '../css/Form.css'


const Form = props => (
    <form className='pt' onSubmit={props.getData}>
        <input type="text" name="location" id="" placeholder="Location or reference..."/>
        <select className='m-2'>
            <option>Property Type</option>
        </select>
        <select className='m-2'>
            <option>Area</option>
        </select>
        <select className='m-2'>
            <option>Min Price</option>
        </select>
        <select className='m-2'>
            <option>Max Price</option>
        </select>
        <button className='button'>Search</button>
    </form>
)

export default Form