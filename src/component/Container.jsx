import React, { useEffect, useState } from 'react'
import "../style.css"
import Card from './Card'
import SimpleAccordion from './SimpleAccordian'

function Container(props) {

   
  return (
    <div className='container'>   
    {
        Object.entries(props.currentPosts)?.map((val) => (val[1].name && <SimpleAccordion key = {val[0]} list={val} />))
      }

    </div>
  )
}

export default Container