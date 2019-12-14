import React, {useEffect, useState} from 'react';
import './App.css';
require('dotenv').config()


const App = () => {
  const app_id = process.env.APP_ID
  const app_key = process.env.APP_KEY


  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`
    )
    const data = await response.json()
    console.log(data)
  }

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button
          className="search-button"
          type="submit"
        >
          Search
        </button>
        <h2 onClick={() => setCounter(counter + 1)}>{counter}</h2>
      </form>
    </div>
  )
}

export default App;
