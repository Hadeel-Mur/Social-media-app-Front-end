import React, {useState} from 'react'
import "./movies.scss"
import YoutubeSearchedForOutlinedIcon from '@mui/icons-material/YoutubeSearchedForOutlined';




function Movies() {
  const API_KEY = 'a7018fe4'


  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  

  const fetchMovie = async (title) => {
    setError(false)
    setLoading(true)

    if (title.trim() === '') {
        setMovie({});
        setLoading(false);
        return;
      }
    

    try {
        const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
        const data = await response.json()

        if(data.Error) {
            setError(true)
        }else{
            setMovie(data)
        }
    } catch (error) {
        setError(true)
    } 
       setLoading(false)
  }

  return (
    <div className='movies'>

        <div className="search">
          <YoutubeSearchedForOutlinedIcon/>
          <input 
           type="text" 
           placeholder="Know everything about your favourite movie :)" 
           onChange={(e) => fetchMovie(e.target.value)}/>
           {loading && <p>Loading...</p>}
           {error && <p>Oops!somthing went Wrong.</p>}
        </div>
        
        {movie.Title && (
        <div className='disply'>
        <div className='movieInfo'>
        <h2>{movie.Title}</h2>
        <p>Released: {movie.Released}</p>
        <p>Rated: {movie.Rated}</p>
        <p>Runtime: {movie.Runtime}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Director: {movie.Director}</p>
        <p>Writer: {movie.Writer}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Plot: {movie.Plot}</p>
        </div>
        <div>
        <img src={movie.Poster} alt=''/> 
        </div>
        </div> )} 
        </div>
  )
}

export default Movies;