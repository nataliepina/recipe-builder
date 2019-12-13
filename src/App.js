import React, {useEffect, useState} from 'react';
import './App.css';
require('dotenv').config()


const App = () => {
  const app_id = process.env.APP_ID
  const app_key = process.env.APP_KEY

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('effect has been run')
  })

  return(
    <div className="App">
      <form className="search-form">
        <input type="search-bar" />
        <button className="search-button">Submit</button>
      </form>
    </div>
  )
}

export default App;
