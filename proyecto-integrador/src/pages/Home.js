import React, { Component } from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import CardGrid from "../components/CardGrid/CardGrid"
import { options } from '../options'
import { Link } from 'react-router-dom'

class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      populares: [],
      estrenos: []
    }
  }
  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular", options)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        this.setState({
          populares: data.results,
        })
      })
      .catch((error) => {
        console.log(error);
      })

    fetch("https://api.themoviedb.org/3/movie/now_playing", options)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        this.setState({
          estrenos: data.results,

        })
      })
      .catch((error) => {
        console.log(error);
      })
  }



  render() {
    return (
      <>
        <SearchForm history={this.props.history} />
        <h1 style={{ textAlign: 'center', marginTop: '50px', color: '#fff', fontFamily: 'Arial, sans-serif' }}>Populares</h1>
        <CardGrid cantidad={5} peliculas={this.state.populares} />
        <div className="link-container">
          <Link to={"/populares"}>
            <h4>Ver todas +</h4>
          </Link>
        </div>
        <h1 style={{ textAlign: 'center', marginTop: '50px', color: '#fff', fontFamily: 'Arial, sans-serif' }}>Estrenos</h1>
        <CardGrid cantidad={5} peliculas={this.state.estrenos} />
        <div className="link-container">
          <Link to={"/estrenos"}>
            <h4>Ver todas +</h4>
          </Link>
        </div>
      </>
    )
  }
}






export default home