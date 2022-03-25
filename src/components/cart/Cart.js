import React from 'react';

const Cart = ({orderData}) => {
    const {strMeal}= orderData;


    return (
        <div>
            <h1>{strMeal}</h1>
        </div>
    );
};

export default Cart;