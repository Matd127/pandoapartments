import { React, Component } from "react";
import data from "../API.json";
import Slider from "../components/js/Slider";
import MyList from "../components/js/MyList";
import AboutUs from "../components/js/AboutUs";
import SmallFooter from "../components/js/SmallFooter";

class Home extends Component {
  state = {
    Property: [],
  };

  getData = async (e) => {
    // const dataLocation = e.target.elements.location.value;
    e.preventDefault();

    //Jeśli pracujesz na pliku to nie trzeba tego robić
    // const API_CALL = await fetch(`https://webapi.resales-online.com/V6/SearchProperties?p_agency_filterid=1&p1=${p1}&P_sandbox=true&p2=${API_KEY}&P_Location=${dataLocation}`)
    // const data = await API_CALL.json();
    // console.log(data.Property[0].Reference)

    this.setState({ Property: data.Property });
    console.log(this.state.Property);
    // console.log(this.state.Property[1].Pictures.Picture[0]);
  };

  render() {
    return (
      <div className="text-center">
        <Slider />
        <AboutUs />
        <MyList items={data.Property} />
      </div>
    );
  }
}

export default Home;
