import React from 'react';

const Details = ({detail}) => {
    return (
        <div>
            <div>Abilities:
            <ol>
                {detail.abilities.map((ability, i)=>(
                    <li key = {i}>{ability.ability.name}</li>
                ))}
            </ol>
            </div>
            <div>Height:{detail.height}</div>
            <div>Weight:{detail.weight}</div>
            <div>Moves:
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