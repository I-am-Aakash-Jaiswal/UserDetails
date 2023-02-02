import React from 'react'
import Page from './Page'

function Footer() {
    var box=['<','1','2','3','4','>']
  return (
    <div className='footer'>
        {box.map((a)=>(<Page sign={a}/>))}
    </div>
  )
}

export default Footer