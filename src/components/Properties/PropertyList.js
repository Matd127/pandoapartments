import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const PropertyList = props => {
    return(
        <div className="container d-flex justify-content-center flex-wrap align-items-center">
        {props.items.map((prop) => {
          return (
            <Card className="cardStyle m-2" key={prop.Reference}>
                <Carousel indicators={false} interval={null}>
                  {prop.Pictures.Picture.map((pic) => {
                    return (
                      <Carousel.Item>
                        <img src={pic.PictureURL} alt={pic.Id}></img>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
    
                <Card.Title>{prop.Location}</Card.Title>
                <div className="ref d-flex justify-content-end">Ref:{prop.Reference}</div>
    
            </Card>
          );
        })}
        </div>
    )
}

export default PropertyList