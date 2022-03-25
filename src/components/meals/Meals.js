import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import './Meals.css'

const Meals = () => {
const [meals, setMeals]= useState([]);

useEffect( () => {
fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res=>res.json())
.then(data=>setMeals(data.meals))
},[])

    return (
        <div className='meal-container'>
            {
                meals.map(meal=>(
                    <Card key={meal.idMeal}  data={meal}/>)) 
            }
            
        </div>
    );
};

export default Meals;