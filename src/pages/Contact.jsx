import React from 'react'
import FormContact from '../component/FormContact'
import { Col, Container, Row } from 'react-bootstrap'
import SimpleMap from '../component/maps';
export const Contact = () => {
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col sm={8} >
            <SimpleMap />

          </Col>
          <Col sm={4} >
            <FormContact />
          </Col>
        </Row>


      </Container>

    </>
  )
}
