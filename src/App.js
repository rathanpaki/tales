import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import PreHeader from "./Components/PreHeader";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ImageCarousel from "./Components/ImageCarousel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<> <PreHeader /> <Header /> <Home /> <Footer/> </>} />
        <Route path="/about" element={<> <PreHeader /> <Header /> <About /> <Footer/> </>} />
        <Route path="/faq" element={<> <PreHeader /> <Header /> <FAQ/> <Footer/> </>} />
        <Route path="/contact" element={<> <PreHeader /> <Header /> <Contact /> <Footer/> </>} />
        <Route path="/ImageCarousel" element={<><PreHeader/><Header/><ImageCarousel/><Footer/></>}/>
      </Routes>
    </Router>
  );
}

export default App;