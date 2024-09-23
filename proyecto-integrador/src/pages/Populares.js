import CardGrid from "../components/CardGrid/CardGrid"
import React, { Component } from 'react'
import { options } from '../options'

export class Populares extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      filteredMovies: [],
      filterValue: "",
      isLoading: true
    }
  }
  componentDidMount(){
    this.setState({
      isLoading: true
    })
    fetch("https://api.themoviedb.org/3/movie/popular", options)
    .then(response => response.json())
    .then(data => this.setState({
      movies: data.results,
      filteredMovies: data.results,
      isLoading: false
    }))
    .catch((error) => {
      console.log(error);
    })
  }
  handleFilterChange(e){
    const userValue = e.target.value
    this.setState({
      filterValue: userValue,
      filteredMovies: this.state.movies.filter(movie => movie.title.toLowerCase().includes(userValue.toLowerCase()))
    })

  }

  handleResetFilter(){
    this.sesState({
      filterValue: "",
      filteredMovies: this.state.movies
    })
  }
  render() {
    return (
      <div>
        <input type='text' onChange={(e)=>this.handleFilterChange(e)} value={this.state.filterValue}/>
        <button onClick={()=>this.handleResetFilter()}> </button>
        {!this.state.isLoading && <CardGrid peliculas={this.state.filteredMovies}/>}
      </div>
    )
  }
}

export default Populares


