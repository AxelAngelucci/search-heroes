import React from 'react'
import { HeroesList } from '../components/HeroesList/HeroesList';

export const DCPage = () => {


  
  return (
    <>
      <h1 style={{marginLeft: "3rem"}}>DC Commics</h1>
      <hr />
      <HeroesList publisher={"DC Comics"}></HeroesList>
    
    </>
  )
}
