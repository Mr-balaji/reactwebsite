import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";






const Common = (props) =>{
return(
    <>
      <div className="maindiv flex col-10">
      <div className="container column mt-5 mr-6 row"  >
        <div className=" resp container column mt-5 mr-6 col-5  ">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <NavLink to="/service" className="btn ">{props.button}</NavLink>
            
        </div>
        <img className="animated" src={props.imgsrc} alt={props.imgsrc} />
        </div>
      </div>
    </>
)
}

export default Common;