

import Home from "./home";
import Service  from "./service";
import Navbar  from "./navbar";
import About from "./About";
import Contact from "./Contact";
import {Routes,Route} from "react-router-dom";

function Main() {
  return (
    <>
    <div className="maindiv">
    <Navbar />
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/service" element={<Service/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route  path="*" element={<Home/>} />
       </Routes>
       </div>
    </>
  );
}

export default Main;
