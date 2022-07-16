import React from "react";
import img from "../src/images/pastry.jpg";
import Common from "./common";

const About = () =>{
    return(
        <>
          <Common 
        title="this is the technology build by balaji technology"
        subtitle="create your bussiness with your chise with us"
        button="getservice"
        imgsrc={img}
      />
        </>
    )
}

export default About;