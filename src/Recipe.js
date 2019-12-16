import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul className={style.igredients}>
              {ingredients.map(ingredient => (
                <li>
                  {ingredient.text}
                </li>
              ))}
            </ul>
            <p>{calories}</p>
            <img src={image} alt="recipe-img"/>
        </div>
    )
}

export default Recipe