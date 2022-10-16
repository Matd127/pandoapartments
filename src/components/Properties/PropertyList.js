import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import '../css/PropertyList.css'

const PropertyList = props => {
    return(
        <div className="propertyList">
        {props.items.map((prop) => {
          return (
            <Card border="0" className="m-2" key={prop.Reference}>
                <Carousel className="item" indicators={false} interval={null}>
                  {prop.Pictures.Picture.map((pic) => {
                    return (
                      <Carousel.Item>
                        <img src={pic.PictureURL} alt={pic.Id}></img>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
    
                <Card.Title className="pt-1">{prop.Location}</Card.Title>
                <div className="ref d-flex justify-content-end">Ref:{prop.Reference}</div>
    
            </Card>
          );
        })}
        </div>
    )
}

export default PropertyList