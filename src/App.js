import React from "react";
import Intro from "./components/Intro";
import Product from "./components/Product";
import NavigationBarComponent from "./components/NavigationBarComponent";
import "./style/landingpage.css";
import ShippingRate from "./components/ShippingRate";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBarComponent />
        <Intro />
      </div>

      <div className="product">
        <Product />
      </div>

      <div className="shipping">
        <ShippingRate />
      </div>
    </div>
  );
}

export default App;
