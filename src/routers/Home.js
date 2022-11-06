import { React, useState } from "react";
import data from "../API.json";
import Slider from "../components/js/Slider";
import MyList from "../components/js/MyList";
import AboutUs from "../components/js/AboutUs";
import BigFooter from "../components/js/BigFooter"

const Home = () => {
  const [property, setProperty] = useState([])

  const getData = async (event) => {
    // const dataLocation = e.target.elements.location.value;
    event.preventDefault();

    //Jeśli pracujesz na pliku to nie trzeba tego robić
    // const API_CALL = await fetch(`https://webapi.resales-online.com/V6/SearchProperties?p_agency_filterid=1&p1=${p1}&P_sandbox=true&p2=${API_KEY}&P_Location=${dataLocation}`)
    // const data = await API_CALL.json();
    // console.log(data.Property[0].Reference)
    setProperty(data.Property)
  };

    return (
      <div className="text-center">
        <Slider />
        <AboutUs />
        <MyList items={data.Property} />
        <BigFooter></BigFooter>
      </div>
    );
}

export default Home;
