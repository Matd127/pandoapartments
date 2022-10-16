import React, {useState } from "react";
import Form from "../components/Properties/Form";
import data from '../API.json'
import PropertyList from "../components/Properties/PropertyList";

const Properties = () => {

    const [Property, setProperty] = useState(data.Property)

    const getValue = val => {
        const filteredProperties = data.Property.filter(loc => loc.Location.includes(val.toString()))
        setProperty(filteredProperties)
    }

    return(
            <div className="App">
                <Form items = {data.Property} onSubmit={getValue}/>
                <PropertyList items = {Property}/>
            </div>
        )
}

export default Properties