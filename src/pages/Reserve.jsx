import React from 'react'
import FormRes from '../component/FormRes'
import { Imagen } from "../component/Imagen";
import { Col, Container, Row } from 'react-bootstrap'
export const Reserve = () => {
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col sm={4} >
            <FormRes />
          </Col>
          <Col sm={8} >
            <Imagen
              src={"./image/photo_contact.jpg"}
              width={"75%"}
              height={"auto"}
            />
          </Col>
        </Row>


      </Container>

    </>
  )
}
