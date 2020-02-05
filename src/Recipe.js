import React from 'react'
import style from './recipe.module.css'

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} 

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className="recipe-title">{title}</h1>
            <ul>
              {ingredients.map(ingredient => (
                <li className={style.igredients}>
                  {ingredient.text}
                </li>
              ))}
            </ul>
            <p className="recipe-calories">{numberWithCommas(calories)}</p>
            <img src={image} alt="recipe-img"/>
        </div>
    )
}

export default Recipe