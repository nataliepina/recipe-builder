import React, {useEffect, useState} from 'react'
import Recipe from './Recipe'
import './App.css'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [query])

  const ENDPOINT = `/search?q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`

  const getRecipes = async () => {
    const response = await fetch(ENDPOINT)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    // prevent search from updating on every key entered
    e.preventDefault()
    setQuery(search)
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button
          className="search-button"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
        ))}
      </div>
    </div>
  )
}

export default App
