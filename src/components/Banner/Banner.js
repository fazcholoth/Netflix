import React,{useEffect,useState} from 'react'
import "./Banner.css"
import axios from '../../axios'
import {Apikey} from '../../Constants/Constants'
import {imageUrl}  from  '../../Constants/Constants'

function Banner() {
    const [movie, setmovie] = useState()
    useEffect(()=>{
     axios.get(`trending/all/week?api_key=${Apikey}&language=en-US`).then((response)=>{
        console.log(response.data.results[0]);
        setmovie(response.data.results[0])
     })
    },[]
    )
  return (
    <div className='banner' style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""}`}}>
       <div className='content' >
           <h1 className='title'>{movie? movie.title :""}  </h1>
           <div className='banner_buttons' >
               <button className='button' >Play</button>
               <button className='button' >My list</button>
           </div>
           <h1 className='description'>{movie ? movie.overview:""}</h1>
       </div>
   <div className="fade_bottom"></div>
   </div>
  )
}

export default Banner