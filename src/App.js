import "./App.css";
import { react, Component } from "react";
import Header from "./components/js/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Properties from "./pages/Properties";

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
          </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
