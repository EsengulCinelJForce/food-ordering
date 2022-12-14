import React from "react";
import Campaings from "../../components/Campaings";
import Carousel from "../../components/Carousel";
import MenuWrapper from "../../components/products/MenuWrapper";
import About from "../../components/About";
import Reservation from "../../components/Reservation";
import Customerts from "../../components/customers/Customerts";

const Index = () => {
  return <React.Fragment className="m-28" >
    <Carousel/>
    <Campaings/>
    <MenuWrapper/>
    <About/>
    <Reservation/>
    <Customerts/>
  </React.Fragment>;
};

export default Index;
