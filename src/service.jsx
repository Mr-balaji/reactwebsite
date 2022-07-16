import React from "react";
import Home from "./home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {Routes,Route} from "react-router-dom";
import Common from "./common";
import Card from "./Card";
import Sdata from "./sdata"

const Service = () =>{
return(
    <>
    <div className="  container-fluid  mt-3 ">
    <div className=" row">
    <div className="col-10 mx-auto">
    <div className="row gy-4">
      {
        Sdata.map((val,ind) => {
        return  <Card
          ind = {ind.index}
           imgscr = {val.imgsrc}
           title = {val.title}
           subtitle= {val.subtitle}
           />
        })
      }
      </div>
      </div>
      </div>
      </div>
    </>
)
}

export default Service;