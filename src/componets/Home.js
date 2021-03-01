import { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import "../App.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput,
} from "mdbreact";

import ProductDescription from "./ProductDescription";
import About from "./about";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Partners from "./Partners";
import Productfeature from "./productfeature";
const Home = () => {
  return (
    <div>
      <header className="head_content" id="productdescription" >
        <ProductDescription />
      </header>
      <section >
        <About />
      </section>
      <section id="pricing" className="price">
        <Pricing />
      </section>
      <section >
        <Productfeature/>
      </section>
      
    
      <section id="#contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
