import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import '../css/MyList.css'

const MyList = (props) => (
  <div>
    <div>
      <h2 className="p-3">
          Featured Properties
      </h2>
    </div>

    <div className="container d-flex justify-content-between flex-wrap align-items-center">
    {props.items.map((prop) => {
      return (
        <Card className="cardStyle m-2" key={prop.Reference}>
            <Carousel indicators={false} interval={null}>
              {prop.Pictures.Picture.map((pic) => {
                return (
                  <Carousel.Item>
                    <img src={pic.PictureURL}></img>
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
    
  </div>
);

export default MyList;
