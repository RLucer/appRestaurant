import React from 'react'
import FormContact from '../component/FormContact'
import { Col, Container, Row } from 'react-bootstrap'
import MapaGoogle from '../component/maps';
export const Contact = () => {
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col sm={7} >
          <MapaGoogle center={{ lat: -33.732599, lng: -70.914120 }} zoom={13} />
          </Col>
          <Col sm={5} >
            <FormContact />
          </Col>
        </Row>


      </Container>

    </>
  )
}
