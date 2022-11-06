import React from "react";
import data from "../API.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import '../components/css/Property.css'

const Property = () => {
  const params = useParams();
  const [Property, setProperty] = useState(data.Property);
  const selectedProperty = Property.find((el) => el.Reference === params.id);

  console.log(selectedProperty.Pictures.Picture[0]);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column container-xxl">
      <a href="/Properties">Powrót do wyników wyszukiwania</a>

      <div className="d-flex justify-content-between">
        <div className="property__slider m-2">
          <Carousel keyboard={true} interval={null}>
            {selectedProperty.Pictures.Picture.map((pic) => {
              return (
                <Carousel.Item>
                  <img src={pic.PictureURL} alt={pic.Id}></img>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className="property__info p-5 bg-light m-2">
            {selectedProperty.Reference}
            <h2>€ {selectedProperty.Price}</h2>
            Rodzaj: 
            <div className="number">{selectedProperty.PropertyType.NameType}</div>

            Sypialnie: 
            <div className="number">{selectedProperty.Bedrooms}</div>

            Łazienki: 
            <div className="number">{selectedProperty.Bathrooms}</div>

            Parking: 
            <div className="number">{selectedProperty.Parking}</div>

            Basen: 
            <div className="number">{selectedProperty.Pool}</div>

            Ogródek: 
            <div className="number">{selectedProperty.Garden}</div>

            Powierzchnia(m<sup>2</sup>): 
            <div className="number">{selectedProperty.Built}</div>


        </div>      
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center p-2">
        <h1>
          {selectedProperty.PropertyType.NameType} in {selectedProperty.Location},{" "}
          {selectedProperty.Province}, {selectedProperty.Country}
      </h1>

      <div>
            {selectedProperty.Description}
      </div>
        </div>
    </div>
  );
};

export default Property;
