"use client";
import {useEffect,useState } from 'react'
 

 
function Data() {
  const [data, setData] = useState([])
 
  useEffect(() => {
   
     
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&')
      .then(response => {
           return response.json();
       })
        .then((data) => {
        setData(data.results.slice(0, 10))})
  }, [])
 
 
 
  return (
    <div>
      {data.map((item)=>{
         return(
            <div>
               <div className="image-container">
                    <img  src={`https://image.tmdb.org/t/p/w1280${item.poster_path}`} width="50%"/>
               </div>
               <div className="details-container">
                    <h3>Movie title</h3>
                    <p>{item.original_title}</p>
                    <h3>Release Date</h3>
                    <p>{item.release_date}</p>
                    <h3>Description</h3>
                    <p>{item.overview}</p>  
               </div>
           
           
            </div>
   
           
         );
         
      })};
    </div>
  )
}
 export default Data

 
 


