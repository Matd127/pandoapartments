import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import '../css/PropertyList.css'
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import BathroomIcon from '@mui/icons-material/Bathroom';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { Link } from "react-router-dom";
import Property from "../../routers/Property";

const PropertyList = props => {

    const [Item, setItem] = useState(props.items)

    const showId = (event) => {
      console.log(event.target.id)
    }

    return(
        <div className="propertyList">
        {props.items.map((prop) => {
          return (
            <Card border="0" className="m-2" key={prop.Reference}>
                <Carousel className="item" indicators={false} interval={null}>
                  {prop.Pictures.Picture.map((pic) => {
                    return (
                      <Carousel.Item key={pic.Id}>
                        <img src={pic.PictureURL} alt={pic.Id}></img>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>

                <div className="ref d-flex justify-content-end">Ref:{prop.Reference}</div>
                <Card.Title className="pt-1">{prop.PropertyType.NameType} in {prop.Location}, {prop.Province}, {prop.Country}</Card.Title>
                <div className="d-flex justify-content-around align-items-center">
                  <div className="d-flex flex-column">
                    <BedroomChildIcon color="disabled" sx={{ fontSize: 50}}> </BedroomChildIcon>
                    {prop.Bathrooms}
                  </div>
                  <div className="d-flex flex-column">
                    <BathroomIcon color="disabled" sx={{ fontSize: 50}}> </BathroomIcon>
                    {prop.Bathrooms}
                  </div>
                  <div className="d-flex flex-column">
                    <LocalParkingIcon color="disabled" sx={{ fontSize: 50}}> </LocalParkingIcon>
                    {prop.Parking}
                  </div>
                </div>

                <div className="d-flex p-3 justify-content-around align-items-center">
                    <div>
                      <h2>€ {prop.Price}</h2>
                    </div>
                    <div> 
                      <a href={`../Property/${prop.Reference}`} id={prop.Reference} onClick={showId} className="propertyList__button">Dowiedz się więcej</a>
                    </div>
                </div>

                <Card.Text>
                  
                </Card.Text>
                   
            </Card>
          );
        })}
        </div>
    )
}

export default PropertyList