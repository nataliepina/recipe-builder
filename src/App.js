import React, {useEffect, useState} from 'react'
import Recipe from './Recipe'
import './App.css'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('recipe')

  const app_id = process.env.REACT_APP_API_ID
  const app_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    getRecipes()
  }, [query])

  const ENDPOINT = `/search?q=${query}&app_id=${app_id}&app_key=${app_key}`

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
      <h1><i className="fas fa-utensils"/> Recipe Search</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search by: ingredient, cuisine, diet, etc..."
        />
        <button
          className="search-button"
          type="submit"
        >
          Search
        </button>
      </form>
      {recipes.map(recipe => (
      <div className="recipes" onClick={e => window.location.href=recipe.recipe.url}>
        <Recipe 
          title={recipe.recipe.label}
          calories={"Total Calories: " + Math.floor(recipe.recipe.calories)}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          key={recipe.id}
        />
      </div>
      ))}
    </div>
  )
}

export default App
