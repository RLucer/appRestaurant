import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ima from '../component/Ima';
// import ButtonSend from '../component/ButtonSend';

export const Home = () => {
  return (
    <Container >
      <Row>
        <Col sm={12}><Ima /></Col>
    
      </Row>
      {/* <Row>
        <Col sm></Col>
        <Col sm></Col>
        <Col sm></Col>
      </Row> */}
    </Container>
  );
}
