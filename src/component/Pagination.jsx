import React from 'react'
import { useState } from 'react';

const Pagination = ({totalPosts,paginate,activePageNumber}) => {
  const pageNumbers = [];
    const sym=['<','>'];
    var currActive=["active-page","","",""];

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
                <li onClick={()=>handleDec()} className="symbol">{sym[0]}</li>
                {pageNumbers.map(number=>(
                    <li key={number}  onClick={()=>handleClick(number)} className="page-item page active-page" id={active[number-1]}>
                            < div id="page-link">{number}</div>
                    </li>
                ))}
                <li onClick={()=>handleInc()} className="symbol">{sym[1]}</li>
            </ul>
        </nav>
  )
}

export default Pagination