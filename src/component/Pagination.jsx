import React from 'react'
import { useState } from 'react';

const Pagination = ({totalPosts,paginate,activePageNumber}) => {
  const pageNumbers = [];
    const sym=['<','>'];
    const activePage= "active-page";

  for(let i = 1 ; i<= Math.ceil(totalPosts/3);i++){
        pageNumbers.push(i);
  }
  
    return (
        <nav>
            <ul className='pagination footer'>
                <li>{sym[0]}</li>
                {pageNumbers.map(number=>(

                    <li key={number} className="page-item page">
                            <a onClick={()=>paginate(number)} href='!#' id="page-link" className={activePage}>{number}</a>
                    </li>
                ))}
                <li>{sym[1]}</li>
            </ul>
        </nav>
  )
}

export default Pagination