import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Cart from '../cart/Cart';
import './Meals.css'

const Meals = () => {
const [meals, setMeals]= useState([]);

useEffect( () => {
fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res=>res.json())
.then(data=>setMeals(data.meals))
},[])

const [cart, setCart]= useState ([]);

const handleAddToCart=(mealData)=>{
    const newCart= [...cart, mealData]
     setCart(newCart)
    // console.log(mealData);
}

    return (
        <div >
            {<div>
                {cart.map((item) =>(
                    <Cart orderData={item}/>
                ) )}
            </div>}

            <div className='meal-container'>
            {
                meals.map(meal=>(
                    <Card key={meal.idMeal}  mealData={meal} handleAddToCart={handleAddToCart}/>)) 
            }
            
            </div>
        </div>
    );
};

export default Meals;