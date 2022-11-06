import React from "react";
import Card from "react-bootstrap/Card";
import "../css/MyList.css";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import BathroomIcon from "@mui/icons-material/Bathroom";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import Button from "@mui/material/Button";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const MyList = (props) => (
  <div className="myList mt-3">
    <h1>Featured Properties</h1>

    <div className="myList__list">
      {props.items.slice(0, 6).map((prop) => {
        return (
          <Card
            border="0"
            className="cards myList__card m-2"
            key={prop.Reference}
          >
           {prop.Pictures.Picture[0].PictureURL === undefined ?  (
              <img src="none" alt="None"></img>
           ) : (
            <a href={`../Property/${prop.Reference}`}>
              <img src={prop.Pictures.Picture[0].PictureURL} alt={1}></img>
             </a>
           )}

            <div className="ref d-flex justify-content-end">
              Ref:{prop.Reference}
            </div>
            <div className="myList__title">
              {prop.PropertyType.NameType} in {prop.Location}, {prop.Province},{" "}
              {prop.Country}
            </div>
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
                <span>{prop.Built}m<sup>2</sup></span>
                
              </div>
            </div>
            <div className="d-flex p-3 justify-content-between align-items-center">
              <div>
                <h2>{prop.Price}€</h2>
              </div>
              <div>
                <a
                  href={`../Property/${prop.Reference}`}
                  id={prop.Reference}
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

    <div className="d-flex justify-content-center align-items-center mt-3">
      <Button
        className="myList__btn"
        href="/Properties"
        variant="outlined"
        color="error"
        sx={{ borderRadius: 0, fontSize: 18, padding: 2 }}
      >
        Zobacz wszystkie nieruchomości
      </Button>
    </div>
  </div>
);

export default MyList;
