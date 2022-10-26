import React, { useState } from "react";
import Form from "../components/Properties/Form";
import data from "../API.json";
import PropertyList from "../components/Properties/PropertyList";

const Properties = () => {
  const [Property, setProperty] = useState(data.Property);

  const getValue = (val) => {
    const filteredProperties = data.Property.filter((loc) =>
      loc.Location.includes(val.location.toString())
    )
      .filter((type) =>
        type.PropertyType.NameType.includes(val.propertyType.toString())
      )
      .filter((minPric) => Number(minPric.Price) >= Number(val.minPrice))
      .filter((maxPric) => Number(maxPric.Price) < Number(val.maxPrice));
    setProperty(filteredProperties);
  };

  return (
    <div className="App">
      <Form items={data.Property} onSubmit={getValue} />
      <PropertyList items={Property} />
    </div>
  );
};

export default Properties;
