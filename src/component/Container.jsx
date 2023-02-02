import React, { useEffect, useState } from 'react'
import "../style.css"
import Card from './Card'
import SimpleAccordion from './SimpleAccordian'

function Container() {
    const [data, setData] = useState("");

    useEffect(() => {
      const url = "https://jsonplaceholder.typicode.com/users";
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
       
          setData(json);
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
    }, []);
    
  return (
    <div className='container'>   
    {Object.entries(data)?.map((c) =>
        Object.entries(c)?.map((val) => (val[1].name && <SimpleAccordion key = {val[0]} list={val} />))
      )}
    </div>
  )
}

export default Container