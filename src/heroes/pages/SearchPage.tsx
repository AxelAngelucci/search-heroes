import React, { FormEvent, FormEventHandler, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import './SearchPage.scss'
import { getHeroByName } from '../helpers/getHeroByName';
import { HeroesItem } from '../components/HeroesItem/HeroesItem';

interface FormState {
  query: string;
}

export const SearchPage = () => {
  const [formState, setFormState] = useState({} as FormState);
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);
  console.log(query.q)

  const handleSearchSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`?q=${formState.query}`);
  }

  const heroes = getHeroByName(query.q as string);
  console.log(heroes)

  const handleInputChange = (e:FormEvent<HTMLInputElement>) => {
    setFormState ({
      ...formState,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }
  
  return (
    <>
    <div className="searchContainer">
      <div className="search">
        <h1>Search</h1>
        <hr />
        <form onSubmit={handleSearchSubmit}>
          <input type="text" name='query' onChange={handleInputChange}/>
          <br />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="resoults">
        <h1>Resoults</h1>
        <hr />
        {
          (query.q === undefined || query.q === "") ? <div className='resoultsAlert'><p>Search a Hero</p></div> : <div></div>
        }

        {
          (heroes.length === 0) ? <div className='resoultsError'><p>No resoults for <b>{query.q}</b> </p></div> : <div></div>
        }
        
        
        <ul>
          {
            heroes.map( heroe => <li key={heroe.id}><HeroesItem heroe={heroe}/></li>)
          }
        </ul>
      </div>

    </div>
    
    </>
  )
}
