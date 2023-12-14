import React, { useState } from 'react';
import YoutubeSearchedForOutlinedIcon from '@mui/icons-material/YoutubeSearchedForOutlined';
import "./gif.scss"

function Gif() {
  const API_KEY = 'FBiu38wCrllktRfaGV7YSXUFz2YnKlAc';

  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchGifs = async (query) => {
    setError(false);
    setLoading(true);

    if (query.trim() === '') {
      setGifs([]);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=10`
      );
      const data = await response.json();

      if (data.meta.status !== 200 || !Array.isArray(data.data)) {
        setError(true);
        setGifs([]);
      } else {
        setGifs(data.data);
        setError(false);
      }
    } catch (error) {
      setError(true);
      setGifs([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='gif'>
      <div className="search">
        <YoutubeSearchedForOutlinedIcon />
        <input
          type="text"
          placeholder="Get your favorite GIF :)"
          onChange={(e) => fetchGifs(e.target.value)}
        />
        {loading && <p>Loading...</p>}
        {error && <p>Oops! Something went wrong.</p>}
      </div>

      <div className='display'>
        {gifs.map((gif) => (
          <div key={gif.id}>
            <img src={gif.images.original.url} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gif;
