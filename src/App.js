import React,{useEffect,useState} from "react";
import './App.css';
import Recipe from './Recipe'; 

const App = ()=>{
  const APP_ID="030c44c0";
  const APP_KEY= "54b3bdc93b4b068c8807fa07813ae69c";
  
  const [recipies,setRecipies] = useState([]);
  const [search,setSearch]= useState('');
  const [query,setQuery]= useState('chicken');

  useEffect(() => {
    getRecipes();},
    [query]);
  

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits); 
    console.log(data.hits);
  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  } 

  return(
    <div className="App">

      
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" value={search} onChange={updateSearch} type="text"></input>
        <button className="search-button" type="submit">search</button>
      </form>


      <div className="recipe">
         {recipies.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        img={recipe.recipe.image}
        cals={recipe.recipe.calories}
        ingrades={recipe.recipe.ingredientLines}/>
     )) }

      </div>
      

    </div>
  );

}
export default App;
 