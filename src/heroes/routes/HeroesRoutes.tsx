import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../../auth/pages/LoginPage'
import { NavBar } from '../../UI/components/NavBar/NavBar'
import { DCPage } from '../pages/DCPage'
import { HeroPage } from '../pages/HeroPage'
import { MarvelPage } from '../pages/MarvelPage'
import { SearchPage } from '../pages/SearchPage'

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path="marvel" element={<MarvelPage/>}/>
            <Route path="dc" element={<DCPage/>}/>
            <Route path="search" element={<SearchPage/>} />
            <Route path="hero/:heroId" element={<HeroPage/>} />
            <Route path="/" element={<Navigate to="/marvel"/>}/>

        </Routes>
    </>
  )
}
