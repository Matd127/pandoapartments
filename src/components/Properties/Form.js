import React from "react";
import { useState } from "react";
import '../css/Form.css'

const Form = (props) => {
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(12000);
  const [propertyType, setPropertyType] = useState("");

  //Unikalne wartosci do formularza
  const allTypes = Array.from(new Set(props.items.map((t) => t.PropertyType.NameType)))
  const allLocations = Array.from(new Set(props.items.map((l) => l.Location)))

  const dataForFilter = {
    location: location,
    minPrice: minPrice,
    maxPrice: maxPrice,
    propertyType: propertyType,
  };

  const locationChangeHandler = (event) => {
    setLocation(event.target.value);
  };
  const minPriceChangeHandler = (event) => {
    setMinPrice(event.target.value);
  };
  const maxPriceChangeHandler = (event) => {
    setMaxPrice(event.target.value);
  };
  const propertyTypeChangeHandler = (event) => {
    console.log(event.target.value);
    setPropertyType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataForFilter);
    props.onSubmit(dataForFilter);
  };

  return (
    <div className="form__container">
      <form className="pt-1" onSubmit={handleSubmit}>
        <select onChange={locationChangeHandler}>
          <option value="">Select Location</option>
          {allLocations.map((location) => {
            return (
              <option key={location} value={location}>{location}
              </option>
            );
          })}
        </select>

        <select className="decorated" onChange={propertyTypeChangeHandler}>
          <option value="">Select Property</option>
          {allTypes.map((type) => {
             return(
                 <option key={type} value={type}>{type}</option>
            );
          })}
        </select>

        <select onChange={minPriceChangeHandler}>
          <option value={0}>Min Price</option>
          <option value={2000}>2000 €</option>
          <option value={4000}>4000 €</option>
          <option value={6000}>6000 €</option>
          <option value={8000}>8000 €</option>
          <option value={10000}>10000 €</option>
        </select>

        <select onChange={maxPriceChangeHandler}>
          <option value={12000}>Max Price</option>
          <option value={4000}>4000 €</option>
          <option value={6000}>6000 €</option>
          <option value={8000}>8000 €</option>
          <option value={10000}>10000 €</option>
          <option value={12000}>12000 €</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
