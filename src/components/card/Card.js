import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Card.css'

const Card = ({mealData, handleAddToCart}) => {
    const {strMeal, strMealThumb, strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15, strCategory, strArea}=mealData;
    

    return (
        <div className='card-con'>
            <div>
            <img className='img-meal' src= {strMealThumb} alt="" />
            <h3> {strMeal}</h3>
            <p>Meal Category : {strCategory}</p>
            <p>Area : {strArea}</p>
            <p>Ingredients : {strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4}, {strIngredient5}, {strIngredient6}, {strIngredient7}, {strIngredient8}, {strIngredient9}, {strIngredient10}, {strIngredient11}, {strIngredient12}, {strIngredient13}, {strIngredient14}, {strIngredient15}</p>
            </div>
            <div className='card-btn'>           
                <button onClick={()=>handleAddToCart(mealData)} > <FontAwesomeIcon icon={faCartPlus} ></FontAwesomeIcon> Add To Cart</button>
            </div>
        </div>
    );
};

export default Card;