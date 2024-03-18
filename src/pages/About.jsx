import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import  './About.css';
import { Imagen } from "../component/Imagen";

export const About = () => {
  //pasamos la imagenes y las medidas por props

  return (
    <>
      <Container fluid="md" className="mt-2" >
  
        <Row>
          <Col sm={8} >
            <Imagen 
              src={"./src/assets/image/chef1.jpg"}
              width={"75%"}
              height={"auto"}
            />
          </Col>
          <Col sm={4}>
            <p className="text-just">
              ANDREA BERNARDI Andrea Bernardi, born on 5 July 1977 in Rome.
              Raised in Genzano di Roma, he learned the basics of Italian
              cuisine with his father’s sister Rita; they shared long hours in
              the kitchen. Due to his eagerness to learn more and acquire
              further knowledge, he did not finish his studies in Marino
              Catering School and became a self taught chef. At the age of 21 he
              started to travel between Austria and Germany, finally arriving in
              Spain where his gastronomic awakening took place. He has lived in
              the Canary Islands since 2005, when he started cooking
              professionally. He was named best chef of the Canary Islands and
              best Adecco chef of Spain in 2010 and by the end of the year he
              was awarded second Adecco chef in Europe. He has also been cawarded
              the following prizes: 2013 Nómada Restaurant. Best reinette apple
              dish award. 2015 Best Bacalao Giraldo dish. 2015 Spain and Canary
              Islands ACYRE award for gastronomy implication, dissemination and
              research. 2017 Michelin Star, NUB, San Cristóbal de la Laguna.
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col sm={4}>
            <p className="text-just">
              FERNANDA FUENTES CÁRDENAS Fernanda Fuentes Cárdenas was born in
              Quilpué, in the Valparaíso region of Chile, 34 years ago. She
              defines herself as a mixed race chef of acid roots, spicy soul and
              vegetable heart. She did her gastronomy studies at Chile
              Technological University, Inacap, where she graduated in 2007 as
              gastronomic production manager, obtaining a BTS degree by the
              French Ministry of Education, Toulouse Academy (France) and SFERE.
              While she was studying she did a six months internship at the
              Hotel Golf Peralada in Spain and then returned to Chile and was
              second chef at RAI Restaurant with Raimundo Tagle who taught her
              to respect produce and authenticity in the kitchen. She set off to
              Tenerife in 2011 to do an internship in Casa Albar with Andrea
              Bernardi, with whom she created an atmosphere of complicity in the
              kitchen while learning his technique and methodology. Her
              expertise in the world of desserts captivated Andrea, thus
              becoming his right hand chef until today. They are now husband and
              wife, as well as co-owners of NUB in Costa Adeje with a Michelin
              star.
            </p>
          </Col>
          <Col sm={8} align="right" >
            <Imagen
              src={"./src/assets/image/chef2.jpg"}
              width={"75%"}
              height={"auto"}
            />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          {/* ultimo set de fotos galeria */}
          <Col sm={12}>
            <hr />
            <h1 className="text-center">Picture Book</h1>
          </Col>

          <Col sm>
            <br />
            <Imagen src={"./src/assets/image/chef3.jpg"} width={300} height={300} />
          </Col>
          <br />
          <Col sm>
            <br />
            <Imagen src={"./src/assets/image/chef4.jpg"} width={300} height={300} />
          </Col>
          <br />
          <Col sm>
            <br />
            <Imagen src={"./src/assets/image/chef5.jpg"} width={300} height={300} />
          </Col>
          <br />
          <Col sm>
            <br />
            <Imagen src={"./src/assets/image/chef6.jpg"} width={300} height={300} />
          </Col>
          <br />
      
        </Row>
        <br /><br />
      </Container>
    </>
  );
};
