import React from 'react'
import { useState } from 'react';

const Pagination = ({totalPosts,paginate,activePageNumber}) => {
  const pageNumbers = [];
    const sym=['<','>'];
    var currActive=["","","",""];

    const [active, setActive]=useState(currActive);
  for(let i = 1 ; i<= Math.ceil(totalPosts/3);i++){
        pageNumbers.push(i);
  }

  function handleClick(number){
    console.log("HandleClickCAlled")
    paginate(number);
    currActive=["","","",""];
    currActive[number-1]="active-page";
    setActive(currActive);
  }
  function handleInc(){
        if(activePageNumber< 4){
        handleClick((Math.ceil(activePageNumber + 1)));
        }
  }
  function handleDec(){
        if(activePageNumber>1){
      handleClick((Math.ceil(activePageNumber -1)));
  }
}


  
    return (
        <nav>
            <ul className='pagination footer'>
                <li onClick={()=>handleDec()}>{sym[0]}</li>
                {pageNumbers.map(number=>(
                    <li key={number}  onClick={()=>handleClick(number)} className="page-item page active-page" id={active[number-1]}>
                            <a  href='!#' id="page-link">{number}</a>
                    </li>
                ))}
                <li onClick={()=>handleInc()}>{sym[1]}</li>
            </ul>
        </nav>
  )
}

export default Pagination