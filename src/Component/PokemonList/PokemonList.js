import React from 'react';
import {Link} from "react-router-dom";
import "./pokemon.css";


const PokemonList = ({pokemon, onClick}) => {
    return (
        <div>
          <ol>
                {pokemon.map((item,i) =>(
                <Link to="/details" key = {item.url}>

                    <li className = "list" key = {i} onClick={()=>onClick(item.url)}>{item.name}</li>
                </Link>
                
                ))}
            </ol>
        </div>
    );
};

export default PokemonList;