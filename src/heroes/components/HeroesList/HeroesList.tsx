import React from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'

import {  Heroe } from '../../interfaces/interfaces'
import { HeroesItem } from '../HeroesItem/HeroesItem'
import './HeroesList.scss'
import 'animate.css'
interface Publisher {
    publisher: string;
}


export const HeroesList = ({publisher}:Publisher) => {
    const heroes = getHeroesByPublisher(publisher)
    return (
        <>
            <div className='heroesList'>
                {
                    heroes.map((heroe:Heroe) => {
                        return <HeroesItem key={heroe.id} heroe={heroe}/ >
                    })
                }
            </div>
        </>
    )
}
