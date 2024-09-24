import CardGrid from "../components/CardGrid/CardGrid"
import React, { Component } from 'react'
import { options } from '../options'

export class Estrenos extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      filteredMovies: [],
      filterValue: "",
      isLoading: true,
      actualPage: 1
    }
  }
  componentDidMount(){
    this.setState({
      isLoading: true
    })
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${this.state.actualPage}`, options)
    .then(response => response.json())
    .then(data => this.setState({
      movies: data.results,
      filteredMovies: data.results,
      isLoading: false,
      actualPage: this.state.actualPage + 1
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

  handleLoadMore(){
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${this.state.actualPage}`, options)
    .then(response => response.json())
    .then(data => this.setState({
        movies: this.state.movies.concat(data.results),
        filteredMovies: this.state.movies.concat(data.results),
        actualPage: this.state.actualPage + 1
    }))
}

  render() {
    return (
      <div>
        <input type='text' onChange={(e)=>this.handleFilterChange(e)} value={this.state.filterValue}/>
        <button onClick={()=>this.handleResetFilter()}> </button>
        {!this.state.isLoading && <CardGrid peliculas={this.state.filteredMovies} link="/estrenos"/>}
        <button onClick={()=> this.handleLoadMore()}>Mostrar mas</button>
      </div>
    )
  }
}

export default Estrenos


