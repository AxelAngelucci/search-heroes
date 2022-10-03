import React from 'react'
import { Link } from 'react-router-dom'
import { Heroe } from '../../interfaces/interfaces'
import './HerosItem.scss'

interface HeroesItemProps {
    heroe: Heroe
}

export const HeroesItem = ({heroe}:HeroesItemProps) => {
    
  return (
    
    <Link className='heroCard' to={`/hero/${heroe.id}`} >
        <img src={`../../../../assets/heroes/${heroe.id}.jpg`} alt="" className='heroImage' />
        <div className='heroName'>
            <h3>{heroe.superhero}</h3>
            <p>{heroe.alter_ego}</p>
        </div>
        <div className='heroPublisher'>
            <h4>{heroe.publisher}</h4>
            <p>primera aparición:</p>
            <p>{heroe.first_appearance}</p>
        </div>
        
    </Link>
  )
}
//style={{backgroundImage: `url(../../../../assets/heroes/${heroe.id}.jpg)`}}