import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Details from './Component/Details';
import PokemonList from './Component/PokemonList';


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(40);
  const [detail, setDetail] = useState({
    abilities:[]
  })

  useEffect(()=>{

    const getPokemon = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon?offset=${20}&limit=${limit}`)
      .then((responce) => responce.json())
      .then((result) =>{
        console.log(result);
        setPokemon(result.results)

      });
    }
    getPokemon();
    window.addEventListener('scroll', () =>{
      if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        setLimit(limit + 10)
      }
    })
    return () => {
      window.removeEventListener('scroll', ()=>{});
    }
    

  }, [limit])
    
  const handleClick =(item)=>{
    fetch(item)
    .then((response) => response.json())
    .then((result) =>{
      console.log(result);
      setDetail(result);
      console.log("I am Here");
    })
  }
  console.log(detail.abilities);

  return (
    <div className="pokemon">
    <h1>Pokemon</h1>
    
    
    <BrowserRouter>
      <Switch>
        <Route path ="/" exact><PokemonList pokemon= {pokemon} onClick = {handleClick}/></Route>
        <Route path = "/details"><Details detail = {detail}/></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
