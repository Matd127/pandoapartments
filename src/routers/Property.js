import React from "react";
import data from "../API.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Property = () => {
    const params = useParams()
    const [Property, setProperty] = useState(data.Property);
    const selectedProperty = Property.find(el => el.Reference === params.id)

    console.log(selectedProperty)

    return (
       <div className="d-flex justify-content-center align-items-center flex-column">
            <a href="/Properties">Powrót do wyników wyszukiwania</a>
            <h1>{selectedProperty.PropertyType.NameType} in {selectedProperty.Location}, {selectedProperty.Province}, {selectedProperty.Country}</h1>
       </div>
    )
}

export default Property