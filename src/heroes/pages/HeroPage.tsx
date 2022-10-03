import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { HeroesDetail } from '../components/HeroesDetail/HeroesDetail'
import { getHeroById } from '../helpers/getHeroById'

export const HeroPage = () => {
  const params = useParams()
  console.log(params.heroId)
 const hero = getHeroById(`${params.heroId}`);
 console.log(hero)
 if(!hero){
  return <Navigate to={'/'}/>
 }
  return (
    <HeroesDetail hero={hero}/>
  )
}
