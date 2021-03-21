import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Details from './Component/Details/Details';
import PokemonList from './Component/PokemonList/PokemonList';
import Pagination from "./Component/Pagination";


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [limit] = useState(100);
  const [detail, setDetail] = useState({
    abilities:[],
    moves:[]
  });
  const [name1, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage] = useState(10);

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
    // window.addEventListener('scroll', () =>{
    //   if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
    //     setLimit(limit + 10)
    //   }
    // })
    return () => {
      // window.removeEventListener('scroll', ()=>{});
    }
    

  },[limit])
  console.log(pokemon);

   
    
  const handleClick = (item, getName) =>{
    setName(getName);
    fetch(item)
    .then((response) => response.json())
    .then((result) =>{
      console.log(result);
      setDetail(result);

    });
    
  }
  console.log(detail.abilities);
  console.log(pokemon.length);

  const paginate =(number) => {
    setCurrentPage(number);
    console.log("Paginate me");
  }

  const indexOfLastList = currentPage*listPerPage;
  const indexOfFirstList =   indexOfLastList-listPerPage;
  const currentLists = pokemon.slice(indexOfFirstList, indexOfLastList);


  return (
    <div className="pokemon">
    <h1 className ="title">Pokedex</h1>
    
    
    
    <BrowserRouter>
      <Switch>
        <Route path ="/" exact>
          <div>
              <h2>Click on Pokemon to get details</h2>
              <PokemonList pokemon= {currentLists} onClick = {handleClick}/>
              <Pagination listPerPage = {listPerPage} totalList ={limit} paginate={paginate}/>
          </div>
        </Route>

        <Route path = "/details"><Details detail = {detail} name1 ={name1}/></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
