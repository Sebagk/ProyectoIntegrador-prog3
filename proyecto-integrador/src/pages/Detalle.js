import React from 'react'
import { options } from '../options'

const Detalle = (props) => {
  const id = props.match.params.id
  const api = `https://api.themoviedb.org/3/movie/${id}`
  let movie = {}
  fetch(api, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    movie = data        
  })
  .catch((error) => {
    console.log(error);
  });

  return (
      <div>
          <p>{movie.title}</p>
      </div>
  )
}

export default Detalle