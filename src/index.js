import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./Main";
import "./index.css";

const root = createRoot(document.getElementById("root"));



root.render(
  <> 
 

    <BrowserRouter>
    <Main />
     
    </BrowserRouter>
    </>
)