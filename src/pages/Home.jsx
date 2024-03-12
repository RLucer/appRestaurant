import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ima from '../component/Ima';
// import ButtonSend from '../component/ButtonSend';

export const Home = () => {
  return (
    <Container className=''>
      <Row>
        <Col sm={12}><Ima /></Col>
        {/* <Col sm={4}>sm=4</Col> */}
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  );
}
