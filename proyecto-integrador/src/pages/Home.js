import React, { Component } from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import CardGrid from "../components/CardGrid/CardGrid"

class home extends Component {
  constructor(props){
    super(props)
    this.state = {
      populares: null,
      estrenos: null
    }
  }
  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/popular", options)
    .then(response => response.json())
    .then(data => this.setState({
      populares: data.results,
      isLoading: false
    }))
    .catch((error) => {
      console.log(error);
    })
  
  fetch("https://api.themoviedb.org/3/movie/now_playing", options)
    .then(response => response.json())
    .then(data => this.setState({
      estrenos: data.results,
      filteredMovies: data.results,
      isLoading: false
    }))
    .catch((error) => {
      console.log(error);
    })
  }

  
  
  render() {
    return (
      <>
      <CardGrid  link={this.state.populares}/>
      </>
    )
  }}






export default home