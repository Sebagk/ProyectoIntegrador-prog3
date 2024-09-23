import {Component} from 'react'
import { Link } from 'react-router-dom'
import { options } from '../options'
import Card from '../components/Card/Card'

export default class SearchResults extends Component{

    constructor(props){
        super(props)
        this.state ={
          resultados: []
        }
    }

    componentDidMount(){
      const { query } = this.props.location.state;
      if(query){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
        .then(response => response.json())
        .then(data => this.setState({ resultados: data.results }))
        .catch((e) => console.log(e))
        

      }
    }
render(){
  return (
    <div>
      {this.state.resultados.length > 0 ? (
          this.state.resultados.slice(0, 20).map((resultado, index) => (
            <Card pelicula = {resultado} key={index}/>
          ))
        ) : (
          <h1>No hay resultados</h1> 
        )}
    </div>
  )
    }
} 
