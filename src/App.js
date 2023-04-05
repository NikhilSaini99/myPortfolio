import { useEffect } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import AOS from "aos";

function App() {
  useEffect(()=>{
    AOS.init({duration:1000});
},[])

  return(
    <>
    <Navbar/>
    <Home/>
    <AboutMe/>
    <Projects/>
    <ContactMe/>
    <Footer/>
    </>
  )
}

export default App;
