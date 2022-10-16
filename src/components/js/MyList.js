import React from "react";
import Card from "react-bootstrap/Card";
import '../css/MyList.css'

const MyList = (props) => (
  <div className="mt-5">
    <div>
      <h3>
          Featured Properties
      </h3>
    </div>

    <div className="myList">
    {props.items.map((prop) => {
      return (
        <Card border="0" className="cards m-2" key={prop.Reference}>
              {prop.Pictures.Picture.map((pic) => {
                if(pic.Id === 1){
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
            <Card.Title className="p-1">{prop.Location}</Card.Title>
            <div className="ref d-flex justify-content-end">Ref:{prop.Reference}</div>
        </Card>
      );
    })}
    </div>
  </div>
);

export default MyList;
