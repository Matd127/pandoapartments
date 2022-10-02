import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const MyList = (props) => (
  <div>
    <div>
      <h2 className="col-mt-4">
          Featured Properties
      </h2>
    </div>

    {props.items.map((prop) => {
      return (
        <div>
          <div key={prop.Reference}>
            {prop.Reference} {prop.Location} {prop.AgencyRef}
            <Carousel interval={null}>
              {prop.Pictures.Picture.map((pic) => {
                return (
                  <Carousel.Item>
                    <img src={pic.PictureURL}></img>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      );
    })}
  </div>
);

export default MyList;
