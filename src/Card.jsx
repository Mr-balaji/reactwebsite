import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const  Card = (props) =>{
    return(
    <>
    <div className="container col-10 mt-3">
        <div className="card col-10 " style={{width:"18rem"}}>
  
  <div className="card-body col-10 ">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.subtitle}</p>
    <a href="#" className="btn btn-primary" style={{color:"black"}}>Go somewhere</a>
  </div>
</div>
</div>

    </>
    )
}

export default Card;