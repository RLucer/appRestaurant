import React from 'react'
import Cards from '../component/Cards'
import { Container } from 'react-bootstrap'
import menu from "../menu.json";

export const Food = () => {
  return (
    <>
      <Container className="mt-2">
        <Cards data={menu.platos} color={"p-2 mb-2  bg-secondary text-white"}/>

        <Cards data={menu.bebestible} color={"p-2 mb-2 bg-dark text-white"}/>
      </Container>


    </>
  )
}
