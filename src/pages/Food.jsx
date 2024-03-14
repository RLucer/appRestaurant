import React from 'react'
import Cards from '../component/Cards'
import { Container } from 'react-bootstrap'
import menu from "../menu.json";

export const Food = () => {
  return (
    <>
      <Container>
        <Cards data={menu}/>


      </Container>


    </>
  )
}
