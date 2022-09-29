import React from "react";

const MyList = props => (
    <div>
      <div>Lista:</div>
        {props.items.map((prop) => {
          return (
          <div>
                
                <div key={prop.Reference}>{prop.Reference} {prop.Location} {prop.AgencyRef}</div>                
          </div>
          )
        })}



    </div>
)

export default MyList