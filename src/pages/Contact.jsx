import React from 'react'
import FormContact from '../component/FormContact'
import { Col, Container, Row } from 'react-bootstrap'

export const Contact = () => {
  return (
    <>
      <Container fluid="md" className="mt-5">
        <Row>
          <Col>   <FormContact /></Col>
        </Row>


      </Container>

    </>
  )
}
