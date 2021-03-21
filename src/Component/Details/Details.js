import React from 'react';
import "./detail.css";

const Details = ({detail, name1}) => {
    return (
        <div>
            <h2 className ="pokName">Name - {name1}</h2>
            <div ><div className = "ability">Abilities:</div>
            <ol>
                {detail.abilities.map((ability, i)=>(
                    <li key = {i}>{ability.ability.name}</li>
                ))}
            </ol>
            </div>
            <div ><span className ="ability">Height:</span> {detail.height}</div>
            <div ><span className ="ability">Weight:</span> {detail.weight}</div>
            <div><div className ="ability">Moves:</div>
                <ol>
                    {detail.moves.map((move, i)=>(
                        <li key = {i}>{move.move.name}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Details;