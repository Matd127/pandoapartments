import React from 'react'

const Form = props => (
    <form className='pt' onSubmit={props.getData}>
        <input type="text" name="location" id=""/>
        <button>Search</button>
    </form>
)

export default Form