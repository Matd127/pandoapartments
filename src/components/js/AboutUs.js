import React from "react";
import apartments from "../img/apartments.jpg";
import "../css/AboutUs.css";

const Aboutus = () => {
  return (
    <div>
      <div className="w-100 mt-5"><h2>Sales of Properties in Spain on the Costa Del Sol</h2></div>
       <div className="aboutus size d-flex">
      <div className="d-flex justify-content-center align-items-center">
        <img src={apartments} alt="Apartments" className="p-2"></img>
      </div>
      <div className="p-4">
        <div className="pt-2 ">
        <p>If you wish to sell your property do not hesitate to assign this task to us – we cooperate locally with a number of realtors, who will be at your disposal.</p>
        <p>Property for sale in Spain on the Costa Del Sol.  
            Search over 25,000 properties including apartments and houses in Marbella, Puerto Banus, Estepona, Nueva Andalucia, Benalmadena, Mijas Calahonda, Malaga, and many more on the Spanish coast !</p>
        <p>Purchases of properties in Spain. If you are interested in purchasing a property in Spain’s Costa del Sol you are in the right place – we have many interesting, pre-selected properties in our offer. If you are searching for something unique do not hesitate to contact us – we will try to find what you are looking for. Now is the time – while the Spanish real estate market is down, to buy your piece of real estate; it is season here all year round.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Aboutus;
