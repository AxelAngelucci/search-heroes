import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Heroe } from '../../interfaces/interfaces'
import './HeroesDetail.scss'
import 'animate.css';
interface HeroesDetailProps{
    hero: Heroe
}
export const HeroesDetail = ({hero}:HeroesDetailProps) => {
    const navigate = useNavigate()
    const handleNavigateBack = () => {
        navigate(-1)
    }
  return (
    <div className='heroDetail'>
        <div className='heroDetailImage animate__animated animate__backInLeft'>
            <img src={`../../../../assets/heroes/${hero.id}.jpg`} alt="" />
        </div>
        <div className='heroDetailContent animate__animated animate__backInRight'>
            <h3>{hero.superhero}</h3>
            <p><b>Alter ego: </b>{hero.alter_ego}</p>
            <hr />
            <p><b>Publisher: </b>{hero.publisher}</p>
            <hr />
            <p><b>First apperance: </b>{hero.first_appearance}</p>
            <hr />
            <h3>Characters</h3>
            <p>{hero.characters}</p>
            <button onClick={handleNavigateBack}>Back</button>
        </div>

    </div>
  )
}
