import React from 'react'
import Card from './Card'
import "../style.css"
import Container from './Container'

import { useEffect } from 'react'
import { useState } from 'react'
import Pagination from './Pagination'
function List() {

  const [currentPage,setCurrentPage]= useState(1);
  const [activePageNumber, setActivePageNumber]= useState(1);

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
  


  //Get Current posts
  const indexOfLastPost = currentPage * 3;
  const indexOfFirstPost= indexOfLastPost - 3;
  const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost)
  console.log("Data: "+ data);
  console.log("currentPosts: "+ currentPosts)

  //ChangePage
  const paginate= (pageNumber)=> setCurrentPage(pageNumber);

  return (
    <div className="list">
        <Container currentPosts={currentPosts}/>
        <Pagination totalPosts={data.length} paginate={paginate} activePageNumber={currentPage}/>
    </div>
  )
}

export default List