import React from 'react';
import {Link} from "react-router-dom";


const PokemonList = ({pokemon, onClick}) => {
    return (
        <div>
          <ol>
                {pokemon.map((item) =>(
                <Link to="/details" key = {item.url}>

                    <li key = {item.name} onClick={()=>onClick(item.url)}>{item.name}</li>
                </Link>
                
                ))}
            </ol>
        </div>
    );
};

export default PokemonList;