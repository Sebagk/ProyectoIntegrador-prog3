import React from 'react'
import { options } from '../options'
import { Component } from 'react'
import Favorito from '../components/Favorito/Favorito'
import './Style.css'


class Detalle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movie: [],
            id: props.match.params.id,
        }
    }

    componentDidMount(){
      fetch(`https://api.themoviedb.org/3/movie/${this.state.id}`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          movie : data})           
      })
      .catch((error) => {
        console.log(error);
      });
    }


    render() {
      const { poster_path, title, vote_average, genres, release_date, runtime, overview } = this.state.movie
      
      return (
        <div className="movie-detail">
        <img 
          src={`https://image.tmdb.org/t/p/w400${poster_path}`} 
          alt={title} 
          className="movie-poster" 
        />
      <h1 className="movie-title">{title}</h1>
      <div className="movie-info">
        <p><strong>Rating:</strong> {vote_average}</p>
        <p><strong>Genres:</strong> {genres && genres.map((genre) => genre.name).join(', ')} </p>  
        <p><strong>Release Date:</strong> {release_date}</p>
        <p><strong>Runtime:</strong> {runtime} minutes</p>
      </div>
      <h2>Overview</h2>
      <p>{overview}</p>
      <Favorito movie={this.state.movie} />
    </div>
      )
    }

}

export default Detalle