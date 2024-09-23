import SearchForm from '../components/SearchForm/SearchForm'
import CardGrid from "../components/CardGrid/CardGrid"



import React, { Component } from 'react'

export class Populares extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      filtredMovies: [],
      filterValue: ""
    }
  }
  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/popular")
    .then(response => response.json())
    .then(data => this.setState({
      movies: data.results,
      filteredMovies: data.results
    }
    ))
  }
  handleFilterChange(e){
    const userValue = e.target.value
    this.setState({
      filterValue: userValue,
      filteredMovies: this.state.movies.filter(movie => movie.title.toLowerCase().includes(userValue.toLowerCase()))
    })
  }
  render() {
    return (
      <div>
        <input type='text' onChange={(e)=>this.handleFilterChange(e)} value={this.state.filterValue}/>
        <CardGrid movies={this.state.filteredMovies}/>
      </div>
    )
  }
}

export default Populares


// const Populares = (props) => {
//   return (
//     <main>
//         {/* <SearchForm history={this.props.history} /> */}
//         <h1>Populares</h1>
//         <CardGrid api={"https://api.themoviedb.org/3/movie/popular"} link={"/populares"} cantidad={30}/>
//     </main>
//   )
// }

// export default Populares

