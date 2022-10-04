import "./App.css";
import Form from "./components/js/Form";
import { react, Component } from "react";
import MyList from "./components/js/MyList";
import data from "./API.json";
import Header from "./components/js/Header";
import Slider from "./components/js/Slider";


//Umieścić to w pliku .env
const API_KEY = "8856af083f00c4fcd880a8b121341f7c41b1d4ec";
const p1 = "1026838";


class App extends Component {
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
    console.log(this.state.Property)
    // console.log(this.state.Property[1].Pictures.Picture[0]);
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <Slider/>
          <Form getData={this.getData}/>
          <MyList items={data.Property}/>
       

      </div>
    );
  }
}

export default App;
