import React from 'react'
import FormContact from '../component/FormContact'
import { Col, Container, Row } from 'react-bootstrap'
import { Imagen } from "../component/Imagen";
export const Contact = () => {
  return (
    <>
      <Container className="mt-2">
        <Row>
        <Col sm={8} >
            <Imagen 
              src={"./src/assets/image/photo_contact.jpg"}
              width={"75%"}
              height={"auto"}
            />
          </Col>
          <Col sm={4} >
            <FormContact />
          </Col>
        </Row>


      </Container>

    </>
  )
}
