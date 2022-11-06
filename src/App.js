import "./App.css";
import { react, Component } from "react";
import Header from "./components/js/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./routers/Home";
import Properties from "./routers/Properties";
import SmallFooter from "./components/js/SmallFooter";
import Property from "./routers/Property";
import ScrollToTop from "./components/js/ScrollToTop";
import "./components/css/Global.css"

//Umieścić to w pliku .env
const API_KEY = "8856af083f00c4fcd880a8b121341f7c41b1d4ec";
const p1 = "1026838";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Header/>
          
          <Routes>
              <Route path="/" element = {<Home></Home>} ></Route>
              <Route path="/Properties" element={<Properties></Properties>} ></Route>
              <Route path="/Property/:id" element={<Property></Property>}></Route>
          </Routes>
          <ScrollToTop />
          <SmallFooter/>
      </BrowserRouter>
    );
  }
}

export default App;
