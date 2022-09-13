import React from "react";

const MyList = props => (
    <div>
        {props.Property.map((prop) => {
          return (
          <div>
                <div key={prop.Reference}>{prop.Location} {prop.AgencyRef}</div>                
          </div>
          
          )
        })}



    </div>
)

export default MyList