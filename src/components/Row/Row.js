import React,{useEffect,useState} from 'react'
import "./Row.css"
import axios from '../../axios'
import {Apikey} from '../../Constants/Constants'
import {imageUrl} from '../../Constants/Constants'
import Youtube from 'react-youtube'

function Row(props) {
    const [movies, setmovies] = useState([])
    const [urlid,seturlid] = useState('')
    useEffect(()=>{
     axios.get(props.url).then((response)=>{
        console.log(response);
        setmovies(response.data.results)
     })
    },[]
    )

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handlemovie=(id)=>{
         console.log(id);
         axios.get(`/movie/${id}/videos?api_key=${Apikey}&language=en-US`).then((response)=>{
            if(response.data.results.length!==0){
                seturlid(response.data.results[0])
            }else{
                console.log("array not found");
            }
         })
      }
  return (
    <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((movie)=>
                  <img onClick={()=>handlemovie(movie.id)} className={props.isSmall? 'smallposter':'poster'} alt='poster' src={`${imageUrl+movie.backdrop_path}`} />
                )}
   
            </div>
           { urlid && <Youtube videoId={urlid.key} opts={opts} /> } 
        </div>
  )
}

export default Row