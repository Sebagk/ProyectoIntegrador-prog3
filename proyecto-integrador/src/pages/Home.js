import React, { Component } from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import CardGrid from "../components/CardGrid/CardGrid"
import { options } from '../options'

class home extends Component {
  constructor(props){
    super(props)
    this.state = {
      populares: [],
      estrenos: []
    }
  }
  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/popular", options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      this.setState({
      populares: data.results,
    })})
    .catch((error) => {
      console.log(error);
    })
  
  fetch("https://api.themoviedb.org/3/movie/now_playing", options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      this.setState({
      estrenos: data.results,

    })})
    .catch((error) => {
      console.log(error);
    })
  }

  
  
  render() {
    return (
      <>
      <SearchForm history={this.props.history}/>
      <h1>Populares</h1>
      <CardGrid link={"/populares"} cantidad={5} peliculas={this.state.populares}/>
      <h1>Estrenos</h1>
      <CardGrid link={"/estrenos"} cantidad={5} peliculas={this.state.estrenos}/>
      </>
    )
  }}






export default home