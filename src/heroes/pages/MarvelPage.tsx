import React from 'react'
import { HeroesList } from '../components/HeroesList/HeroesList'

export const MarvelPage = () => {
  return (
    <>
      <h1 style={{marginLeft: "3rem"}}>Marvel Page</h1>
      <hr />
      <HeroesList publisher='Marvel Comics'></HeroesList>
    </>

  )
}
