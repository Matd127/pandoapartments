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

    <div className="d-flex justify-content-center flex-wrap align-items-center">
    {props.items.map((prop) => {
      return (
        <Card className="cardStyle m-2" key={prop.Reference}>
            <Carousel interval={null}>
              {prop.Pictures.Picture.map((pic) => {
                return (
                  <Carousel.Item>
                    <img src={pic.PictureURL}></img>
                  </Carousel.Item>
                );
              })}
            </Carousel>

            <Card.Title>{prop.Location}</Card.Title>
            Ref:{prop.Reference}

        </Card>
      );
    })}
    </div>
    
  </div>
);

export default MyList;
