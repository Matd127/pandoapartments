import React from 'react'
import '../css/Form.css'
import { Button } from 'react-bootstrap'

const Form = props => {
    // <form className='pt' onSubmit={props.getData}>
    //     <input type="text" name="location" id="" placeholder="Location or reference..."/>
    //     <select className='m-2'>
    //         <option>Property Type</option>
    //     </select>
    //     <select className='m-2'>
    //         <option>Area</option>
    //     </select>
    //     <select className='m-2'>
    //         <option>Min Price</option>
    //     </select>
    //     <select className='m-2'>
    //         <option>Max Price</option>
    //     </select>
    //     <button className='button'>Search</button>
    // </form>
    return(
        <div className='form'>
            <div className='d-flex justify-content-center'> 
            <Button variant="warning" className='w-25 mt-1'><a className='form' href="/Properties">Check what we offer</a></Button>
        </div>
        </div>
    )
}

export default Form