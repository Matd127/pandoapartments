import './App.css';
import Form from './components/Form';
import {react, Component } from 'react';
import MyList from "./components/MyList";

const API_KEY = "8856af083f00c4fcd880a8b121341f7c41b1d4ec"
const p1 = "1026838"

class App extends Component{
 
state = {
  Property: []
}
getData = async (e) => {
  const dataLocation = e.target.elements.location.value
  e.preventDefault()
  const API_CALL = await fetch(`https://webapi.resales-online.com/V6/SearchProperties?p_agency_filterid=1&p1=${p1}&P_sandbox=true&p2=${API_KEY}&P_Location=${dataLocation}`)
  const data = await API_CALL.json();
  // console.log(data.Property[0].Reference)
  this.setState({Property : data.Property})
  console.log(this.state.Property)
}
  
  
  render(){
    return(
      <div className="App">

        <header className="App-header">
          <h2 className="App-title">Pando Apartments</h2>
        </header>

        
        <Form getData={this.getData}/>
        
         {this.state.Property.map((prop) => {
          return <MyList pictures={prop.Pictures}/>
        })} 
      </div>
    )
  }
}

export default App;
