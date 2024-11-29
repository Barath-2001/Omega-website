import React from "react";
import Navigation from "./Components/Navigation";
import Contact from "./Components/Contact";
import About from "./Components/About"
import Footer from "./Components/Footer";
import Products from "./Components/Products";
//import Blog from "./Components/Blog";
import Home from "./Components/Home";
import Projects from "./Projects/Projects";
import Cards from "./Card/Card";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";

function App() {
  return (
    
    <React.Fragment>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Products />
              <Projects />
              <About />
              <Contact />
              <Cards />
              <Footer />
            </>
          }>
          </Route> 
          <Route path="/product-detail" element={<ProductDetail/>}>
          </Route>           
        </Routes>
      </Router>
    </React.Fragment>
  );
}
export default App;
