import React from "react";
import Card from "react-bootstrap/Card";
import "../css/MyList.css";

const MyList = (props) => (
  <div className="myList mt-3">
    <div>
      <h1>Featured Properties</h1>
    </div>

    <div className="myList__list">
      {props.items.slice(0,6).map((prop) => {
        return (
          <Card border="0" className="cards m-2" key={prop.Reference}>
            {prop.Pictures.Picture.map((pic) => {
              if (pic.Id === 1) {
                return (
                  <img src={pic.PictureURL} alt={pic.Id} key={pic.Id}></img>
                );
              }
              // else{
              //   return(
              //     <img src="" alt="noImage"></img>
              // )
              // }
            })}
            <Card.Title className="p-1">{prop.PropertyType.NameType} in {prop.Location}, {prop.Province}, {prop.Country}</Card.Title>
            <div className="ref d-flex justify-content-end">
              Ref:{prop.Reference}
            </div>
          </Card>
        );
      })}
    </div>

    <div className="d-flex justify-content-center align-items-center">
        <a href="/Properties" className="myList__button">Zobacz wszystkie nieruchomości</a>
    </div>
  </div>
);

export default MyList;
