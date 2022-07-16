import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img from  "../src/images/indexbg.jpg";

import Common from "./common";




const Home = () =>{
return(
    <>
      <Common 
        title="create your bussiness with Balaji Technical"
        subtitle="create your bussiness with your choice with us"
        button="getservice"
        imgsrc={img}
      />
    </>
)
}

export default Home;