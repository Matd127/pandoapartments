import React from "react";
import Card from "react-bootstrap/Card";
import "../css/PropertyList.css";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import BathroomIcon from "@mui/icons-material/Bathroom";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const PropertyList = (props) => {
  const showId = (event) => {
    console.log(event.target.id);
  };

  return (
    <div className="propertyList">
      <div className="propertyList__list">

      <div className="w-100 m-2">
        <div className="d-flex flex-column align-items-start"> 
          <h1>Lista nieruchomości</h1>
          <div className="line"></div>

          <div className="mt-3 d-flex justify-content-between mt-4">
            <span className="propertyList__info">Znaleziono {props.items.length} nieruchomości</span>          
          </div>
        </div>

      </div>

        {props.items.map((prop) => {
          return (
            <Card
              border="0"
              className="propertyList__card m-2"
              key={prop.Reference}
            >
              {prop.Pictures.Picture[0].PictureURL === undefined ? (
                <img src="none" alt="None"></img>
              ) : (
                <a href={`../Property/${prop.Reference}`}>
                  <img src={prop.Pictures.Picture[0].PictureURL} alt={1}></img>
                </a>
              )}

              <div className="ref d-flex justify-content-end">
                Ref:{prop.Reference}
              </div>
              <Card.Title className="pt-1">
                {prop.PropertyType.NameType} in {prop.Location}, {prop.Province}
                , {prop.Country}
              </Card.Title>
              <div className="d-flex justify-content-around align-items-center">
                <div className="d-flex flex-column">
                  <BedroomChildIcon color="disabled" sx={{ fontSize: 50 }}>
                    {" "}
                  </BedroomChildIcon>
                  {prop.Bathrooms}
                </div>
                <div className="d-flex flex-column">
                  <BathroomIcon color="disabled" sx={{ fontSize: 50 }}>
                    {" "}
                  </BathroomIcon>
                  {prop.Bathrooms}
                </div>
                <div className="d-flex flex-column">
                  <LocalParkingIcon color="disabled" sx={{ fontSize: 50 }}>
                    {" "}
                  </LocalParkingIcon>
                  {prop.Parking}
                </div>
                <div className="d-flex flex-column area">
                  <OpenInFullIcon color="disabled" sx={{ fontSize: 50 }}>
                    {" "}
                  </OpenInFullIcon>
                  <span>
                    {prop.Built}m<sup>2</sup>
                  </span>
                </div>
              </div>

              <div className="d-flex p-3 justify-content-around align-items-center">
                <div>
                  <h2>{prop.Price}€</h2>
                </div>
                <div>
                  <a
                    href={`../Property/${prop.Reference}`}
                    id={prop.Reference}
                    onClick={showId}
                    className="propertyList__button"
                  >
                    Dowiedz się więcej
                  </a>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyList;
