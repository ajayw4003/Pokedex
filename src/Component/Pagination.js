import React from 'react';
import "./pagination.css";

const Pagination = ({listPerPage, totalList, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i<=(Math.round(totalList/listPerPage)); i++){
        pageNumbers.push(i);
    }
    return (
        <span>
            {pageNumbers.map(number=>(

                <button href = "#" key ={number} onClick = {()=>paginate(number)}><span className = "pageButton">{number}</span></button>
            ))}
        </span>
    );
};

export default Pagination;