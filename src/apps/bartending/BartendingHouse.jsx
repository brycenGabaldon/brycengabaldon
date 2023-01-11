import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {data2} from "./Recipes"
import Bartending from './Bartending';

const BartendingHouse = (i) => {
    const [toggle, setToggle] = useState(false)
    const [bartending, setBartending] = useState(false)
    const [number, setNumber] = useState(0) 
    const handleRecipeClick = (i) => {
        setNumber(i+1)
   setBartending(true)


    } 
    return (
        <div className='BarHouseOut'>
             {bartending && <Bartending i={number} toggle= {toggle}/>} 
           {data2.recipes.slice(1,100).map((recipe, i) => {
            return(
<div className='RecipeBox' onClick={()=>handleRecipeClick(i)}>
<div className='RecipeImg'></div>
    <span>{recipe.Name}</span><br/>
    </div>
           )})}
         
        </div>
    );
};

export default BartendingHouse;