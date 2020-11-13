import React from 'react';
import style from'./recipe.module.css';


const Recipe = ({title,cals,img,ingrades}) =>{
    return(
        <div className={style.recipes}>
        <h1>{title}</h1>
        <p>{cals}</p>
        <ol>
            { ingrades.map(ingrade => (
                <li>{ingrade}</li>
            ))}
        </ol>
        <img className={style.repimages} src={img} alt=""/>
        </div>
    );
};

export default Recipe;