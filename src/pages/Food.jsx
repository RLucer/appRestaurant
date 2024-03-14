import React from 'react'
import Cards from '../component/Cards'
import { Container } from 'react-bootstrap'
import menu from "../menu.json";

export const Food = () => {
  return (
    <>
      <Container>
        <Cards data={menu.platos} color={"bg-success text-white"}/>

        <Cards data={menu.bebestible} color={"bg-danger text-white"}/>
      </Container>


    </>
  )
}
