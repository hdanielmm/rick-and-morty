import React, { useState } from 'react'

export const SearchEngine = () => {
  const [results, setResults] = useState()

  const API = 'https://rickandmortyapi.com/api/'

  const fetchApi = (value) => {
    return fetch(API + value)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setResults(data.results)
      })
  }

  const handleClick = (event) => {
    const name = event.target.name
    fetchApi(name)
  }

  return (
    <div id="search-engine">
      <input
        className="search-engine__button--get-characters"
        type="submit"
        name="character"
        value="Character"
        onClick={handleClick}
      />
      <input
        className="search-engine__button--get-locations"
        type="submit"
        name="location"
        value="Location"
        onClick={handleClick}
      />
      <input
        className="search-engine__button--get-episodes"
        type="submit"
        name="episode"
        value="Episode"
        onClick={handleClick}
      />
      <ul className="search-engine__list--results">
        {
          results &&
          results.map((result, index) =>
            <li key={index} className="search-engine__list--result">
              {result.name}
            </li>
          )
        }
      </ul>


    </div>
  )
}
