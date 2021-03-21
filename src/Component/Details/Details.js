import React from 'react';
import "./detail.css";

const Details = ({detail}) => {
    return (
        <div>
            <div ><div className = "ability">Abilities:</div>
            <ol>
                {detail.abilities.map((ability, i)=>(
                    <li key = {i}>{ability.ability.name}</li>
                ))}
            </ol>
            </div>
            <div ><span className ="ability">Height:</span> {detail.height}</div>
            <div ><sapn className ="ability">Weight:</sapn> {detail.weight}</div>
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